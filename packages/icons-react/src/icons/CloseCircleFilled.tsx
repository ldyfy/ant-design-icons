// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import CloseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CloseCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M8.22426407,7.37573593 C7.98994949,7.14142136 7.61005051,7.14142136 7.37573593,7.37573593 C7.14142136,7.61005051 7.14142136,7.98994949 7.37573593,8.22426407 L7.37573593,8.22426407 L11.1514719,12 L7.37573593,15.7757359 C7.14142136,16.0100505 7.14142136,16.3899495 7.37573593,16.6242641 C7.61005051,16.8585786 7.98994949,16.8585786 8.22426407,16.6242641 L8.22426407,16.6242641 L12,12.8485281 L15.7757359,16.6242641 C16.0100505,16.8585786 16.3899495,16.8585786 16.6242641,16.6242641 C16.8585786,16.3899495 16.8585786,16.0100505 16.6242641,15.7757359 L16.6242641,15.7757359 L12.8485281,12 L16.6242641,8.22426407 C16.8585786,7.98994949 16.8585786,7.61005051 16.6242641,7.37573593 C16.3899495,7.14142136 16.0100505,7.14142136 15.7757359,7.37573593 L15.7757359,7.37573593 L12,11.1514719 Z",
        },
      },
    ],
  },
  name: "closeCircle",
  theme: "filled",
};

const CloseCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CloseCircleFilledSvg} />;

CloseCircleFilled.displayName = "CloseCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CloseCircleFilled
);
