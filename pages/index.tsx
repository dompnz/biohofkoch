import Head from "next/head"
import { attributes, react as HomeContent } from "../content/home.md"
import styles from "../styles/pages/homepage.module.scss"

export default function Home() {
	console.log(attributes)

	return <div>This is the homepage</div>
}
