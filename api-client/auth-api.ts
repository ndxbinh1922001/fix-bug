import { LoginPayload } from '../models/index';
import axiosClient from './axios-client';

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('api/users/login', payload);
	},

	logout() {
		return axiosClient.post('api/users/logout');
	},

	getProfile() {
		return axiosClient.get('/profile');
	},
};
