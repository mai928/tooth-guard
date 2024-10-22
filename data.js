export const iconsNavbar = [
	{
		name: "FaceBook",
		icon: (
			// face
			<div className="px-3 ">
				<svg
					fill="rgba(42, 91, 160, 1)"
					xmlns="http://www.w3.org/2000/svg"
					width={20}
                    height={20}
					className=""
					viewBox="0 0 320 512"
				>
					<path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
				</svg>
			</div>
		),
	},
	{
		// insta
		name: "Instagram",
		icon: (
			<div className="px-3 py-2 ">
				<svg
					fill="rgba(42, 91, 160, 1)"
					xmlns="http://www.w3.org/2000/svg"
					width={20}
                    height={20}
					className=""
					viewBox="0 0 448 512"
				>
					<path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
				</svg>
			</div>
		),
	},
	// {
	// 	// twitter
	// 	name: "Twitter",
	// 	icon: (
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			width={15}
	// 			className=""
	// 			viewBox="0 0 512 512"
	// 		>
	// 			<path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
	// 		</svg>
	// 	),
	// },
	// {
	// 	// google

	// 	name: "Google",
	// 	icon: (
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			width={15}
	// 			className=""
	// 			viewBox="0 0 488 512"
	// 		>
	// 			<path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
	// 		</svg>
	// 	),
	// },

	// {
	// 	// linkedin
	// 	name: "LinkedIn",
	// 	icon: (
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			width={15}
	// 			className=""
	// 			viewBox="0 0 448 512"
	// 		>
	// 			<path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
	// 		</svg>
	// 	),
	// },
	// {
	// 	// Email
	// 	icon: (
	// 		<svg
	// 			xmlns="http://www.w3.org/2000/svg"
	// 			width={15}
	// 			className=""
	// 			viewBox="0 0 512 512"
	// 		>
	// 			<path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" />
	// 		</svg>
	// 	),
	// },
	{
		// phone
		icon: (
			<div className="p-4 ">
				<svg
					fill="rgba(42, 91, 160, 1)"
					xmlns="http://www.w3.org/2000/svg"
					width={16}
                    height={16}
					className=""
					viewBox="0 0 512 512"
				>
					<path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
				</svg>
			</div>
		),
	},
	{
		// whatsup

		icon: (
			<div className="px-3 py-1 ">
				<svg
					fill="rgba(42, 91, 160, 1)"
					xmlns="http://www.w3.org/2000/svg"
					className=""
					width={25}
					viewBox="0 0 448 512"
				>
					<path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
				</svg>
			</div>
		),
	},
];
export const navbarLink = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/services",
		name: "Services",
	},
	{
		path: "/blog",
		name: "Blog & Insights",
	},
	{
		path: "/contact-us",
		name: "Contact",
	},
];

export const accordion =[
    {
        title:'Routine Dental Checkups',
        desc:'Achieve the smile of your dreams with teeth whitening, veneers, and more.'
    }, {
        title:'Routine Dental Checkups',
        desc:'Achieve the smile of your dreams with teeth whitening, veneers, and more.'
    }, {
        title:'Routine Dental Checkups',
        desc:'Achieve the smile of your dreams with teeth whitening, veneers, and more.'
    }, {
        title:'Routine Dental Checkups',
        desc:'Achieve the smile of your dreams with teeth whitening, veneers, and more.'
    }, {
        title:'Routine Dental Checkups',
        desc:'Achieve the smile of your dreams with teeth whitening, veneers, and more.'
    },
]
export const Headers = [
	{
		id: 1,
		title: "Where Your Smile Comes First",
		des: "At Tooth Guard Clinics, we provide top-tier dental care that transforms lives one smile at a time. Our experienced team is here to deliver exceptional service, whether you re here for a routine checkup or advanced cosmetic dentistry.",
		src: "/assets/asxsa.jpg",
	},
];

