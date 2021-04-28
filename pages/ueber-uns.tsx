import Layout from "../components/layout"
import HeroSection from "../components/hero_section"
import AboutUsProfile from "../components/about_us_profile"
import Linkbox from "../components/linkbox"
import ImageSection from "../components/image_section"
import { attributes, react as MarkdownContent } from "../content/ueber-uns.md"
import { useEffect } from "react"

export default function Page() {
	const mb = "mb-8 2xl:mb-32"

	useEffect(() => {
		console.log(attributes)
	})

	return (
		<Layout>
			<div className={`${mb}`}>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>

			<div className={`${mb} container lg:px-32`}>
				{attributes.profiles?.map((profile, index, { length }) => {
					return (
						<div key={profile.profileName}>
							<AboutUsProfile
								imageSrc={profile.profileImage}
								name={profile.profileName}
								bodyText={profile.profileText}
								quote={profile.profileQuote}
								desktopImageFirst={profile.profileSwitch}
							/>
							{index + 1 !== length && (
								<div>
									<div className="lg:hidden mb-8"></div>
									<div className="hidden lg:block w-[385px] h-[4px] bg-gray-stroke rounded mx-auto my-16"></div>
								</div>
							)}
						</div>
					)
				})}
			</div>

			<section className={`${mb} container`}>
				<Linkbox text={attributes.linkboxText} />
			</section>

			<div className={`${mb} container`}>
				<ImageSection imageSrc1={attributes.galleryImage1} imageSrc2={attributes.galleryImage2} />
			</div>
		</Layout>
	)
}
