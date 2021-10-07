import { Wallet } from '@solana/wallet-adapter-wallets';
import React, { FC, MouseEventHandler } from 'react';
import { WalletAdapterButton } from './WalletAdapterButton';
import { WalletIcon } from './WalletIcon';

export interface WalletListItemProps {
  handleClick: MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  wallet: Wallet;
}

export const WalletListItem: FC<WalletListItemProps> = ({ handleClick, tabIndex, wallet }) => {
  return (
    <li>
      <WalletAdapterButton onClick={handleClick} endIcon={<WalletIcon wallet={wallet} />} tabIndex={tabIndex}>
        {wallet.name}
      </WalletAdapterButton>
    </li>
  );
};
