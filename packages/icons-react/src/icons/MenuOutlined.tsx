// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const MenuOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.5,12 L8.5,12 C8.8,12 9,12.2 9,12.5 C9,12.8 8.8,13 8.5,13 L0.5,13 C0.2,13 0,12.8 0,12.5 C0,12.2 0.2,12 0.5,12 M0.5,8 L14.5,8 C14.8,8 15,8.2 15,8.5 C15,8.8 14.8,9 14.5,9 L0.5,9 C0.2,9 0,8.8 0,8.5 C0,8.2 0.2,8 0.5,8 M14.5,1 L0.5,1 C0.2,1 0,0.8 0,0.5 C0,0.2 0.2,0 0.5,0 L14.5,0 C14.8,0 15,0.2 15,0.5 C15,0.8 14.8,1 14.5,1 M14.5,5 L0.5,5 C0.2,5 0,4.8 0,4.5 C0,4.2 0.2,4 0.5,4 L14.5,4 C14.8,4 15,4.2 15,4.5 C15,4.8 14.8,5 14.5,5",
        },
      },
    ],
  },
  name: "menu",
  theme: "outlined",
};

const MenuOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={MenuOutlinedSvg} />;

MenuOutlined.displayName = "MenuOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(MenuOutlined);
