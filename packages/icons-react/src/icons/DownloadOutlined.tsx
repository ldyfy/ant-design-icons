// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import DownloadOutlinedSvg from '@ant-design/icons-svg/lib/asn/DownloadOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const DownloadOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.5,5.99928242 C0.776142375,5.99928242 1,6.22314004 1,6.49928242 L1,12.9992824 L14,12.9992824 L14,6.49928242 C14,6.22314004 14.2238576,5.99928242 14.5,5.99928242 C14.7761424,5.99928242 15,6.22314004 15,6.49928242 L15,12.9992824 C15,13.5515672 14.5522847,13.9992824 14,13.9992824 L1,13.9992824 C0.44771525,13.9992824 0,13.5515672 0,12.9992824 L0,6.49928242 C0,6.22314004 0.223857625,5.99928242 0.5,5.99928242 Z M8,8 L10.5,8 L7.5,11 L4.5,8 L7,8 L7,1.77635684e-15 L8,1.77635684e-15 L8,8 Z",
        },
      },
    ],
  },
  name: "download",
  theme: "oulined",
};

const DownloadOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={DownloadOutlinedSvg} />;

DownloadOutlined.displayName = "DownloadOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  DownloadOutlined
);
