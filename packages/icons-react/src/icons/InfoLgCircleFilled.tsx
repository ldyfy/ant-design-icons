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
        tag: 'path',
        attrs: {
          d: 'M20,0 C31.142856,0 40,8.8571428 40,20 C40,31.142856 31.142856,40 20,40 C8.8571428,40 0,31.142856 0,20 C0,8.8571428 8.8571428,0 20,0 Z'
        }
      },
      {
        tag: "path",
        attrs: {
          fill: '#fff',
          d: "M20,10 C20.8284271,10 21.5,10.6715729 21.5,11.5 C21.5,12.3284271 20.8284271,13 20,13 C19.1715729,13 18.5,12.3284271 18.5,11.5 C18.5,10.6715729 19.1715729,10 20,10 Z M20,15 C20.5522847,15 21,15.4477153 21,16 L21,28 L23,28 C23.5522847,28 24,28.4477153 24,29 C24,29.5522847 23.5522847,30 23,30 L17,30 C16.4477153,30 16,29.5522847 16,29 C16,28.4477153 16.4477153,28 17,28 L19,28 L19,17 L17,17 C16.4477153,17 16,16.5522847 16,16 C16,15.4477153 16.4477153,15 17,15 L20,15 L20,15 Z",
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
