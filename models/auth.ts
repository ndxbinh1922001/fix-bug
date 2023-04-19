import { BlockchainType } from './common';

export interface LoginPayload {
	wallet_address: string | undefined;

	public_key: string;

	message: string | undefined;

	signature: any;

	type: BlockchainType;

	role: any;
}
