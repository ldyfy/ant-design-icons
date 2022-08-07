// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import PlayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlayCircleOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const PlayCircleOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M7.5,0 C3.35786438,0 0,3.35786438 0,7.5 C0,11.6421356 3.35786438,15 7.5,15 C11.6421356,15 15,11.6421356 15,7.5 C15,3.35786438 11.6421356,0 7.5,0 Z M7.5,14 C3.91014913,14 1,11.0898509 1,7.5 C1,3.91014913 3.91014913,1 7.5,1 C11.0898509,1 14,3.91014913 14,7.5 C14,9.22390718 13.3151805,10.8772076 12.0961941,12.0961941 C10.8772076,13.3151805 9.22390718,14 7.5,14 Z M5.75726,4.07147 C5.60279037,3.97878228 5.41040319,3.97635397 5.25364334,4.06511334 C5.09688348,4.15387272 5,4.32009595 5,4.50024 L5,10.49969 C5,10.679834 5.09688348,10.8460573 5.25364334,10.9348167 C5.41040319,11.023576 5.60279037,11.0211477 5.75726,10.92846 L10.75708,7.9287 C10.9076766,7.8383369 10.9998214,7.67558695 10.9998214,7.49996 C10.9998214,7.32433305 10.9076766,7.1615831 10.75708,7.07122 L5.75726,4.07147 Z M6,9.61719 L6,5.38281 L9.52832,7.5 L6,9.61719 Z",
        },
      },
    ],
  },
  name: "playCircle",
  theme: "outlined",
};

const PlayCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={PlayCircleOutlinedSvg} />;

PlayCircleOutlined.displayName = "PlayCircleOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  PlayCircleOutlined
);
