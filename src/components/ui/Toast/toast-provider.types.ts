export type ToastType = 'success' | 'info' | 'warning' | 'danger';

export type ToastPosition = 'top' | 'center' | 'bottom';

export type Toast = {
  id: string;
  message: string;
  type: ToastType;
  position: ToastPosition;
  duration: number;
}

export type ToastOptions = {
  type?: ToastType;
  position?: ToastPosition;
  duration?: number;
  id?: string;
}

export type ToastContextValue = {
  toasts: Toast[];
  addToast: (message: string, options?: ToastOptions) => void;
  removeToast: (id: string) => void;
}

export type ToastAction =
  | { type: 'ADD_TOAST'; payload: Toast }
  | { type: 'REMOVE_TOAST'; payload: string };