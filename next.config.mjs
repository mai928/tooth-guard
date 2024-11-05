
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	swcMinify: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "https://tooth-guard.com",
				port: '3000',
				pathname: "/admin/assets/images/**",
			},
		],
	},
};

export default nextConfig;


