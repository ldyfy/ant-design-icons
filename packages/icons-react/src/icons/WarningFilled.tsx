// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const WarningFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M11.2690324,0.4167 C11.5996324,-0.1389 12.4000324,-0.1389 12.7306324,0.4167 L12.7306324,0.4167 L23.8768324,19.1013 C24.2176324,19.6725 23.8090324,20.3997 23.1460324,20.3997 L23.1460324,20.3997 L0.853632389,20.3997 C0.190632389,20.3997 -0.217967611,19.6725 0.122832389,19.1013 L0.122832389,19.1013 Z M12.6,15.6 L11.4,15.6 L11.4,16.8 L12.6,16.8 L12.6,15.6 Z M12,5.4 C11.6701195,5.4 11.4,5.66912794 11.4,5.99944833 L11.4,5.99944833 L11.4,13.1993635 C11.4,13.5296839 11.6701195,13.8 12,13.8 C12.3298805,13.8 12.6,13.530278 12.6,13.1993635 L12.6,13.1993635 L12.6,5.99944833 C12.6,5.66972205 12.3298805,5.4 12,5.4 Z",
        },
      },
    ],
  },
  name: "warning",
  theme: "filled",
};

const WarningFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={WarningFilledSvg} />;

WarningFilled.displayName = "WarningFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(WarningFilled);
