// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import SearchOutlinedSvg from "@ant-design/icons-svg/lib/asn/SearchOutlined";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const SearchOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M15.5,14.7928932 C15.6952621,14.9881554 15.6952621,15.3047379 15.5,15.5 C15.3047379,15.6952621 14.9881554,15.6952622 14.7928932,15.5 L10.7291058,11.4362127 C9.59233844,12.4110488 8.11494769,13 6.5,13 C2.91014913,13 0,10.0898509 0,6.5 C0,2.91014913 2.91014913,0 6.5,0 C10.0898509,0 13,2.91014913 13,6.5 C13,8.11494773 12.4110487,9.59233851 11.4362126,10.7291059 L15.5,14.7928932 Z M6.5,12 C9.53756612,12 12,9.53756612 12,6.5 C12,3.46243388 9.53756612,1 6.5,1 C3.46243388,1 1,3.46243388 1,6.5 C1,9.53756612 3.46243388,12 6.5,12 Z",
        },
      },
    ],
  },
  name: "search",
  theme: "outlined",
};

const SearchOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={SearchOutlinedSvg} />;

SearchOutlined.displayName = "SearchOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(SearchOutlined);
