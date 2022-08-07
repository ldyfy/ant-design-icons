// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const LeftOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 6 10", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M5.58204863,0.873710015 L1.20208616,5.00456896 L5.51704536,9.13277726 C5.72343675,9.31623626 5.74202711,9.63227245 5.5585681,9.83866383 C5.37510909,10.0450552 5.05907291,10.0636456 4.85268152,9.88018657 L0.201388124,5.45301455 C0.175498318,5.42907707 0.175498318,5.42907707 0.151560836,5.40318726 C-0.0685899742,5.1555176 -0.0462815375,4.77627418 0.201388124,4.55612337 L4.91768479,0.126300696 C5.12407617,-0.0571583118 5.44011236,-0.038567948 5.62357137,0.167823436 C5.80703038,0.374214821 5.78844001,0.690251007 5.58204863,0.873710015 Z",
        },
      },
    ],
  },
  name: "left",
  theme: "outlined",
};

const LeftOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={LeftOutlinedSvg} />;

LeftOutlined.displayName = "LeftOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(LeftOutlined);
