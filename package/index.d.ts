declare module 'niz-react-toast' {
  import React from "react";

  export interface ToastCenterProps {
    position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    autoClose?: boolean;
    autoCloseDuration?: number;
    theme?: string;
  }

  export interface ToastPromiseMessages {
    pending: string;
    success: string;
    error: string;
  }

  export interface ToastService {
    (message: string): void;
    success: (message: string) => void;
    error: (message: string) => void;
    warning: (message: string) => void;
    info: (message: string) => void;
    loading: (message: string) => void;
    promise: <T>(
      promise: Promise<T>,
      messages: ToastPromiseMessages
    ) => Promise<T>;
  }

  export const ToastCenter: React.FC<ToastCenterProps>;
  export const Toast: ToastService;
  export default Toast;
}