import { useEffect, useRef, useState } from "react"

export default function NavUnderlineSvg() {
	const svgPath = useRef(null)
	const [pathTotalLength, setPathTotalLength] = useState(106) // get this by calling pathElement.getTotalLength() in the browser

	useEffect(() => {
		const calculatedPathLength = Math.ceil(svgPath.current?.getTotalLength())
		//console.log("svg path total length: " + calculatedPathLength)
		setPathTotalLength(calculatedPathLength)
	}, [pathTotalLength]) // only re-run the effect if length changes

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="107.739" height="2.79" viewBox="0 0 107.739 2.79" className="w-full">
			<path
				ref={svgPath}
				className={`stroke-current text-gray-stroke animate-draw-stroke`}
				style={{
					fill: "transparent",
					strokeLinecap: "round",
					strokeMiterlimit: 10,
					strokeWidth: "2px",
					strokeDasharray: pathTotalLength,
					strokeDashoffset: pathTotalLength,
				}}
				d="M1629.185,108.162c12.417-.216,24.937-.7,37.361-.765,22.823-.116,45.578.767,68.36.765"
				transform="translate(-1628.168 -106.39)"
			/>
		</svg>
	)
}
