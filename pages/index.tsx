import Head from "next/head"
import { attributes, react as HomeContent } from "../content/home.md"

export default function Home() {
	console.log(attributes)

	return <div className="text-purple-400">test</div>
}
