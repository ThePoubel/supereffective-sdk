import * as React from 'react'
import type { SVGProps } from 'react'

const SvgPoisonType = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 77 77"
    {...props}
  >
    <g transform="translate(.005)">
      <path
        fillRule="nonzero"
        d="M47.7 56.75c-.55-4.68-4.52-8.31-9.35-8.31s-8.8 3.63-9.35 8.31c-11.51.84-19.8 3.18-19.8 5.93 0 3.46 13.05 6.26 29.15 6.26s29.15-2.8 29.15-6.26c0-2.76-8.29-5.09-19.8-5.93z"
      />
      <circle cx={28.31} cy={23.22} r={11.2} />
      <circle cx={51.28} cy={37.57} r={6.64} />
    </g>
  </svg>
)
export default SvgPoisonType
