// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const FolderOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M15,2 C15.6,2 16,2.4 16,3 L16,12 C16,12.6 15.6,13 15,13 L1,13 C0.4,13 0,12.6 0,12 L0,0.5 C0,0.2 0.2,0 0.5,0 L5.28578644,0 C5.55100293,0 5.80535684,0.10535684 5.99289322,0.292893219 L7.7,2 L15,2 Z M1,1 L1,2 L6.3,2 L5.3,1 L1,1 Z M1,12 L15,12 L15,3 L1,3 L1,12 Z",
        },
      },
    ],
  },
  name: "folder",
  theme: "oulined",
};

const FolderOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={FolderOutlinedSvg} />;

FolderOutlined.displayName = "FolderOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FolderOutlined);
