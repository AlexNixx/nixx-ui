import type { SVGProps } from 'react';
const SvgCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 20 20'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      fill='currentColor'
      d='M0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4H2a2 2 0 0 1-2-2zm8 12v4h10V8h-4v4a2 2 0 0 1-2 2zm4-2V2H2v10z'
    />
  </svg>
);
export default SvgCopyIcon;
