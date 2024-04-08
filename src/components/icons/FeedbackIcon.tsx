import type { SVGProps } from 'react';
const SvgFeedbackIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 22 22'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      stroke='#000'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='m3 13 1.575 6.299c.044.177.066.265.092.343A2 2 0 0 0 6.4 20.993c.08.007.172.007.355.007.228 0 .343 0 .44-.01a2 2 0 0 0 1.797-1.797c.009-.096.009-.21.009-.44V4.5m8.5 8a3.5 3.5 0 1 0 0-7m-8.25-1H5.5a4.5 4.5 0 0 0 0 9h3.75c1.766 0 3.927.947 5.594 1.856.973.53 1.46.795 1.778.756a.95.95 0 0 0 .691-.411c.187-.26.187-.783.187-1.827V4.126c0-1.044 0-1.566-.187-1.827a.95.95 0 0 0-.691-.411c-.319-.039-.805.226-1.778.756C13.177 3.553 11.016 4.5 9.25 4.5'
    />
  </svg>
);
export default SvgFeedbackIcon;
