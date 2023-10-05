import * as React from 'react'
import type { SVGProps } from 'react'

const SvgNormalType = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 77 77"
    {...props}
  >
    <path
      fillRule="nonzero"
      d="M63.81 26.43c3.12-4.29 2.43-10.33-1.69-13.79-4-3.36-9.82-3.11-13.54.39-3.18-1.21-6.63-1.88-10.23-1.88s-7.05.67-10.23 1.88c-3.71-3.5-9.53-3.74-13.54-.39-4.13 3.46-4.81 9.49-1.69 13.79-2.17 4.05-3.4 8.67-3.4 13.58 0 15.91 12.95 28.86 28.86 28.86s28.86-12.95 28.86-28.86c0-4.91-1.23-9.53-3.4-13.58zM38.35 60.87c-11.5 0-20.86-9.36-20.86-20.86s9.36-20.86 20.86-20.86 20.86 9.36 20.86 20.86-9.36 20.86-20.86 20.86z"
    />
  </svg>
)
export default SvgNormalType
