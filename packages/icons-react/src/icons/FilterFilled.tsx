// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const FilterFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M0.112416895,0.814716791 C-0.152366478,0.487833921 0.0802747564,0 0.500944039,0 L12.500944,0 C12.9216133,0 13.1542546,0.487833921 12.8894712,0.814716791 L8.00094404,6.84974748 L8.00094404,14.1726472 C8.00094404,14.6036896 7.49199396,14.8327362 7.1693665,14.5468882 L5.1693665,12.7748882 C5.06225824,12.6799903 5.00094404,12.5437479 5.00094404,12.4006472 L5.00094404,6.84974748 L0.112416895,0.814716791 Z",
        },
      },
    ],
  },
  name: "filter",
  theme: "filled",
};

const FilterFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={FilterFilledSvg} />;

FilterFilled.displayName = "FilterFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(FilterFilled);
