// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import InfoLgCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoLgCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const InfoLgCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 40 40", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M20,0 C31.045695,0 40,8.954305 40,20 C40,31.045695 31.045695,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 Z M20,16 C19.4477153,16 19,16.4477153 19,17 L19,17 L19,29 C19,29.5522847 19.4477153,30 20,30 C20.5522847,30 21,29.5522847 21,29 L21,29 L21,17 C21,16.4477153 20.5522847,16 20,16 Z M21,11 L19,11 L19,13 L21,13 L21,11 Z",
        },
      },
    ],
  },
  name: "infoLgCircle",
  theme: "filled",
};

const InfoLgCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={InfoLgCircleFilledSvg} />;

InfoLgCircleFilled.displayName = "InfoLgCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  InfoLgCircleFilled
);
