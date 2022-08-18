// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import ExclamationCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ExclamationSmCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8,0 C12.4571424,0 16,3.54285712 16,8 C16,12.4571424 12.3428576,16 8,16 C3.65714288,16 0,12.3428576 0,8 C0,3.65714288 3.65714288,0 8,0 Z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8,12.75 C7.44771525,12.75 7,12.3022847 7,11.75 C7,11.1977153 7.44771525,10.75 8,10.75 C8.55228475,10.75 9,11.1977153 9,11.75 C9,12.3022847 8.55228475,12.75 8,12.75 Z M8,3.5 C8.41421356,3.5 8.75,3.83578644 8.75,4.25 L8.75,8.75 C8.75,9.16421356 8.41421356,9.5 8,9.5 C7.58578644,9.5 7.25,9.16421356 7.25,8.75 L7.25,4.25 C7.25,3.83578644 7.58578644,3.5 8,3.5 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "exclamationSmCircle",
  theme: "filled",
};

const ExclamationSmCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ExclamationSmCircleFilledSvg} />;

ExclamationSmCircleFilled.displayName = "ExclamationCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  ExclamationSmCircleFilled
);
