import { createGlobalStyle } from 'styled-components';

export const WalletAdapterStyles = createGlobalStyle`
    .ras-wallet-adapter-modal {
        position: fixed;
        overflow: hidden;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.65);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5em 1em;
        z-index: 999999;
        box-sizing: border-box;
        transition: opacity linear 150ms;
    }

    .ras-wallet-adapter-modal > .ras-wallet-adapter-modal-fade-in {
        animation: fade-in 1s 1 linear;
        animation-fill-mode: forwards;
        opacity: 0;
    }

    @keyframes fade-in {
        0% {
            animation-timing-function: cubic-bezier(0.2242, 0.7499, 0.3142, 0.8148);
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    .ras-wallet-adapter-modal-wrapper {
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        z-index: 1050;
        max-width: 400px;
        border-radius: 10px;
        background: #2c2d30;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
        font-family: 'Inter', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-weight: 600;
        padding: 40px 20px 20px;
        flex: 1;
    }

    .ras-wallet-adapter-modal-overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .ras-wallet-adapter-modal-list {
        z-index: 2;
        position: relative;
        margin: 0 auto;
        background-color: #303030;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 3px;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 100%;
        padding: 15px 20px;
        color: #c3c0c0;
        margin: 0 0 12px;
        padding: 0;
        width: 100%;
        list-style: none;
    }

    .ras-wallet-adapter-modal-list li:not(:first-of-type) {
        margin-top: 12px;
    }

    .ras-wallet-adapter-button {
        background-color: #404144;
        border: none;
        border-radius: 6px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-family: 'Inter', 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
        font-weight: 600;
        height: 50px;
        line-height: 50px;
        padding: 0 20px;
    }

    .ras-wallet-adapter-button-trigger {
        background-color: #4e44ce;
    }

    .ras-wallet-adapter-button:not([disabled]):focus-visible {
        outline-color: white;
    }

    .ras-wallet-adapter-button:not([disabled]):hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
    }

    .ras-wallet-adapter-button[disabled] {
        background: #404144;
        color: #999;
        cursor: not-allowed;
    }

    .ras-wallet-adapter-button-end-icon,
    .ras-wallet-adapter-button-start-icon,
    .ras-wallet-adapter-button-end-icon img,
    .ras-wallet-adapter-button-start-icon img {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
    }

    .ras-wallet-adapter-button-end-icon {
        margin-left: 8px;
    }

    .ras-wallet-adapter-button-start-icon {
        margin-right: 8px;
    }

    .ras-wallet-adapter-collapse {
        z-index: 2;
        position: relative;
        margin: 0 auto;
        border: 1px solid rgba(255, 255, 255, 0.25);
        border-radius: 3px;
        overflow-x: hidden;
        overflow-y: auto;
        max-height: 100%;
        padding: 15px 20px;
        color: #c3c0c0;
    }

    .ras-wallet-adapter-dropdown {
        position: relative;
        display: inline-block;
    }

    .ras-wallet-adapter-dropdown-list {
        position: absolute;
        z-index: 99;
        display: grid;
        grid-template-rows: 1fr;
        grid-row-gap: 10px;
        padding: 10px;
        top: 100%;
        right: 0;
        margin: 0;
        list-style: none;
        background: #2c2d30;
        border-radius: 10px;
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6);
        opacity: 0;
        visibility: hidden;
        transition: opacity 200ms ease, transform 200ms ease, visibility 200ms;
    }

    .ras-wallet-adapter-dropdown-list-active {
        opacity: 1;
        visibility: visible;
        transform: translateY(10px);
    }

    .ras-wallet-adapter-dropdown-list-item {
        background: #404144;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        cursor: pointer;
        white-space: nowrap;
        box-sizing: border-box;
        padding: 0 20px;
        width: 100%;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        height: 37px;
        color: white;
    }

    .ras-wallet-adapter-dropdown-list-item:not([disabled]):hover {
        background-image: linear-gradient(rgba(0, 0, 0, 0.15) 0 0);
    }

    .ras-wallet-adapter-modal-collapse-button svg {
        align-self: center;
        fill: #999;
    }

    .ras-wallet-adapter-modal-collapse-button.ras-wallet-adapter-modal-collapse-button-active svg {
        transform: rotate(180deg);
        transition: transform ease-in 150ms;
    }


    .ras-wallet-adapter-modal-button-close {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 10px;
        cursor: pointer;
        background: none;
        border: none;
        border-radius: 6px;
    }

    .ras-wallet-adapter-modal-button-close:focus-visible {
        outline-color: white;
    }

    .ras-wallet-adapter-modal-button-close svg {
        fill: #777;
        transition: fill 200ms ease 0s;
    }

    .ras-wallet-adapter-modal-button-close:hover svg {
        fill: #fff;
    }

    .ras-wallet-adapter-modal-logo {
        max-width: 100%;
    }

    .ras-wallet-adapter-modal-logo-wrapper {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        background: #141515;
        margin-bottom: 10px;
        padding: 12px;
    }

    .ras-wallet-adapter-button {
        width: 100%;
    }

    .ras-wallet-adapter-modal-wrapper-no-logo {
        padding-top: 30px;
    }

    .ras-wallet-adapter-modal-title {
        font-weight: 600;
        font-size: 34px;
        line-height: 41px;
        margin-bottom: 27px;
        margin-top: 0;
        width: 100%;
        text-align: center;
        color: #ffffff;
    }

    @media (max-width: 374px) {
        .ras-wallet-adapter-modal-title {
            font-size: 26px;
        }
    }
`;
