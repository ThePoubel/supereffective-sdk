import * as React from 'react'
import type { SVGProps } from 'react'

const SvgDarkType = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 77 77"
    {...props}
  >
    <g fillRule="nonzero">
      <path d="M60.1 20.73s-3.25 4.41-10.78 6.74c.84 2.28 1.32 4.93 1.32 7.9 0 10.15-5.5 18.39-12.28 18.39s-12.28-7.27-12.28-18.39c0-2.95.58-5.58 1.52-7.84-7.67-2.32-10.98-6.8-10.98-6.8s-7.54 8.04-6.83 17.19c.42 5.33 3.3 11.6 10.35 17.38 0 0 7.54 6.66 18.22 6.66s18.22-6.66 18.22-6.66c7.05-5.78 9.93-12.04 10.35-17.38.72-9.15-6.83-17.19-6.83-17.19z" />
      <path d="M35.54 28.85c-.96 2-1.58 4.89-1.58 7.72 0 5.08 1.97 9.19 4.39 9.19s4.39-4.12 4.39-9.19c0-2.84-.61-5.73-1.58-7.72-.9.04-1.84.05-2.81.02-.97.03-1.91.02-2.81-.02z" />
    </g>
  </svg>
)
export default SvgDarkType
