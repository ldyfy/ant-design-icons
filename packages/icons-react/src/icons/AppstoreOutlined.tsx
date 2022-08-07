// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import AppstoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppstoreOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const AppstoreOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 14 14", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M13,14 L9,14 C8.4,14 8,13.6 8,13 L8,9 C8,8.4 8.4,8 9,8 L13,8 C13.6,8 14,8.4 14,9 L14,13 C14,13.6 13.6,14 13,14 Z M13,9 L9,9 L9,13 L13,13 L13,9 Z M13,6 L9,6 C8.4,6 8,5.6 8,5 L8,1 C8,0.4 8.4,0 9,0 L13,0 C13.6,0 14,0.4 14,1 L14,5 C14,5.6 13.6,6 13,6 Z M13,1 L9,1 L9,5 L13,5 L13,1 Z M5,14 L1,14 C0.4,14 0,13.6 0,13 L0,9 C0,8.4 0.4,8 1,8 L5,8 C5.6,8 6,8.4 6,9 L6,13 C6,13.6 5.6,14 5,14 Z M5,9 L1,9 L1,13 L5,13 L5,9 Z M5,6 L1,6 C0.4,6 0,5.6 0,5 L0,1 C0,0.4 0.4,0 1,0 L5,0 C5.6,0 6,0.4 6,1 L6,5 C6,5.6 5.6,6 5,6 Z M5,1 L1,1 L1,5 L5,5 L5,1 Z",
        },
      },
    ],
  },
  name: "appstore",
  theme: "oulined",
};

const AppstoreOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={AppstoreOutlinedSvg} />;

AppstoreOutlined.displayName = "AppstoreOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  AppstoreOutlined
);
