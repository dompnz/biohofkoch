import Link from "next/link"

export default function Custom404() {
	return (
		<div className="flex justify-center items-center">
			<h1>404 - Seite nicht gefunden</h1>
			<Link href="/">
				<a>Zurück zur Startseite</a>
			</Link>
		</div>
	)
}
