import React, { FC, MouseEvent, useCallback } from 'react';
import { WalletAdapterButton, WalletAdapterButtonProps } from './WalletAdapterButton';
import { useWalletModal } from './useWalletModal';

export const WalletModalButton: FC<WalletAdapterButtonProps> = ({
  children = 'Select Wallet',
  onClick,
  ...props
}) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [onClick, setVisible, visible]
  );

  return (
    <WalletAdapterButton
      className="ras-wallet-adapter-button-trigger"
      onClick={handleClick}
      {...props}
    >
      {children}
    </WalletAdapterButton>
  );
};
