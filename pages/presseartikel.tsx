import CustomHead from '../components/custom_head'
import Layout from '../components/layout'
import HeroSection from '../components/hero_section'
import { attributes } from '../content/presseartikel.md'
import { useEffect, useRef } from 'react'

export default function Page() {
	const closeLinesBaseStyles = 'w-full h-[3px] absolute left-1/2 top-0 transform -translate-x-1/2 bg-gray-dark'
	const fileItemParent = useRef(null)

	useEffect(() => {
		// add duration after component loaded to prevent seeing the overlay fly in on page reload
		fileItemParent.current?.querySelectorAll('.image-overlay').forEach((imageOverlay) => imageOverlay.classList.add('duration-500'))
	})

	const fileClickHandler = (clickEvent) => {
		const fileItem = clickEvent.currentTarget
		if (!fileItem) return
		const fileIsImage = fileItem.dataset.fileIsImage
		if (!fileIsImage) return
		clickEvent.preventDefault()
		const overlay = fileItem.querySelector('.image-overlay')
		;['opacity-0', 'pointer-events-none', 'translate-x-full'].map((c) => overlay.classList.toggle(c)) // toggle overlay
		document.body.classList.toggle('overflow-hidden') // prevent scrolling
	}

	return (
		<Layout>
			<CustomHead
				metaTitlePrefix={attributes.heroHeader}
				metaTitle={attributes.title}
				metaDescription={attributes.description}
				ogImage={attributes.heroImage}
			/>
			<div className='mb-small'>
				<HeroSection imageSrc={attributes.heroImage} headerText={attributes.heroHeader} bodyText={attributes.heroText} />
			</div>

			<div ref={fileItemParent} className='mb-default container flex flex-col gap-4 lg:flex-row lg:justify-between lg:flex-wrap'>
				{attributes.files?.map((file) => {
					const imageExtensions = ['jpg', 'jpeg', 'png', 'svg', 'webp']
					const fileExtension = file.path.split('.').pop()
					const fileIsImage = imageExtensions.includes(fileExtension)
					return (
						<a
							key={file.name}
							href={file.path}
							target='_blank'
							className='flex justify-between gap-3 py-8 border-b-3 border-black lg:w-[44%]'
							onClick={fileClickHandler}
							data-file-is-image={fileIsImage}
						>
							<span className='font-handwriting text-smallheader'>{file.name}</span>
							<img src='/assets/images/arrow-right.svg' alt='arrow-right' className='w-12 lg:w-16' />
							{fileIsImage && (
								<div className='image-overlay fixed top-0 left-0 w-full h-full bg-gray-bg z-30 opacity-0 pointer-events-none transform translate-x-full'>
									<div className='container h-full flex justify-center items-center'>
										<div className='relative inline-flex'>
											<img src={file.path} alt={file.name} className='w-full max-h-[84vh] object-contain object-center' />
											<div className='h-8 w-8 absolute -top-8 right-0 xl:top-0 xl:-right-20'>
												<div className={`${closeLinesBaseStyles} rotate-45`}></div>
												<div className={`${closeLinesBaseStyles} -rotate-45`}></div>
											</div>
										</div>
									</div>
								</div>
							)}
						</a>
					)
				})}
			</div>
		</Layout>
	)
}
