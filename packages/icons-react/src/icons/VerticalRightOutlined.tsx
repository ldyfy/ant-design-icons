// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import VerticalRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerticalRightOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const VerticalRightOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 12 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.5,16 C0.224,16 0,15.776 0,15.5 L0,0.5 C0,0.224 0.224,0 0.5,0 C0.776,0 1,0.224 1,0.5 L1,15.5 C1,15.776 0.776,16 0.5,16 Z M11.8401021,0.874556223 L4.14531706,7.99658223 L11.8398973,15.1254438 C12.0365417,15.3090805 12.0542541,15.6254227 11.8794591,15.832014 C11.704664,16.0386053 11.4035528,16.0572137 11.2069083,15.873577 L3.19187747,8.44546215 C3.16721033,8.42150149 3.16721033,8.42150149 3.1444033,8.3955866 C2.93464922,8.14767707 2.95590413,7.76806634 3.19187747,7.54770231 L11.2071132,0.126423022 C11.4037576,-0.057213671 11.7048688,-0.0386053019 11.8796639,0.167985977 C12.054459,0.374577256 12.0367466,0.690919531 11.8401021,0.874556223 Z",
        },
      },
    ],
  },
  name: "verticalRight",
  theme: "outlined",
};

const VerticalRightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={VerticalRightOutlinedSvg} />;

VerticalRightOutlined.displayName = "VerticalRightOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  VerticalRightOutlined
);
