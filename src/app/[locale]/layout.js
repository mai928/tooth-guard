import localFont from "next/font/local";
import "../globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { dir } from "i18next";
import { getMetadata } from "@/components/getMetadata";
import Head from "next/head";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

export async function generateMetadata() {
	try {
		const data = await getMetadata();
		return {
			title: "TOOTH GUARD",
			description:
				"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",

			icons: {
				icon: [
					{
						url: data.logo || "/favicon.ico",
						href: data.logo || "/favicon.ico",
						media: data.logo || "/favicon.ico",
					},
				],
			},
			openGraph: {
				title: "TOOTH GUARD",
				description:
					"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
				url: "https://tooth-guard.com",
				images: [
					{
						url: data.logo || "/favicon.ico",
						alt: " logo",
					},
				],
			},
			twitter: {
				title: "TOOTH GUARD",
				description:
					"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
				image: data.logo || "/favicon.ico",
			},
		};
	} catch (error) {
		return {
			title: "TOOTH GUARD",
			description:
				"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
			icons: {
				icon: [
					{
						url: "/favicon.ico",
					},
				],
			},
			openGraph: {
				title: "TOOTH GUARD",
				description:
					"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
				url: "https://tooth-guard.com",
				images: [
					{
						url: "/favicon.ico",
						alt: " Logo",
					},
				],
			},
			twitter: {
				title: "TOOTH GUARD",
				description:
					"At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
				image: "/favicon.ico",
			},
		};
	}
}

const i18nNamespaces = ["home"];

export default async function RootLayout({ children, params }) {
	const { locale } = params;

	const { resources, t } = await initTranslations(locale, i18nNamespaces);

	return (
		<html lang={locale} dir={dir(locale)}>
			<Head>
				<meta
					name="google-site-verification"
					content="XmE4cT8eN-RTm7fLfT_e-ap_toosMuXQwzYRDNRZqaM"
				/>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<TranslationsProvider
					namespaces={i18nNamespaces}
					locale={locale}
					resources={resources}
				>
					<NavBar />
					{children}
					<Footer params={params} />
				</TranslationsProvider>
			</body>
		</html>
	);
}
