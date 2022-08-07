// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const UserOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 18 18", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8.48556864,0 C11.5231348,0 13.9855686,2.46243388 13.9855686,5.5 C13.9855686,7.62516888 12.7802552,9.46882172 11.0159437,10.3846432 C14.3223823,11.4124959 16.7629126,14.4070674 16.9711373,18.0005248 L15.9691936,18.0004142 C15.7121031,14.0912025 12.4598304,11 8.48556864,11 C4.51130692,11 1.25903421,14.0912025 1.00194366,18.0004142 L-4.92029924e-14,18.0005248 C0.208210308,14.4073156 2.64841783,11.4129096 5.95481825,10.3831113 C4.19088205,9.46882172 2.98556864,7.62516888 2.98556864,5.5 C2.98556864,2.46243388 5.44800251,0 8.48556864,0 Z M8.48556864,1 C6.00028726,1 3.98556864,3.01471863 3.98556864,5.5 C3.98556864,7.98528137 6.00028726,10 8.48556864,10 C10.97085,10 12.9855686,7.98528137 12.9855686,5.5 C12.9855686,3.01471863 10.97085,1 8.48556864,1 Z",
        },
      },
    ],
  },
  name: "user",
  theme: "oulined",
};

const UserOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={UserOutlinedSvg} />;

UserOutlined.displayName = "UserOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UserOutlined);
