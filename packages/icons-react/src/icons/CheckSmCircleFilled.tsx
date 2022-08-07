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
        tag: "path",
        attrs: {
          d: "M8,0 C12.418278,0 16,3.581722 16,8 C16,12.418278 12.418278,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 Z M12.3074706,5.2482829 C12.0303763,4.94040039 11.556159,4.91544158 11.2482765,5.19253584 L11.2482765,5.19253584 L6.77717809,9.21652437 L4.78033009,7.21967636 C4.48743687,6.92678315 4.01256313,6.92678315 3.71966991,7.21967636 C3.4267767,7.51256958 3.4267767,7.98744332 3.71966991,8.28033654 L3.71966991,8.28033654 L6.21966991,10.7803365 C6.50173118,11.0623978 6.95522733,11.0743237 7.25172355,10.8074771 L7.25172355,10.8074771 L12.2517235,6.30747706 C12.5596061,6.0303828 12.5845649,5.55616542 12.3074706,5.2482829 Z",
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
