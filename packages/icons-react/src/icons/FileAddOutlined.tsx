// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const FileAddOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M9.5,9 C10.436,9 11.315,9.364 11.976,10.025 C12.637,10.686 13.001,11.565 13,12.5 C13,14.43 11.43,16 9.499,16 C7.571,16 6.001,14.43 6,12.5 C6,10.57 7.57,9 9.5,9 Z M7.71,0 L12,4.29 L12,8 L11,8 L11,5 L7,5 L7,1 L1,1 L1,14 L5,14 L5,15 L0.999807492,15 C0.443716645,15 0,14.5489341 0,13.992516 L0,13.992516 L0,1.00748397 C0,0.448920205 0.451273626,0 1.00794785,0 L1.00794785,0 L7.71,0 Z M10.041,10 L9.041,10 L9.041,12 L7.041,12 L7.041,13 L9.041,13 L9.041,15 L10.041,15 L10.041,13 L12.041,13 L12.041,12 L10.041,12 L10.041,10 Z M8,1.71 L8,4 L10.29,4 L8,1.71 Z",
        },
      },
    ],
  },
  name: "file-add",
  theme: "oulined",
};

const FileAddOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={FileAddOutlinedSvg} />;

FileAddOutlined.displayName = "FileAddOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  FileAddOutlined
);
