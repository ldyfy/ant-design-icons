// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import PauseCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PauseCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const PauseCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M6,4.3 C5.58578644,4.3 5.25,4.71973305 5.25,5.2375 L5.25,10.8625 C5.25,11.380267 5.58578644,11.8 6,11.8 C6.41421356,11.8 6.75,11.380267 6.75,10.8625 L6.75,5.2375 C6.75,4.71973305 6.41421356,4.3 6,4.3 Z M10,4.3 C9.58578644,4.3 9.25,4.71973305 9.25,5.2375 L9.25,10.8625 C9.25,11.380267 9.58578644,11.8 10,11.8 C10.4142136,11.8 10.75,11.380267 10.75,10.8625 L10.75,5.2375 C10.75,4.71973305 10.4142136,4.3 10,4.3 Z",
        },
      },
    ],
  },
  name: "pauseCircle",
  theme: "filled",
};

const PauseCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={PauseCircleFilledSvg} />;

PauseCircleFilled.displayName = "PauseCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  PauseCircleFilled
);
