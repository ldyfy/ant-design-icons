// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import UpOutlinedSvg from "@ant-design/icons-svg/lib/asn/UpOutlined";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const UpOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 10 6", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M9.13277726,5.58204863 L5.00191831,1.20208616 L0.873710015,5.51704536 C0.690251007,5.72343675 0.374214821,5.74202711 0.167823436,5.5585681 C-0.038567948,5.37510909 -0.0571583119,5.05907291 0.126300696,4.85268152 L4.55347272,0.201388124 C4.5774102,0.175498318 4.5774102,0.175498318 4.60330001,0.151560836 C4.85096967,-0.0685899742 5.23021309,-0.0462815375 5.4503639,0.201388124 L9.88018657,4.91768479 C10.0636456,5.12407617 10.0450552,5.44011236 9.83866383,5.62357137 C9.63227245,5.80703038 9.31623626,5.78844001 9.13277726,5.58204863 Z",
        },
      },
    ],
  },
  name: "up",
  theme: "outlined",
};

const UpOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={UpOutlinedSvg} />;

UpOutlined.displayName = "UpOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UpOutlined);
