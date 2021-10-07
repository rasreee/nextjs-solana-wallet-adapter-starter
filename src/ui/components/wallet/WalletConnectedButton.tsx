import { IWallet } from '@core/wallet';
import { Button } from '@ui/atoms';
import { ChevronIcon } from '@ui/icons';
import React, { useCallback } from 'react';
import { useBreakpoints } from 'react-match-breakpoints';
import { css } from 'styled-components';

interface WalletConnectedButtonProps {
  wallet: IWallet;
}

export const WalletConnectedButton: React.FC<WalletConnectedButtonProps> = ({ wallet }) => {
  const {
    mobile: { big: isMobile }
  } = useBreakpoints();

  const address = wallet.publicKey.toString();

  const handleClick = useCallback(() => {
    wallet.disconnect();
  }, [wallet]);

  return (
    <div>
      <Button
        onClick={handleClick}
        endIcon={<ChevronIcon minWidth={20} />}
        fontSize={[13, 16]}
        css={css`
          text-transform: none;
          overflow: hidden;
          text-overflow: ellipsis;
        `}
      >
        {`${address.substr(0, isMobile ? 2 : 6)}...${address
          .toString()
          .substr(address.length - (isMobile ? 2 : 3), isMobile ? 2 : 3)}`}
      </Button>
    </div>
  );
};
