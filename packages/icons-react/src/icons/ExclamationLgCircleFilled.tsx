// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const ExclamationLgCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 40 40", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M20,0 C31.142856,0 40,8.8571428 40,20 C40,31.142856 30.857144,40 20,40 C9.1428572,40 0,30.857144 0,20 C0,9.1428572 9.1428572,0 20,0 Z",
        },
      },
      {
        tag: "path",
        attrs: {
          d: "M21,23.9989391 C21,24.5504633 20.5498008,25 20,25 C19.4501992,25 19,24.5494731 19,23.9989391 L19,11.9990806 C19,11.4485466 19.4501992,11 20,11 C20.5498008,11 21,11.4495367 21,11.9990806 L21,23.9989391 Z M20,28 C20.8284271,28 21.5,28.6715729 21.5,29.5 C21.5,30.3284271 20.8284271,31 20,31 C19.1715729,31 18.5,30.3284271 18.5,29.5 C18.5,28.6715729 19.1715729,28 20,28 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "exclamationLgCircle",
  theme: "filled",
};

const ExclamationLgCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={ExclamationLgCircleFilledSvg} />;

ExclamationLgCircleFilled.displayName = "ExclamationCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  ExclamationLgCircleFilled
);
