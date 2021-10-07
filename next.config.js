/* eslint-disable @typescript-eslint/no-var-requires */
const withTM = require('next-transpile-modules')([
    '@project-serum/sol-wallet-adapter',
    '@solana/wallet-adapter-base',
    '@solana/wallet-adapter-react',
    '@rasreee/solana-wallet-adapter-react-ui',
    '@solana/wallet-adapter-wallets',
    '@solana/wallet-adapter-phantom',
    '@solana/wallet-adapter-sollet'
]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
    reactStrictMode: true,
    webpack5: true,
});
