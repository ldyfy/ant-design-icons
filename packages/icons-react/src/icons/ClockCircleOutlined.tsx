// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ClockCircleOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M7.5,0 C11.641875,0 15,3.358125 15,7.5 C15,11.641875 11.641875,15 7.5,15 C3.358125,15 0,11.641875 0,7.5 C0,3.358125 3.358125,0 7.5,0 Z M7.5,14 C11.0842857,14 14,11.0842857 14,7.5 C14,3.91571429 11.0842857,1 7.5,1 C3.91571429,1 1,3.91571429 1,7.5 C1,11.0842857 3.91571429,14 7.5,14 Z M10.5,7 C10.775,7 11,7.225 11,7.5 C11,7.775 10.775,8 10.5,8 L7.5,8 C7.225,8 7,7.775 7,7.5 L7,3.5 C7,3.225 7.225,3 7.5,3 C7.775,3 8,3.225 8,3.5 L8,7 L10.5,7 Z",
        },
      },
    ],
  },
  name: "clockCircle",
  theme: "filled",
};

const ClockCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ClockCircleOutlinedSvg} />;

ClockCircleOutlined.displayName = "ClockCircleOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  ClockCircleOutlined
);
