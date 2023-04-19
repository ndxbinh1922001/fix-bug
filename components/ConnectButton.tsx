'use client';

import { memo, useEffect, useState } from 'react';
import { useAppSelector } from '../stores/store';
import { selectWallet } from '../stores/walletSlice';
import UserDropdown from './UserDropdown';
import { getAcountIdAndPublicKey } from '../utils';

function ConnectWalletButton() {
	const wallet = useAppSelector(selectWallet);
	const onConnectWalletClicked = async () => {
		if (!wallet)
			return {
				title: 'Wallet not initialized',
				description: 'Please try again later',
				status: 'error',
			};

		if (wallet.accountId) {
			return {
				title: 'Wallet already connected',
				status: 'info',
			};
		}
		wallet.signIn();
	};

	const isWalletConnected = !!wallet?.accountId;
	return isWalletConnected ? (
		<UserDropdown />
	) : (
		<button
			onClick={onConnectWalletClicked}
			className="border-[1px]  mr-14  cursor-pointer connect-button before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-full before:rounded-[20px] before:bg-red-600 before:transition-all before:duration-[500ms] before:z-[-1] hover:text-white hover:z-[2] hover:before:w-full"
		>
			Connect
		</button>
	);
}

export default memo(ConnectWalletButton);
