// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const InfoCircleFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 24 24", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M12,0 C18.627417,0 24,5.372583 24,12 C24,18.627417 18.627417,24 12,24 C5.372583,24 0,18.627417 0,12 C0,5.372583 5.372583,0 12,0 Z M12,9.6 C11.6686292,9.6 11.4,9.86862915 11.4,10.2 L11.4,10.2 L11.4,17.4 C11.4,17.7313708 11.6686292,18 12,18 C12.3313708,18 12.6,17.7313708 12.6,17.4 L12.6,17.4 L12.6,10.2 C12.6,9.86862915 12.3313708,9.6 12,9.6 Z M12.6,6.6 L11.4,6.6 L11.4,7.8 L12.6,7.8 L12.6,6.6 Z",
        },
      },
    ],
  },
  name: "infoCircle",
  theme: "filled",
};

const InfoCircleFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={InfoCircleFilledSvg} />;

InfoCircleFilled.displayName = "InfoCircleFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  InfoCircleFilled
);
