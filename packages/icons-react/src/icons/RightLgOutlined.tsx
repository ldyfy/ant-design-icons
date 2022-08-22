// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const RightLgOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 8 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.159897895,0.874556223 C-0.0367465582,0.690919531 -0.0544589833,0.374577256 0.120336086,0.167985977 C0.295131155,-0.0386053019 0.596242382,-0.057213671 0.792886835,0.126423022 L8.80812253,7.54770231 C9.04409587,7.76806634 9.06535078,8.14767707 8.8555967,8.3955866 C8.83278967,8.42150149 8.83278967,8.42150149 8.80812253,8.44546215 L0.793091673,15.873577 C0.59644722,16.0572137 0.295335993,16.0386053 0.120540924,15.832014 C-0.0542541453,15.6254227 -0.0365417202,15.3090805 0.160102733,15.1254438 L7.85468294,7.99658223 L0.159897895,0.874556223 Z",
        },
      },
    ],
  },
  name: "rightLg",
  theme: "outlined",
};

const RightLgOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={RightLgOutlinedSvg} />;

RightLgOutlined.displayName = "RightLgOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  RightLgOutlined
);