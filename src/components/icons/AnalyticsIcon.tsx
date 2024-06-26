import type { SVGProps } from 'react';
const SvgAnalyticsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 18 18'
    width='1em'
    height='1em'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M2.5 2.5v11c0 .943 0 1.414.293 1.707s.764.293 1.707.293h11M5 12.5l.329-.986c.29-.872.436-1.308.75-1.345.316-.038.56.352 1.046 1.131l.103.165c.542.867.813 1.3 1.142 1.246s.446-.552.68-1.547l.886-3.767c.24-1.017.36-1.526.692-1.578s.601.396 1.139 1.293l.429.714c.551.92.827 1.379 1.163 1.323.335-.056.448-.58.672-1.628L15 3'
      />
    </g>
  </svg>
);
export default SvgAnalyticsIcon;
