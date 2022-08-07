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
        tag: "path",
        attrs: {
          d: "M20,0 C31.045695,0 40,8.954305 40,20 C40,31.045695 31.045695,40 20,40 C8.954305,40 0,31.045695 0,20 C0,8.954305 8.954305,0 20,0 Z M29.7071068,13.2928932 C29.3165825,12.9023689 28.6834175,12.9023689 28.2928932,13.2928932 L28.2928932,13.2928932 L17,24.5857864 L11.7071068,19.2928932 C11.3165825,18.9023689 10.6834175,18.9023689 10.2928932,19.2928932 C9.90236893,19.6834175 9.90236893,20.3165825 10.2928932,20.7071068 L10.2928932,20.7071068 L16.2928932,26.7071068 C16.6834175,27.0976311 17.3165825,27.0976311 17.7071068,26.7071068 L17.7071068,26.7071068 L29.7071068,14.7071068 C30.0976311,14.3165825 30.0976311,13.6834175 29.7071068,13.2928932 Z",
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
