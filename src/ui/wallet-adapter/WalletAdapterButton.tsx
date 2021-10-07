import React, { CSSProperties, FC, MouseEvent, ReactElement } from 'react';

export interface WalletAdapterButtonProps {
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  style?: CSSProperties;
  tabIndex?: number;
}

export const WalletAdapterButton: FC<WalletAdapterButtonProps> = (props) => {
  const justifyContent = props.endIcon || props.startIcon ? 'space-between' : 'center';

  return (
    <button
      className={`ras-wallet-adapter-button ${props.className || ''}`}
      disabled={props.disabled}
      onClick={props.onClick}
      style={{ justifyContent, ...props.style }}
      tabIndex={props.tabIndex || 0}
    >
      {props.startIcon && <i className="ras-wallet-adapter-button-start-icon">{props.startIcon}</i>}
      {props.children}
      {props.endIcon && <i className="ras-wallet-adapter-button-end-icon">{props.endIcon}</i>}
    </button>
  );
};
