import Navigation from "../navigation"
import Footer from "../footer"

export default function Layout({ children, showNav = true, showFooter = true }) {
	return (
		<div className="flex flex-col min-h-screen">
			{showNav && <Navigation />}
			<main className="mb-auto">{children}</main>
			{showFooter && <Footer />}
		</div>
	)
}
