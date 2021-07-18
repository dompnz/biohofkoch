import Navigation from '../navigation'
import Footer from '../footer'

export default function Layout({ children, showNav = true, useNavSpacer = true, showFooter = true }) {
	return (
		<div className='flex flex-col min-h-screen'>
			{showNav && <Navigation useNavSpacer={useNavSpacer} />}
			<main className='mb-auto'>{children}</main>
			{showFooter && <Footer />}
		</div>
	)
}
