import type { SVGProps } from 'react';
const SvgUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    width='1em'
    height='1em'
    {...props}
  >
    <path
      fill='#030D45'
      fillRule='evenodd'
      d='M12 3.538c-1.853 0-3.355 1.493-3.355 3.334s1.502 3.333 3.355 3.333 3.355-1.492 3.355-3.333S13.853 3.538 12 3.538M7.097 6.872C7.097 4.182 9.292 2 12 2s4.903 2.181 4.903 4.872-2.195 4.872-4.903 4.872-4.903-2.182-4.903-4.872m2.369 8.461c-2.164 0-3.918 1.743-3.918 3.893 0 .113.021.193.043.239.018.04.034.05.047.057.602.326 2.289.94 6.362.94s5.76-.614 6.362-.94c.013-.007.029-.018.047-.057a.6.6 0 0 0 .043-.239c0-2.15-1.754-3.893-3.918-3.893zM4 19.226c0-3 2.447-5.431 5.466-5.431h5.068c3.019 0 5.466 2.432 5.466 5.431 0 .55-.2 1.27-.898 1.648C18.178 21.374 16.196 22 12 22s-6.178-.627-7.102-1.126C4.201 20.497 4 19.777 4 19.226'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgUserIcon;
