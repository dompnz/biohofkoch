import Layout from "../components/layout"

export default function Contact() {
	return (
		<Layout>
			<div className="mt-40">
				<form name="contact" data-netlify="true">
					<p className="mb-4">
						<label>
							Name <input type="text" name="name" />
						</label>
					</p>
					<p className="mb-4">
						<label>
							Email <input type="email" name="email" />
						</label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
				</form>
			</div>
		</Layout>
	)
}
