// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import DeleteOutlinedSvg from "@ant-design/icons-svg/lib/asn/DeleteOutlined";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const DeleteOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M11.5,2 C11.775,2 12,2.225 12,2.5 C12,2.775 11.775,3 11.5,3 L11,3 L11,13 C11,13.552 10.552,14 10,14 L2,14 C1.448,14 1,13.552 1,13 L1,3 L0.5,3 C0.225,3 0,2.775 0,2.5 C0,2.225 0.225,2 0.5,2 L11.5,2 Z M10,13 L10,3 L2,3 L2,13 L10,13 Z M4.5,12 C4.225,12 4,11.775 4,11.5 L4,4.5 C4,4.225 4.225,4 4.5,4 C4.775,4 5,4.225 5,4.5 L5,11.5 C5,11.775 4.775,12 4.5,12 Z M7.5,12 C7.225,12 7,11.775 7,11.5 L7,4.5 C7,4.225 7.225,4 7.5,4 C7.775,4 8,4.225 8,4.5 L8,11.5 C8,11.775 7.775,12 7.5,12 Z M3.5,1 C3.225,1 3,0.775 3,0.5 C3,0.225 3.225,0 3.5,0 L8.5,0 C8.775,0 9,0.225 9,0.5 C9,0.775 8.775,1 8.5,1 L3.5,1 Z",
        },
      },
    ],
  },
  name: "delete",
  theme: "oulined",
};

const DeleteOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={DeleteOutlinedSvg} />;

DeleteOutlined.displayName = "DeleteOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(DeleteOutlined);
