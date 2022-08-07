// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import ForwardOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForwardOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ForwardOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M14.5,7.78267933 C14.7761424,7.78267933 15,8.00653696 15,8.28267933 L15,12.7826793 C15,13.3349641 14.5522847,13.7826793 14,13.7826793 L1,13.7826793 C0.44771525,13.7826793 0,13.3349641 0,12.7826793 L0,8.28267933 C0,8.00653696 0.223857625,7.78267933 0.5,7.78267933 C0.776142375,7.78267933 1,8.00653696 1,8.28267933 L1,12.7826793 L14,12.7826793 L14,8.28267933 C14,8.00653696 14.2238576,7.78267933 14.5,7.78267933 Z M11,0 L14,3 L11,6 L11.0008553,3.32324802 C10.667353,3.2662987 10.3272491,3.23736265 9.9830533,3.23736265 C6.83851609,3.23736265 4.23329123,5.66543459 4,8.78267933 C3.97939144,9.05805162 3.73945154,9.26457843 3.46407925,9.24396986 C3.18870696,9.2233613 2.98218016,8.98342141 3.00278872,8.70804912 C3.27506605,5.06987087 6.31423499,2.23736265 9.9830533,2.23736265 C10.3262178,2.23736265 10.666175,2.26209761 11.0009807,2.31090118 L11,0 Z",
        },
      },
    ],
  },
  name: "forward",
  theme: "oulined",
};

const ForwardOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ForwardOutlinedSvg} />;

ForwardOutlined.displayName = "ForwardOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  ForwardOutlined
);
