// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const RightOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 6 10", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.167823436,9.13277726 L4.54778591,5.00191831 L0.232826702,0.873710015 C0.0264353179,0.690251007 0.00784495404,0.374214821 0.191303962,0.167823436 C0.374762971,-0.038567948 0.690799157,-0.0571583118 0.897190541,0.126300696 L5.54848394,4.55347272 C5.57437375,4.5774102 5.57437375,4.5774102 5.59831123,4.60330001 C5.81846204,4.85096967 5.7961536,5.23021309 5.54848394,5.4503639 L0.832187275,9.88018657 C0.625795891,10.0636456 0.309759705,10.0450552 0.126300696,9.83866383 C-0.0571583118,9.63227245 -0.038567948,9.31623626 0.167823436,9.13277726 Z",
        },
      },
    ],
  },
  name: "right",
  theme: "outlined",
};

const RightOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={RightOutlinedSvg} />;

RightOutlined.displayName = "RightOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(RightOutlined);
