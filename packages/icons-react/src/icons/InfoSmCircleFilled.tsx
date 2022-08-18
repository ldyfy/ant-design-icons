// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import InfoSmCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoSmCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const InfoSmCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8,0 C12.4571424,0 16,3.54285712 16,8 C16,12.4571424 12.4571424,16 8,16 C3.54285712,16 0,12.4571424 0,8 C0,3.54285712 3.54285712,0 8,0 Z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8,3 C8.55228475,3 9,3.44771525 9,4 C9,4.55228475 8.55228475,5 8,5 C7.44771525,5 7,4.55228475 7,4 C7,3.44771525 7.44771525,3 8,3 Z M8.8,6 C8.91045695,6 9,6.08954305 9,6.2 L9,11 L9.8,11 C9.91045695,11 10,11.0895431 10,11.2 L10,12.3 C10,12.4104569 9.91045695,12.5 9.8,12.5 L6.2,12.5 C6.08954305,12.5 6,12.4104569 6,12.3 L6,11.2 C6,11.0895431 6.08954305,11 6.2,11 L7.5,11 L7.5,7.5 L6.2,7.5 C6.08954305,7.5 6,7.41045695 6,7.3 L6,6.2 C6,6.08954305 6.08954305,6 6.2,6 L8.8,6 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "infoSmCircle",
  theme: "filled",
};

const InfoSmCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={InfoSmCircleFilledSvg} />;

InfoSmCircleFilled.displayName = "InfoSmCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  InfoSmCircleFilled
);
