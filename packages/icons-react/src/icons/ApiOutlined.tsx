// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import ApiOutlinedSvg from '@ant-design/icons-svg/lib/asn/ApiOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ApiOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 22 22", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M19.5,4 C18.671,4 18,3.328 18,2.5 C18,1.672 18.671,1 19.5,1 C20.329,1 21,1.672 21,2.5 C21,3.328 20.329,4 19.5,4 M2.5,18 C1.671,18 1,17.328 1,16.5 C1,15.672 1.671,15 2.5,15 C3.329,15 4,15.672 4,16.5 C4,17.328 3.329,18 2.5,18 M19.5,0 C18.291,0 17.282,0.859 17.05,2 L10,2 C7.794,2 6,3.794 6,6 C6,8.206 7.794,10 10,10 L13,10 C14.654,10 16,11.346 16,13 C16,14.654 14.654,16 13,16 L4.95,16 C4.718,14.859 3.709,14 2.5,14 C1.119,14 0,15.119 0,16.5 C0,17.881 1.119,19 2.5,19 C3.709,19 4.718,18.141 4.95,17 L13,17 C15.206,17 17,15.206 17,13 C17,10.794 15.206,9 13,9 L10,9 C8.346,9 7,7.654 7,6 C7,4.346 8.346,3 10,3 L17.05,3 C17.282,4.141 18.291,5 19.5,5 C20.881,5 22,3.881 22,2.5 C22,1.119 20.881,0 19.5,0",
        },
      },
    ],
  },
  name: "search",
  theme: "oulined",
};

const ApiOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ApiOutlinedSvg} />;

ApiOutlined.displayName = "ApiOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ApiOutlined);
