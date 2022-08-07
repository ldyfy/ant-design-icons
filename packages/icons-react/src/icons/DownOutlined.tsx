// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import DownOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const DownOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 10 6", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.873143583,0.167823436 C0.689803513,-0.038567948 0.373972215,-0.0571583118 0.167714635,0.126300696 C-0.0385429441,0.309759705 -0.0571212557,0.625795891 0.126218815,0.832187275 L4.55316961,5.54848394 C4.77317769,5.7961536 5.15217525,5.81846204 5.39968434,5.59831123 C5.42555737,5.57437375 5.42555737,5.57437375 5.44947933,5.54848394 L9.87378119,0.897190541 C10.0571213,0.690799157 10.0385429,0.374762971 9.83228536,0.191303962 C9.62602779,0.00784495404 9.31019649,0.0264353179 9.12685642,0.232826702 L5.00132447,4.54778591 L0.873143583,0.167823436 Z",
        },
      },
    ],
  },
  name: "down",
  theme: "oulined",
};

const DownOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={DownOutlinedSvg} />;

DownOutlined.displayName = "DownOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DownOutlined);
