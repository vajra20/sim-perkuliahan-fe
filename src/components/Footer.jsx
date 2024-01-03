import React from "react";

const Footer = () => {
	const links = [
		{ url: "/", text: "Home" },
		{ url: "/about", text: "About" },
		{ url: "/contact", text: "Contact" },
		{ url: "/services", text: "Services" },
		{ url: "/blog", text: "Blog" },
	];

	return (
		<div className="bg-color-page sm:py-16 android:py-8">
			<div className="flex flex-col gap-8 px-10">
				<div className="flex flex-row justify-center items-center gap-4">
					<img src="public/logo.png" className=" w-12 h-12"></img>
					<span className="text-white font-normal sm:text-3xl android:text-2xl">
						ITB Swadharma
					</span>
				</div>
				<div className="flex flex-wrap sm:gap-10 android:gap-x-6 android:gap-y-2 justify-center text-lg text-white font-semibold ">
					{links.map((link, index) => (
						<a key={index} href={link.url}>
							{link.text}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Footer;
