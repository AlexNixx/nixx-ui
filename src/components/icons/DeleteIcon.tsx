import type { SVGProps } from 'react';
const SvgDeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    {...props}
  >
    <g clipPath='url(#a)'>
      <path
        fill='currentColor'
        d='M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm1 2H6v12h12zM9 4v2h6V4z'
      />
    </g>
  </svg>
);
export default SvgDeleteIcon;
