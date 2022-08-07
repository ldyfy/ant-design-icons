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
        tag: "path",
        attrs: {
          d: "M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M5.53033009,4.46966991 C5.23743687,4.1767767 4.76256313,4.1767767 4.46966991,4.46966991 C4.1767767,4.76256313 4.1767767,5.23743687 4.46966991,5.53033009 L4.46966991,5.53033009 L6.93933983,8 L4.46966991,10.4696699 C4.1767767,10.7625631 4.1767767,11.2374369 4.46966991,11.5303301 C4.76256313,11.8232233 5.23743687,11.8232233 5.53033009,11.5303301 L5.53033009,11.5303301 L8,9.06066017 L10.4696699,11.5303301 C10.7625631,11.8232233 11.2374369,11.8232233 11.5303301,11.5303301 C11.8232233,11.2374369 11.8232233,10.7625631 11.5303301,10.4696699 L11.5303301,10.4696699 L9.06066017,8 L11.5303301,5.53033009 C11.8232233,5.23743687 11.8232233,4.76256313 11.5303301,4.46966991 C11.2374369,4.1767767 10.7625631,4.1767767 10.4696699,4.46966991 L10.4696699,4.46966991 L8,6.93933983 Z",
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
