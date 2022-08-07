// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const MinusSmCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M11.75,7.5 L4.25,7.5 C3.83578644,7.5 3.5,7.83578644 3.5,8.25 C3.5,8.66421356 3.83578644,9 4.25,9 L4.25,9 L11.75,9 C12.1642136,9 12.5,8.66421356 12.5,8.25 C12.5,7.83578644 12.1642136,7.5 11.75,7.5 L11.75,7.5 Z",
        },
      },
    ],
  },
  name: "minusSmCircle",
  theme: "filled",
};

const MinusSmCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={MinusSmCircleFilledSvg} />;

MinusSmCircleFilled.displayName = "MinusSmCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  MinusSmCircleFilled
);
