import Layout from "../components/layout"
import { useState, useEffect } from "react"

export default function Contact() {
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if (window.location.search.includes("success=true")) {
			setSuccess(true)
		}
	}, [])

	return (
		<Layout>
			<div className="mt-40">
				<form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
					<input type="hidden" name="form-name" value="contact" />
					<p>
						<label>
							Your Name: <input type="text" name="name" />
						</label>
					</p>
					<p>
						<label>
							Your Email: <input type="email" name="email" />
						</label>
					</p>
					<p>
						<label>
							Message: <textarea name="message"></textarea>
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
				{success && <p style={{ color: "green" }}>Successfully submitted form!</p>}
			</div>
		</Layout>
	)
}
