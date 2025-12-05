import { useState } from 'react';
import { Alert } from '@digdir/designsystemet-react';
import { useToast } from './use-toast';
import type { Toast, ToastPosition } from './toast-provider.types';
import styles from './ToastContainer.module.css';

interface ToastItemProps {
  toast: Toast;
  onClose: (id: string) => void;
}

function ToastItem({ toast, onClose }: ToastItemProps) {
  const [isExiting, setIsExiting] = useState(false);

  function handleClose() {
    setIsExiting(true);
    // Allow animation to complete before removing from DOM
    setTimeout(() => {
      onClose(toast.id);
    }, 250);
  }

  return (
    <Alert
      data-color={toast.type}
      role="alert"
      className={`${styles.toastItem} ${isExiting ? styles.exiting : ''}`}
    >
      <div className={styles.toastContent}>
        <span className={styles.toastMessage}>{toast.message}</span>
        <button
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Lukk varsel"
          type="button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.53033 5.46967C6.23744 5.17677 5.76256 5.17677 5.46967 5.46967C5.17678 5.76256 5.17678 6.23743 5.46967 6.53033L10.9393 12L5.46967 17.4697C5.17678 17.7626 5.17678 18.2374 5.46967 18.5303C5.76256 18.8232 6.23744 18.8232 6.53033 18.5303L12 13.0607L17.4697 18.5303C17.7626 18.8232 18.2374 18.8232 18.5303 18.5303C18.8232 18.2374 18.8232 17.7626 18.5303 17.4697L13.0607 12L18.5303 6.53033C18.8232 6.23743 18.8232 5.76256 18.5303 5.46967C18.2374 5.17677 17.7626 5.17677 17.4697 5.46967L12 10.9393L6.53033 5.46967Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </Alert>
  );
}

interface ToastContainerSectionProps {
  position: ToastPosition;
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainerSection({ position, toasts, onRemove }: ToastContainerSectionProps) {
  const positionToasts = toasts.filter((toast) => toast.position === position);

  if (positionToasts.length === 0) {
    return null;
  }

  return (
    <div className={styles.toastContainer} data-position={position}>
      {positionToasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={onRemove} />
      ))}
    </div>
  );
}

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <>
      <ToastContainerSection position="top" toasts={toasts} onRemove={removeToast} />
      <ToastContainerSection position="center" toasts={toasts} onRemove={removeToast} />
      <ToastContainerSection position="bottom" toasts={toasts} onRemove={removeToast} />
    </>
  );
}