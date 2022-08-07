// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ExportOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M1,1 L7,1 L7,5 L11,5 L11,7 L12,7 L12,4.293 L7.707,0 L1,0 C0.44771525,1.01453063e-16 -4.00702282e-16,0.44771525 0,1 L0,14 C6.76353751e-17,14.5522847 0.44771525,15 1,15 L9,15 L9,15 L9,14 L1,14 L1,1 Z M8,1.707 L10.293,4 L8,4 L8,1.707 Z M11.85352,8.14645 C11.6577223,7.95456843 11.3439224,7.95615332 11.1500729,8.15000285 C10.9562233,8.34385239 10.9546384,8.65765228 11.14652,8.85345 L13.293,11 L7.5,11 C7.22385763,11 7,11.2238576 7,11.5 C7,11.7761424 7.22385763,12 7.5,12 L13.293,12 L13.293,12 L11.14652,14.14648 C10.9546384,14.3422777 10.9562233,14.6560776 11.1500729,14.8499271 C11.3439224,15.0437767 11.6577223,15.0453616 11.85352,14.85348 L14.85352,11.85348 C14.9472996,11.7597396 14.9999878,11.6325767 14.9999878,11.49998 C14.9999878,11.3673833 14.9472996,11.2402204 14.85352,11.14648 L11.85352,8.14645 Z",
        },
      },
    ],
  },
  name: "export",
  theme: "oulined",
};

const ExportOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ExportOutlinedSvg} />;

ExportOutlined.displayName = "ExportOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(ExportOutlined);
