import { authApi } from '../api-client/';
import * as React from 'react';

export default function LoginPage() {
	async function handleLoginClick() {
		// const networkId = await keyStore.getNetworks();
		// 	const keyPair = await keyStore.getKey(networkId[0], this.accountId);
		// 	const message = process.env.NEXT_PUBLIC_MESSAGE;
		// 	const msgEncoded = new TextEncoder().encode(message);
		// 	const signature = keyPair.sign(msgEncoded);
		// 	const publicKey = keyPair.getPublicKey();
		// 	let hex = Buffer.from(signature.signature).toString('hex');
		// 	try {
		// 		await authApi.login({
		// 			wallet_address: this.accountId,
		// 			public_key: publicKey.toString(),
		// 			message: message,
		// 			signature: hex,
		// 			type: 'Near',
		// 		});
		// 	} catch (error) {
		// 		console.log('failed to login', error);
		// 	}
	}

	async function handleGetProfileClick() {
		try {
			await authApi.getProfile();
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}

	async function handleLogoutClick() {
		try {
			await authApi.logout();
		} catch (error) {
			console.log('failed to logout', error);
		}
	}

	return (
		<div>
			<h1>Login Page</h1>

			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleGetProfileClick}>Get Profile</button>
			<button onClick={handleLogoutClick}>Logout</button>
		</div>
	);
}
