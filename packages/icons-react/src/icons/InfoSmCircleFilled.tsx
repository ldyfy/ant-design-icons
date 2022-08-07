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
          d: "M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M8,6.75 C7.58578644,6.75 7.25,7.08578644 7.25,7.5 L7.25,12 C7.25,12.4142136 7.58578644,12.75 8,12.75 C8.41421356,12.75 8.75,12.4142136 8.75,12 L8.75,7.5 C8.75,7.08578644 8.41421356,6.75 8,6.75 Z M8,3 C7.44771525,3 7,3.44771525 7,4 C7,4.55228475 7.44771525,5 8,5 C8.55228475,5 9,4.55228475 9,4 C9,3.44771525 8.55228475,3 8,3 Z",
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
