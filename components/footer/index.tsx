import ReactMarkdown from 'react-markdown'
import styles from './footer.module.scss'
import { attributes as attributesFooter } from '../../content/footer.md'
import { attributes as attributesGeneral } from '../../content/general.md'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='container'>
			<div className='w-full h-[3px] bg-black rounded-full'></div>
			<div className='py-16 md:pb-32 flex flex-col md:flex-row'>
				<div className={styles.column}>
					<h2 className='font-handwriting text-smallheader mb-4'>{attributesFooter.contacttitle1}</h2>
					<ReactMarkdown children={attributesFooter.contacttext} />
				</div>
				<div className={styles.column}>
					<h2 className='font-handwriting text-smallheader mb-4'>{attributesFooter.contacttitle2}</h2>
					<div className='mb-3 md:mb-0'>
						<a href={`tel:${attributesGeneral.tel?.trim().replace(/[^0-9\+]+/g, '-')}`} className='animated-underline'>
							{attributesGeneral.tel}
						</a>
					</div>
					<div className='mb-3 md:mb-0'>
						<a href={`mailto:${attributesGeneral.email}`} className='animated-underline'>
							{attributesGeneral.email}
						</a>
					</div>
					<div className='mt-7'>
						<a href={attributesGeneral.facebooklink} target='_blank' rel='noreferrer' className='flex items-center flex-wrap'>
							<img src='/assets/images/facebook.svg' alt='facebook icon' width='22px' height='22px' className='inline mr-5 object-contain object-center' />
							<span className='subheader text-sm'>{attributesGeneral.facebooktitle}</span>
						</a>
					</div>
				</div>
				<div className={styles.column}>
					<div className='flex items-center'>
						<div className='flex flex-col items-center'>
							<img src={attributesFooter.certificateImage1} alt='' width='60' height='80' className='object-contain mb-2' />
							<img src={attributesFooter.certificateImage2} alt='' width='72' height='48' className='object-contain' />
						</div>
						<div className='ml-6 max-w-[134px]'>
							<ReactMarkdown children={attributesFooter.certificatetext} />
						</div>
					</div>
					<div className='mt-7'>
						<Link href='/bildnachweise'>
							<a className='animated-underline'>Bildnachweise</a>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
