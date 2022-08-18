// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const CheckSmCircleFilledSvg: any = {
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
          d: "M11.2482765,5.19253584 C11.556159,4.91544158 12.0303763,4.94040039 12.3074706,5.2482829 C12.5845649,5.55616542 12.5596061,6.0303828 12.2517235,6.30747706 L7.25172355,10.8074771 C6.95522733,11.0743237 6.50173118,11.0623978 6.21966991,10.7803365 L3.71966991,8.28033654 C3.4267767,7.98744332 3.4267767,7.51256958 3.71966991,7.21967636 C4.01256313,6.92678315 4.48743687,6.92678315 4.78033009,7.21967636 L6.77717809,9.21652437 L11.2482765,5.19253584 Z",
          fill: "#fff",
        },
      },
    ],
  },
  name: "checkSmCircle",
  theme: "filled",
};

const CheckSmCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={CheckSmCircleFilledSvg} />;

CheckSmCircleFilled.displayName = "CheckSmCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  CheckSmCircleFilled
);
