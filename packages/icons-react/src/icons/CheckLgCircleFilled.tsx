// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CheckLgCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 40 40", focusable: "false" },
    children: [
      {
        tag: "circle",
        attrs: {
          cx: 20,
          cy: 20,
          r: 20,
        },
      },
      {
        tag: "path",
        attrs: {
          fill: "#fff",
          d: "M28.2928932,13.2928932 C28.6834175,12.9023689 29.3165825,12.9023689 29.7071068,13.2928932 C30.0976311,13.6834175 30.0976311,14.3165825 29.7071068,14.7071068 L17.7071068,26.7071068 C17.3165825,27.0976311 16.6834175,27.0976311 16.2928932,26.7071068 L10.2928932,20.7071068 C9.90236893,20.3165825 9.90236893,19.6834175 10.2928932,19.2928932 C10.6834175,18.9023689 11.3165825,18.9023689 11.7071068,19.2928932 L17,24.5857864 L28.2928932,13.2928932 Z",
        },
      },
    ],
  },
  name: "checkLgCircle",
  theme: "filled",
};

const CheckLgCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CheckLgCircleFilledSvg} />;

CheckLgCircleFilled.displayName = "CheckLgCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CheckLgCircleFilled
);
