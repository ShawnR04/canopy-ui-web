import React, { ReactNode } from 'react';

export interface TriggerItemData {
  label: string;
  icon: ReactNode;
  buttonClass?: string;
  labelClass?: string;
  onClick: () => void;
}

export function TriggerButton({
  label,
  icon,
  buttonClass = 'border-border bg-card hover:border-border hover:bg-accent/40',
  labelClass = 'text-foreground',
  onClick,
}: TriggerItemData) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border p-3.5 text-center shadow-xs transition-all active:scale-95 ${buttonClass}`}
    >
      {icon}
      <span className={`text-xs font-medium ${labelClass}`}>{label}</span>
    </button>
  );
}