// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import UploadOutlinedSvg from '@ant-design/icons-svg/lib/asn/UploadOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const UploadOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 18 18", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.5,5.99928242 C0.776142375,5.99928242 1,6.22314004 1,6.49928242 L1,12.9992824 L14,12.9992824 L14,6.49928242 C14,6.22314004 14.2238576,5.99928242 14.5,5.99928242 C14.7761424,5.99928242 15,6.22314004 15,6.49928242 L15,12.9992824 C15,13.5515672 14.5522847,13.9992824 14,13.9992824 L1,13.9992824 C0.44771525,13.9992824 0,13.5515672 0,12.9992824 L0,6.49928242 C0,6.22314004 0.223857625,5.99928242 0.5,5.99928242 Z M8,3 L8,11 L7,11 L7,3 L4.5,3 L7.5,7.10542736e-15 L10.5,3 L8,3 Z",
        },
      },
    ],
  },
  name: "upload",
  theme: "outlined",
};

const UploadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={UploadOutlinedSvg} />;

UploadOutlined.displayName = "UploadOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(UploadOutlined);
