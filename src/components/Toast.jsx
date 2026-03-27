import React, { useState, useEffect, createContext, useContext, useCallback } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

const icons = {
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
};

const colors = {
  success: 'border-green-500',
  error: 'border-red-500',
  info: 'border-blue-500',
};

const Toast = ({ toast, onRemove }) => {
  useEffect(() => {
    const t = setTimeout(() => onRemove(toast.id), 3000);
    return () => clearTimeout(t);
  }, [toast.id, onRemove]);

  return (
    <div className={`flex items-start gap-3 bg-white dark:bg-gray-800 border-l-4 ${colors[toast.type]} rounded-lg shadow-xl p-4 min-w-72 animate-slide-up`}>
      {icons[toast.type]}
      <p className="flex-1 text-sm text-gray-800 dark:text-gray-200">{toast.message}</p>
      <button onClick={() => onRemove(toast.id)} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={addToast}>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {toasts.map(t => <Toast key={t.id} toast={t} onRemove={removeToast} />)}
      </div>
    </ToastContext.Provider>
  );
};
