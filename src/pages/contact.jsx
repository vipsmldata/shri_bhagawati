import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Ways to Connect with Us.
						</div>

						<div className="subtitle contact-subtitle">
							Thank you for your interest in getting in touch with
							us. We welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to get in touch using social
							handles. We make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on our website to get in touch. Simply fill out the
							required fields and We'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find us on{" "}
							<a
								href={INFO.socials.instagram}
								target="_blank"
								rel="noreferrer"
							>
								{INFO.socials.insta_id}
							</a>
							. We post regular updates and engage with our
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and We look forward
							to hearing from you!
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;