export const ServicesSections = [
	{
		id: 1,
		title: "Experts You Can Trust",
		des: "Our dentists have over 20 years of experience and a passion for excellence.",
	},
	{
		id: 2,
		title: "Experts You Can Trust",
		des: "Our dentists have over 20 years of experience and a passion for excellence.",
	},
	{
		id: 3,
		title: "Experts You Can Trust",
		des: "Our dentists have over 20 years of experience and a passion for excellence.",
	},
];
export const Service = [
	{
		id: 1,
		title: "Dental Implants",
		des: "Restore missing teeth with natural-looking results.",
	},
	{
		id: 2,
		title: "Dental Implants",
		des: "Restore missing teeth with natural-looking results.",
	},
	{
		id: 3,
		title: "Dental Implants",
		des: "Restore missing teeth with natural-looking results.",
	},
	{
		id: 4,
		title: "Dental Implants",
		des: "Restore missing teeth with natural-looking results.",
	},
];
export const Dentalservice = [
	{
		id: 1,
		title: "زراعة الأسنان: استعادة الأسنان المفقودة بنتائج تبدو طبيعية",
		src: "/assets/pexels-photo.webp",
		description:
			" The body content of your post goes here The body content of your post goes here The body content of your post goes here.",
	},
	{
		id: 2,
		title:
			"طب الأسنان التجميلي: تبييض وتحسين ابتسامتك للحصول على مظهر جديد مذهل",
		src: "/assets/pexels-photo.webp",
		description:
			" The body content of your post goes here The body content of your post goes here The body content of your post goes here.",
	},
	{
		id: 3,
		title: "تقويم الأسنان: تصحيح أسنانك وتحسين صحتك الفموية العامة",
		src: "/assets/pexels-photo.webp",
		description:
			" The body content of your post goes here The body content of your post goes here The body content of your post goes here.",
	},
];
export const navbar = [
	{
		id: 1,
		name: "Home",
		path: "/",
		// subcatagory:[

		// ]
	},
	{
		id: 2,
		name: "About Us",
		path: "/about",
	},
	,
	{
		id: 3,
		name: "Products",
		path: "/product",
		catagory: [
			{
				id: 11,
				title: "Sheet Metal Working",
				subCatagory: [
					{
						name: "Fiber Laser Cutting Machines",
					},
					{
						name: "Fiber Laser Cutting Machines",
					},
					{
						name: "Hydraulic Press Brake",
					},
					{
						name: "Shearing Machine",
					},
					{
						name: "Plasma Cutting Machine",
					},
				],
			},
			{
				id: 22,
				title: "Machine Tools",
				subCatagory: [
					{
						name: "CNC Vertical Machining Center",
					},
					{
						name: "CNC Lahte Machine",
					},
					{
						name: "NC Grinding Machine",
					},
				],
			},
		],
	},
	{
		id: 4,
		name: "Production",
		path: "/production",
	},
	{
		id: 5,
		name: "CONTACT US",
		path: "/contact",
	},
];

export const ServicesData = [
	{
		id: 1,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle1",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 2,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle2",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 3,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle3",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 4,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle4",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
];
export const Product = [
	{
		id: 1,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle1",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 2,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle2",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 3,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle3",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 4,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle4",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 5,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle3",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 6,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle4",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
];

export const productCatagory = [
	{
		id: 1,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle1",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
	{
		id: 2,
		src: "/assets/slider_1.jpg",
		title: "Test-Bottle2",
		desc: "Medical is the knowledge or master event. Identify the error of the we coding page speed.",
	},
];

export const Productgallery = [
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		height: 174,
		tags: [
			{ value: "Nature", title: "Nature" },
			{ value: "Flora", title: "Flora" },
		],
		caption: "After Rain (Jeshu John - designerspics.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		height: 212,
		caption: "Boats (Jeshu John - designerspics.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		height: 212,
		caption: "Color Pencils (Jeshu John - designerspics.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		height: 213,
		caption: "Red Apples with other Red Fruit (foodiesfeed.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		height: 183,
		caption: "37H (gratispgraphy.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 240,
		//   height: 320,
		tags: [{ value: "Nature", title: "Nature" }],
		caption: "8H (gratisography.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		//   height: 190,
		caption: "286H (gratisography.com)",
	},
	{
		alt: "img",
		src: "https://truemachinecnc.com/wp-content/uploads/2020/06/factory_2-900x600.jpg",
		//   width: 320,
		//   height: 148,
		tags: [{ value: "People", title: "People" }],
		caption: "315H (gratisography.com)",
	},
];
