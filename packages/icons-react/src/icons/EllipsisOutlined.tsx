// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import EllipsisOutlinedSvg from "@ant-design/icons-svg/lib/asn/EllipsisOutlined";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const EllipsisOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 12 2", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M5,1 C5,0.4 5.4,0 6,0 C6.6,0 7,0.4 7,1 C7,1.6 6.6,2 6,2 C5.4,2 5,1.6 5,1 Z M0,1 C0,0.4 0.4,0 1,0 C1.6,0 2,0.4 2,1 C2,1.6 1.6,2 1,2 C0.4,2 0,1.6 0,1 Z M10,1 C10,0.4 10.4,0 11,0 C11.6,0 12,0.4 12,1 C12,1.6 11.6,2 11,2 C10.4,2 10,1.6 10,1 Z",
        },
      },
    ],
  },
  name: "ellipsis",
  theme: "oulined",
};

const EllipsisOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={EllipsisOutlinedSvg} />;

EllipsisOutlined.displayName = "EllipsisOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  EllipsisOutlined
);
