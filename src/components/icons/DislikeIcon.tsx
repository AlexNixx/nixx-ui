import type { SVGProps } from 'react';
const SvgDislikeIcon = (props: SVGProps<SVGSVGElement>) => (
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
        d='m2.808 1.393 18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 0 1 .034-8.023L1.393 2.808zm2.172 10.23L12 18.654l2.617-2.623-9.645-9.645a4 4 0 0 0 .008 5.237m15.263-6.866a6 6 0 0 1 .236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a4 4 0 0 0-.193-5.453 4 4 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a4 4 0 0 0-1.155-.723l-2.25-2.25A6 6 0 0 1 12 4.529a6 6 0 0 1 8.242.228'
      />
    </g>
  </svg>
);
export default SvgDislikeIcon;
