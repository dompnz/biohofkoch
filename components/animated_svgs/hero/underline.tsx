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
		<svg xmlns="http://www.w3.org/2000/svg" width="300" height="4.581" viewBox="0 0 300 4.581" className="">
			<path
				ref={svgPath}
				className={`stroke-current text-gray-stroke animate-draw-stroke`}
				style={{
					fill: "transparent",
					strokeDasharray: pathTotalLength,
					strokeDashoffset: pathTotalLength,
				}}
				d="M340.966,143.125h-.09c-10.724,0-21.646-.348-32.162-.679-11.95-.375-215.523-1.456-227.708-1.349-7.657.063-15.459.42-23,.759-4.8.214-9.75.438-14.6.581a1.276,1.276,0,0,0,.081,2.545c4.87-.152,9.831-.375,14.638-.589,6.25-.277,12.672-.554,19.03-.688H94.137c7.82.125,206.847,1.045,214.5,1.286,10.561.33,21.483.679,32.243.679a1.334,1.334,0,0,0,.96-.353,1.307,1.307,0,0,0,.42-.925,1.284,1.284,0,0,0-1.29-1.268Z"
				transform="translate(-42.256 -141.09)"
			/>
		</svg>
	)
}
