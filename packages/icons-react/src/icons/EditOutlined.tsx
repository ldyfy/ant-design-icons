// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import EditOutlinedSvg from '@ant-design/icons-svg/lib/asn/EditOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const EditOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M5.973,10.2832202 L3,11.0002202 L3.715,8.02322017 L11.337,0.390220171 C11.888,-0.162779829 12.948,-0.117779829 13.524,0.460220171 C13.798,0.733220171 13.97,1.12122017 13.997,1.52022017 C14.025,1.95522017 13.879,2.36622017 13.594,2.65022017 L5.973,10.2832202 Z M5.433,9.31822017 L12.841,1.89722017 C12.909,1.82922017 12.943,1.71822017 12.935,1.59022017 C12.925,1.44622017 12.864,1.30622017 12.772,1.21322017 C12.672,1.11122017 12.512,1.04922017 12.358,1.04922017 C12.292,1.04922017 12.171,1.06122017 12.089,1.14322017 L4.679,8.56322017 L4.441,9.55522017 L5.433,9.31822017 Z M15,12.5 C15,12.776 14.762,13 14.469,13 L0.531,13 C0.238,13 0,12.776 0,12.5 C0,12.224 0.238,12 0.531,12 L14.469,12 C14.762,12 15,12.224 15,12.5 Z",
        },
      },
    ],
  },
  name: "edit",
  theme: "oulined",
};

const EditOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={EditOutlinedSvg} />;

EditOutlined.displayName = "EditOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(EditOutlined);
