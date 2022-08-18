// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import CloseSmCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSmCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CloseSmCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 16 16", focusable: "false" },
    children: [
      {
        tag: "circle",
        attrs: {
          cx: 8,
          cy: 8,
          r: 8,
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M8,6.93933983 L10.4696699,4.46966991 C10.7625631,4.1767767 11.2374369,4.1767767 11.5303301,4.46966991 C11.8232233,4.76256313 11.8232233,5.23743687 11.5303301,5.53033009 L9.06066017,8 L11.5303301,10.4696699 C11.8232233,10.7625631 11.8232233,11.2374369 11.5303301,11.5303301 C11.2374369,11.8232233 10.7625631,11.8232233 10.4696699,11.5303301 L8,9.06066017 L5.53033009,11.5303301 C5.23743687,11.8232233 4.76256313,11.8232233 4.46966991,11.5303301 C4.1767767,11.2374369 4.1767767,10.7625631 4.46966991,10.4696699 L6.93933983,8 L4.46966991,5.53033009 C4.1767767,5.23743687 4.1767767,4.76256313 4.46966991,4.46966991 C4.76256313,4.1767767 5.23743687,4.1767767 5.53033009,4.46966991 L8,6.93933983 L8,6.93933983 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "closeSmCircle",
  theme: "filled",
};

const CloseSmCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CloseSmCircleFilledSvg} />;

CloseSmCircleFilled.displayName = "CloseSmCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CloseSmCircleFilled
);
