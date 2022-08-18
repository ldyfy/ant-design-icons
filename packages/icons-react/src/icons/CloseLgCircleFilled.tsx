// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import CloseLgCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CloseLgCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CloseLgCircleFilledSvg: any = {
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
          d: "M18.5857864,20 L12.2928932,13.7071068 C11.9023689,13.3165825 11.9023689,12.6834175 12.2928932,12.2928932 C12.6834175,11.9023689 13.3165825,11.9023689 13.7071068,12.2928932 L20,18.5857864 L26.2928932,12.2928932 C26.6834175,11.9023689 27.3165825,11.9023689 27.7071068,12.2928932 C28.0976311,12.6834175 28.0976311,13.3165825 27.7071068,13.7071068 L21.4142136,20 L27.7071068,26.2928932 C28.0976311,26.6834175 28.0976311,27.3165825 27.7071068,27.7071068 C27.3165825,28.0976311 26.6834175,28.0976311 26.2928932,27.7071068 L20,21.4142136 L13.7071068,27.7071068 C13.3165825,28.0976311 12.6834175,28.0976311 12.2928932,27.7071068 C11.9023689,27.3165825 11.9023689,26.6834175 12.2928932,26.2928932 L18.5857864,20 Z",
        },
      },
    ],
  },
  name: "closeLgCircle",
  theme: "filled",
};

const CloseLgCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CloseLgCircleFilledSvg} />;

CloseLgCircleFilled.displayName = "CloseLgCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CloseLgCircleFilled
);
