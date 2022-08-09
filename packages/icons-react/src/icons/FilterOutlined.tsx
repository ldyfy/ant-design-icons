// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const FilterOutlinedSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 14 14", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M5.88947118,6.35793043 C5.96159123,6.44696474 6.00094404,6.55806794 6.00094404,6.67264722 L6.00094404,12.1756285 L7.00094404,13.0616285 L7.00094404,6.67264722 C7.00094404,6.55806794 7.04029685,6.44696474 7.11241689,6.35793043 L11.4524757,1 L1.54941234,1 L5.88947118,6.35793043 Z M0.112416895,0.814716791 C-0.152366478,0.487833921 0.0802747564,0 0.500944039,0 L12.500944,0 C12.9216133,0 13.1542546,0.487833921 12.8894712,0.814716791 L8.00094404,6.84974748 L8.00094404,14.1726472 C8.00094404,14.6036896 7.49199396,14.8327362 7.1693665,14.5468882 L5.1693665,12.7748882 C5.06225824,12.6799903 5.00094404,12.5437479 5.00094404,12.4006472 L5.00094404,6.84974748 L0.112416895,0.814716791 Z",
        },
      },
    ],
  },
  name: "filter",
  theme: "oulined",
};

const FilterOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={FilterOutlinedSvg} />;

FilterOutlined.displayName = "FilterOutlined";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterOutlined);
