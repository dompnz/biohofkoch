import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

export default function Page() {
	return (
		<Layout>
			<div>
				<ReactMarkdown children={""} />
			</div>
		</Layout>
	)
}
