// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const LeftCircleOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 28 28", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M13.5,0 C6,0 0,6 0,13.5 C0,21 6,27 13.5,27 C21,27 27,21 27,13.5 C27,6 21,0 13.5,0 Z M13.5,26 C6.6,26 1,20.4 1,13.5 C1,6.6 6.6,1 13.5,1 C20.4,1 26,6.6 26,13.5 C26,20.4 20.4,26 13.5,26 Z M12.9,6.9 C13.1,6.7 13.1,6.4 12.9,6.2 C12.7,6 12.4,6 12.2,6.2 L5.2,13.2 C5,13.4 5,13.7 5.2,13.9 L12.2,20.9 C12.3,21 12.4,21 12.6,21 C12.8,21 12.9,21 13,20.9 C13.2,20.7 13.2,20.4 13,20.2 L6.7,14 L22,14 L22,13 L6.7,13 L12.9,6.9 Z",
        },
      },
    ],
  },
  name: "leftCircle",
  theme: "outlined",
};

const LeftCircleOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={LeftCircleOutlinedSvg} />;

LeftCircleOutlined.displayName = "LeftCircleOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  LeftCircleOutlined
);
