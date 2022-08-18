// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ExclamationCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M12,0 C18.6857136,0 24,5.31428568 24,12 C24,18.6857136 18.5142864,24 12,24 C5.48571432,24 0,18.5142864 0,12 C0,5.48571432 5.48571432,0 12,0 Z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M12.75,13.4279652 C12.75,13.7431219 12.4123506,14 12,14 C11.5876494,14 11.25,13.7425561 11.25,13.4279652 L11.25,6.57090318 C11.25,6.25631233 11.5876494,6 12,6 C12.4123506,6 12.75,6.25687814 12.75,6.57090318 L12.75,13.4279652 Z M12,16 C12.5522847,16 13,16.4477153 13,17 C13,17.5522847 12.5522847,18 12,18 C11.4477153,18 11,17.5522847 11,17 C11,16.4477153 11.4477153,16 12,16 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "exclamationCircle",
  theme: "filled",
};

const ExclamationCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ExclamationCircleFilledSvg} />;

ExclamationCircleFilled.displayName = "ExclamationCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  ExclamationCircleFilled
);
