// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import PlusOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlusOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const PlusOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M14.5,8 L8,8 L8,14.5 C8,14.8 7.8,15 7.5,15 C7.2,15 7,14.8 7,14.5 L7,8 L0.5,8 C0.2,8 0,7.8 0,7.5 C0,7.2 0.2,7 0.5,7 L7,7 L7,0.5 C7,0.2 7.2,0 7.5,0 C7.8,0 8,0.2 8,0.5 L8,7 L14.5,7 C14.8,7 15,7.2 15,7.5 C15,7.8 14.8,8 14.5,8 Z",
        },
      },
    ],
  },
  name: "plus",
  theme: "oulined",
};

const PlusOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={PlusOutlinedSvg} />;

PlusOutlined.displayName = "PlusOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(PlusOutlined);
