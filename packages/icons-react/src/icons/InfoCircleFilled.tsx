// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const InfoCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: 'path',
        attrs: {
          d: 'M12,0 C18.6857136,0 24,5.31428568 24,12 C24,18.6857136 18.6857136,24 12,24 C5.31428568,24 0,18.6857136 0,12 C0,5.31428568 5.31428568,0 12,0 Z'
        }
      },
      {
        tag: "path",
        attrs: {
          d: "M12.7,10 L10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.1 C10,11.3761424 10.2238576,11.6 10.5,11.6 L11.6,11.6 L11.6,11.6 L11.6,17 L10.5,17 C10.2238576,17 10,17.2238576 10,17.5 L10,18.1 C10,18.3761424 10.2238576,18.6 10.5,18.6 L14.3,18.6 C14.5761424,18.6 14.8,18.3761424 14.8,18.1 L14.8,17.5 C14.8,17.2238576 14.5761424,17 14.3,17 L13.2,17 L13.2,17 L13.2,10.5 C13.2,10.2238576 12.9761424,10 12.7,10 Z M12,6 C11.4477153,6 11,6.44771525 11,7 C11,7.55228475 11.4477153,8 12,8 C12.5522847,8 13,7.55228475 13,7 C13,6.44771525 12.5522847,6 12,6 Z",
          fill: '#fff'
        },
      },
    ],
  },
  name: "infoCircle",
  theme: "filled",
};

const InfoCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={InfoCircleFilledSvg} />;

InfoCircleFilled.displayName = "InfoCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  InfoCircleFilled
);
