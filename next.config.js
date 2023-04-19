/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		NEXT_PUBLIC_CONTRACT_NAME: 'dev-1677397761500-82279137383421',
		NEXT_PUBLIC_API_URL: "http://127.0.0.1:3005",
		NEXT_PUBLIC_MESSAGE: "th!s_!s_a_m3ss@ge",
	},
};

module.exports = nextConfig;
