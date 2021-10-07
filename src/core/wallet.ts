import { WalletAdapter } from '@solana/wallet-adapter-base';
import { AnchorWallet } from '@solana/wallet-adapter-react';

export type IWallet = AnchorWallet & WalletAdapter;

export const isSolanaWallet = (obj: WalletAdapter): obj is IWallet => {
  return obj.publicKey !== null;
};
