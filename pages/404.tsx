import Link from "next/link"
import Head from "next/head"

export default function Custom404() {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen w-screen">
			<Head>
				<title>404 - Seite nicht gefunden</title>
			</Head>
			<h1 className="font-handwriting text-4xl">404 - Seite nicht gefunden</h1>
			<Link href="/">
				<a>Zurück zur Startseite</a>
			</Link>
		</div>
	)
}
