// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import CheckCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CheckCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CheckCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: "circle",
        attrs: {
          cx: 12,
          cy: 12,
          r: 12,
        },
      },
      {
        tag: "path",
        attrs: {
          fill: "#fff",
          d: "M16.9757359,7.97573593 C17.2100505,7.74142136 17.5899495,7.74142136 17.8242641,7.97573593 C18.0585786,8.21005051 18.0585786,8.58994949 17.8242641,8.82426407 L10.6242641,16.0242641 C10.3899495,16.2585786 10.0100505,16.2585786 9.77573593,16.0242641 L6.17573593,12.4242641 C5.94142136,12.1899495 5.94142136,11.8100505 6.17573593,11.5757359 C6.41005051,11.3414214 6.78994949,11.3414214 7.02426407,11.5757359 L10.2,14.7514719 L16.9757359,7.97573593 Z",
        },
      },
    ],
  },
  name: "checkCircle",
  theme: "filled",
};

const CheckCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CheckCircleFilledSvg} />;

CheckCircleFilled.displayName = "CheckCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CheckCircleFilled
);
