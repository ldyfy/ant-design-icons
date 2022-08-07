// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import FileRemoveOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileRemoveOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const FileRemoveOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M1,1 L7,1 L7,5 L11,5 L11,8 L12,8 L12,4.29 L7.71,0 L1.00794785,0 C0.451273626,0 0,0.448920205 0,1.00748397 L0,13.992516 C0,14.5489341 0.45097518,15 0.990777969,15 L6,15 L6,14 L1,14 L1,1 Z M13,11 L13,12 L6,12 L6,11 L13,11 Z M8,1.71 L10.29,4 L8,4 L8,1.71 Z",
        },
      },
    ],
  },
  name: "fileRemove",
  theme: "oulined",
};

const FileRemoveOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={FileRemoveOutlinedSvg} />;

FileRemoveOutlined.displayName = "FileRemoveOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  FileRemoveOutlined
);
