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
        tag: "path",
        attrs: {
          d: "M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M17.8242641,7.97573593 C17.5899495,7.74142136 17.2100505,7.74142136 16.9757359,7.97573593 L16.9757359,7.97573593 L10.2,14.7514719 L7.02426407,11.5757359 C6.78994949,11.3414214 6.41005051,11.3414214 6.17573593,11.5757359 C5.94142136,11.8100505 5.94142136,12.1899495 6.17573593,12.4242641 L6.17573593,12.4242641 L9.77573593,16.0242641 C10.0100505,16.2585786 10.3899495,16.2585786 10.6242641,16.0242641 L10.6242641,16.0242641 L17.8242641,8.82426407 C18.0585786,8.58994949 18.0585786,8.21005051 17.8242641,7.97573593 Z",
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
