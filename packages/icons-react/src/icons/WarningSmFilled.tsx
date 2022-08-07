// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import WarningSmFilledSvg from '@ant-design/icons-svg/lib/asn/WarningSmFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const WarningSmFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8.33790232,0.116489835 C8.40482658,0.167253375 8.46225349,0.232592769 8.50686966,0.30873808 L15.8976169,12.9223426 C16.084253,13.2408699 16.0086038,13.6712323 15.7286495,13.8835838 C15.6285744,13.959493 15.5109902,14 15.3907148,14 L0.609220427,14 C0.272757276,14 0,13.6896613 0,13.3068391 C0,13.1699918 0.0356016401,13.0362064 0.102318391,12.9223426 L7.49306559,0.30873808 C7.67970177,-0.00978924205 8.05794805,-0.0958617133 8.33790232,0.116489835 Z M8,11 C7.44771525,11 7,11.4477153 7,12 C7,12.5522847 7.44771525,13 8,13 C8.55228475,13 9,12.5522847 9,12 C9,11.4477153 8.55228475,11 8,11 Z M8,3.25 C7.58578644,3.25 7.25,3.58578644 7.25,4 L7.25,4 L7.25,8.5 C7.25,8.91421356 7.58578644,9.25 8,9.25 C8.41421356,9.25 8.75,8.91421356 8.75,8.5 L8.75,8.5 L8.75,4 C8.75,3.58578644 8.41421356,3.25 8,3.25 Z",
        },
      },
    ],
  },
  name: "warningSm",
  theme: "filled",
};

const WarningSmFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={WarningSmFilledSvg} />;

WarningSmFilled.displayName = "WarningSmFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  WarningSmFilled
);
