import React from "react";
import { Button } from "../Button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";

const SubscribeSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email!").required("Email is Required!!"),
});

const Footer = () => {
	const submitForm = async (values) => {
		console.log(values);
		const { email } = values;
		try {
			const payload = {
				email_address: email,
			};
			await axios.post("/.netlify/functions/add-email-subscriber", payload);
			alert("Contact details were addedd successfully!");
		} catch (error) {
			alert(error.message);
		}
	};

	return (
		<div className="footer-container">
			<section className="footer-subscription">
				<p className="footer-subscription-heading">
					Join the Adventure newsletter to receive our vacation deals
				</p>
				<p className="footer-subscription-text">
					You can unsubscribe at any time
				</p>
				<div className="input-areas">
					{/* <form action="">
						<input
							type="email"
							name="email"
							placeholder="Your Email"
							className="footer-input"
						/>
					</form> */}
					<Formik
						initialValues={{ email: "" }}
						validation={SubscribeSchema}
						onSubmit={submitForm}>
						{(formik) => (
							<Form>
								<Field
									name="email"
									className="footer-input"
									placeholder="Your Email"
								/>
								<ErrorMessage name="email" />
								<button
									type="submit"
									className="btn--outline"
									disabled={!formik.isValid || !formik.dirty}>
									Subscribe
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</section>
			<div className="footer-links">
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>About Us</h2>
						<Link to="/sign-up">How it works</Link>
						<Link to="/">Testimonials</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Terms of Service</Link>
					</div>
					<div class="footer-link-items">
						<h2>Contact Us</h2>
						<Link to="/">Contact</Link>
						<Link to="/">Support</Link>
						<Link to="/">Destinations</Link>
						<Link to="/">Sponsorships</Link>
					</div>
				</div>
				<div className="footer-link-wrapper">
					<div class="footer-link-items">
						<h2>Videos</h2>
						<Link to="/">Submit Video</Link>
						<Link to="/">Ambassadors</Link>
						<Link to="/">Agency</Link>
						<Link to="/">Influencer</Link>
					</div>
					<div class="footer-link-items">
						<h2>Social Media</h2>
						<Link to="/">Instagram</Link>
						<Link to="/">Facebook</Link>
						<Link to="/">Youtube</Link>
						<Link to="/">Twitter</Link>
					</div>
				</div>
			</div>
			<section className="social-media">
				<div className="social-media-wrap">
					<div className="footer-logo">
						<Link to="/" className="social-logo">
							TRVL <i className="fab fa-typo3" />
						</Link>
					</div>
					<small className="website-rights">TRVL © 2022</small>
					<div className="social-icons">
						<Link
							className="social-icon-link facebook"
							to="/"
							target="_blank"
							aria-label="Facebook">
							<i className="fab fa-facebook-f" />
						</Link>
						<Link
							className="social-icon-link instagram"
							to="/"
							target="_blank"
							aria-label="Instagram">
							<i className="fab fa-instagram" />
						</Link>
						<Link
							class="social-icon-link youtube"
							to="/"
							target="_blank"
							aria-label="Youtube">
							<i class="fab fa-youtube" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="Twitter">
							<i class="fab fa-twitter" />
						</Link>
						<Link
							class="social-icon-link twitter"
							to="/"
							target="_blank"
							aria-label="LinkedIn">
							<i class="fab fa-linkedin" />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Footer;
