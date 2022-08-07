// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const LeftLgOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 8 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8.84010211,0.874556223 L1.14531706,7.99658223 L8.83989727,15.1254438 C9.03654172,15.3090805 9.05425415,15.6254227 8.87945908,15.832014 C8.70466401,16.0386053 8.40355278,16.0572137 8.20690833,15.873577 L0.191877474,8.44546215 C0.167210326,8.42150149 0.167210326,8.42150149 0.144403303,8.3955866 C-0.06535078,8.14767707 -0.0440958699,7.76806634 0.191877474,7.54770231 L8.20711317,0.126423022 C8.40375762,-0.057213671 8.70486884,-0.0386053019 8.87966391,0.167985977 C9.05445898,0.374577256 9.03674656,0.690919531 8.84010211,0.874556223 Z",
        },
      },
    ],
  },
  name: "leftLg",
  theme: "outlined",
};

const LeftLgOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={LeftLgOutlinedSvg} />;

LeftLgOutlined.displayName = "LeftLgOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftLgOutlined);
