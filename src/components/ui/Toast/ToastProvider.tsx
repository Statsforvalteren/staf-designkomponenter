import React, { createContext, useReducer, useCallback, useRef, useEffect, useMemo, useId } from 'react';
import { Toast, ToastAction, ToastContextValue, ToastOptions } from './toast-provider.types';

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

function toastReducer(state: Toast[], action: ToastAction): Toast[] {
  switch (action.type) {
    case 'ADD_TOAST':
      if (state.some((toast) => toast.id === action.payload.id)) {
        return state;
      }
      return [action.payload, ...state];
    case 'REMOVE_TOAST':
      return state.filter((toast) => toast.id !== action.payload);
    default:
      return state;
  }
}

interface ToastProviderProps {
  children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, dispatch] = useReducer(toastReducer, []);
  const timeoutsRef = useRef<Map<string, NodeJS.Timeout>>(new Map());
  const id = useId();

  const removeToast = useCallback((id: string) => {
    const timeout = timeoutsRef.current.get(id);
    if (timeout) {
      clearTimeout(timeout);
      timeoutsRef.current.delete(id);
    }
    dispatch({ type: 'REMOVE_TOAST', payload: id });
  }, []);

  const addToast = useCallback(
    (message: string, options: ToastOptions = {}) => {
      const {
        type = 'success',
        position = 'top',
        duration = 5000,
      } = options;

      const toast: Toast = {
        id,
        message,
        type,
        position,
        duration,
      };

      dispatch({ type: 'ADD_TOAST', payload: toast });

      const timeout = setTimeout(() => {
        removeToast(id);
      }, duration);

      timeoutsRef.current.set(id, timeout);
    },
    [removeToast]
  );

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeout) => clearTimeout(timeout));
      timeoutsRef.current.clear();
    };
  }, []);

  const value = useMemo<ToastContextValue>(
    () => ({
      toasts,
      addToast,
      removeToast,
    }),
    [toasts, addToast, removeToast]
  );

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export { ToastContext };