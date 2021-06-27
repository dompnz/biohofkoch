export default function Linkbox({ text = "", link = "" }) {
	return (
		<a href={link} className="border-gray-dark px-24 py-12 flex flex-col items-center md:flex-row md:justify-between">
			<span>{text}</span>
			<img src="" alt="" />
		</a>
	)
}
