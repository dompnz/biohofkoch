import { useEffect, useRef, useState } from "react"

export default function NavUnderlineSvg() {
	const svgPath = useRef(null)
	const [pathTotalLength, setPathTotalLength] = useState(603) // get this by calling pathElement.getTotalLength() in the browser

	useEffect(() => {
		const calculatedPathLength = Math.ceil(svgPath.current?.getTotalLength())
		//console.log("svg path total length: " + calculatedPathLength)
		setPathTotalLength(calculatedPathLength)
	}, [pathTotalLength]) // only re-run the effect if length changes

	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="299.428" height="3.965" viewBox="0 0 299.428 3.965">
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
				d="M810.816,546.474c4.87-.152,9.831-.375,14.638-.589,6.25-.277,12.672-.554,19.03-.688h16.982c7.82.125,206.847,1.045,214.5,1.286,10.561.33,21.483.679,32.243.679"
				transform="translate(-809.781 -544.197)"
			/>
		</svg>
	)
}
