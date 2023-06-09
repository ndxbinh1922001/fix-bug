import { providers } from 'near-api-js';

// wallet selector UI
import '@near-wallet-selector/modal-ui/styles.css';
import { setupModal } from '@near-wallet-selector/modal-ui';
import LedgerIconUrl from '@near-wallet-selector/ledger/assets/ledger-icon.png';
import MyNearIconUrl from '@near-wallet-selector/my-near-wallet/assets/my-near-wallet-icon.png';
import * as nearAPI from 'near-api-js';

// wallet selector options
import type {
	Network,
	NetworkId,
	WalletSelector,
	Wallet as WalletSelectorWallet,
} from '@near-wallet-selector/core';
import { setupWalletSelector } from '@near-wallet-selector/core';
import { setupLedger } from '@near-wallet-selector/ledger';
import { setupMyNearWallet } from '@near-wallet-selector/my-near-wallet';
import { setupWalletConnect } from '@near-wallet-selector/wallet-connect';
import axios from 'axios';
import { authApi } from '../api-client';

const THIRTY_TGAS = '30000000000000';
const NO_DEPOSIT = '0';

type WalletProps = {
	createAccessKeyFor?: string;
	network?: NetworkId | Network;
};

// Wallet that simplifies using the wallet selector
export class Wallet {
	walletSelector?: WalletSelector;
	wallet?: WalletSelectorWallet | null;
	network: NetworkId | Network | undefined;
	createAccessKeyFor: string | undefined;
	accountId: string | undefined;
	keyStore: any;

	constructor(
		props: WalletProps = { createAccessKeyFor: '', network: 'testnet' }
	) {
		const { createAccessKeyFor, network } = props;
		// Login to a wallet passing a contractId will create a local
		// key, so the user skips signing non-payable transactions.
		// Omitting the accountId will result in the user being
		// asked to sign all transactions.
		this.createAccessKeyFor = createAccessKeyFor;
		this.network = network;
	}

	// To be called when the website loads
	async startUp() {
		if (!this.network) {
			throw new Error('Network not set by passing it to the constructor');
		}

		this.walletSelector = await setupWalletSelector({
			network: this.network,
			modules: [
				setupMyNearWallet({ iconUrl: MyNearIconUrl.src }),
				setupLedger({ iconUrl: LedgerIconUrl.src }),
				setupWalletConnect({
					metadata: {
						name: 'App Name',
						description: 'My App Description',
						url: 'https://myapp.com',
						icons: ['https://myapp.com/favicon.ico'],
					},
					projectId: 'fbc8adabe1de4762d151952179db25dd',
				}),
			],
		});

		const isSignedIn = this.walletSelector.isSignedIn();

		// If user is signed in, update fields, otherwise do nothing
		if (isSignedIn) {
			const accountState =
				this.walletSelector.store.getState().accounts[0];

			if (!accountState) {
				return;
			}

			this.wallet = await this.walletSelector.wallet();
			this.accountId = accountState.accountId;
			try {
				this.keyStore =
					new nearAPI.keyStores.BrowserLocalStorageKeyStore();
				const networkId = await this.keyStore.getNetworks();
				const keyPair = await this.keyStore.getKey(
					networkId[0],
					this.accountId
				);
				const message = process.env.NEXT_PUBLIC_MESSAGE;
				const msgEncoded = new TextEncoder().encode(message);
				const signature = keyPair.sign(msgEncoded);
				const publicKey = keyPair.getPublicKey();
				console.log('publicKey', publicKey);
				let hex = Buffer.from(signature.signature).toString('hex');

				const res = await authApi.login({
					wallet_address: this.accountId,
					public_key: publicKey.toString(),
					message: message,
					signature: hex,
					type: 'Near',
					role: 'Admin',
				});
				console.log('res', res);
				console.log('verified backend success');
			} catch (error) {
				console.log('failed verify backend server', error);
			}
		}

		return isSignedIn;
	}

	// Sign-in method
	async signIn() {
		if (!this.walletSelector) {
			throw new Error(
				'Wallet selector not initialized by running startUp() first'
			);
		}

		const description = 'Please select a wallet to sign in.';
		const modal = setupModal(this.walletSelector, {
			contractId: this.createAccessKeyFor || '',
			description,
		});
		modal.show();
	}

	// async verify() {
	// 	try {
	// 		const networkId = await this.keyStore.getNetworks();
	// 		const keyPair = await this.keyStore.getKey(
	// 			networkId[0],
	// 			this.accountId
	// 		);
	// 		const message = process.env.NEXT_PUBLIC_MESSAGE;
	// 		const msgEncoded = new TextEncoder().encode(message);
	// 		const signature = keyPair.sign(msgEncoded);
	// 		const publicKey = keyPair.getPublicKey();
	// 		console.log('publicKey', publicKey);
	// 		let hex = Buffer.from(signature.signature).toString('hex');

	// 		const res = await authApi.login({
	// 			wallet_address: this.accountId,
	// 			public_key: publicKey.toString(),
	// 			message: message,
	// 			signature: hex,
	// 			type: 'Near',
	// 		});
	// 		console.log('res', res);
	// 		console.log('verified backend success');
	// 	} catch (error) {
	// 		console.log('failed verify backend server', error);
	// 	}
	// }

	// Sign-out method
	signOut() {
		if (!this.wallet) {
			throw new Error(
				'Wallet not initialized by running startUp() first'
			);
		}

		this.wallet.signOut();
		this.wallet = this.accountId = this.createAccessKeyFor = undefined;
		window.location.replace(
			window.location.origin + window.location.pathname
		);
	}

	// Make a read-only call to retrieve information from the network
	async viewMethod({
		contractId,
		method,
		args = {},
	}: {
		contractId: string;
		method: string;
		args?: Record<string, unknown>;
	}) {
		if (!this.walletSelector) {
			throw new Error(
				'Wallet selector not initialized by running startUp() first'
			);
		}
		const { network } = this.walletSelector.options;
		const provider = new providers.JsonRpcProvider({
			url: network.nodeUrl,
		});

		const res = await provider.query({
			request_type: 'call_function',
			account_id: contractId,
			method_name: method,
			args_base64: Buffer.from(JSON.stringify(args)).toString('base64'),
			finality: 'optimistic',
		});

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		return JSON.parse(Buffer.from(res.result).toString());
	}

	// Call a method that changes the contract's state
	async callMethod({
		contractId,
		method,
		args = {},
		gas = THIRTY_TGAS,
		deposit = NO_DEPOSIT,
	}: {
		contractId: string;
		method: string;
		args?: Record<string, unknown>;
		gas?: string;
		deposit?: string;
	}) {
		if (!this.wallet) {
			throw new Error(
				'Wallet not initialized by running startUp() first'
			);
		}
		// Sign a transaction with the "FunctionCall" action
		return await this.wallet.signAndSendTransaction({
			signerId: this.accountId,
			receiverId: contractId,
			actions: [
				{
					type: 'FunctionCall',
					params: {
						methodName: method,
						args,
						gas,
						deposit,
					},
				},
			],
		});
	}

	// Get transaction result from the network
	async getTransactionResult(txhash: string) {
		if (!this.walletSelector) {
			throw new Error(
				'Wallet selector not initialized by running startUp() first'
			);
		}

		const { network } = this.walletSelector.options;
		const provider = new providers.JsonRpcProvider({
			url: network.nodeUrl,
		});

		// Retrieve transaction result from the network
		const transaction = await provider.txStatus(txhash, 'unnused');
		return providers.getTransactionLastResult(transaction);
	}
}
