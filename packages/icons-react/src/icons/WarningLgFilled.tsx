// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from "react";
// import WarningLgFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from "../components/AntdIcon";

const WarningLgFilledSvg: any = {
  icon: {
    tag: "svg",
    attrs: { viewBox: "0 0 40 40", focusable: "false" },
    children: [
      {
        tag: "path",
        attrs: {
          d: "M18.7817206,0.6945 C19.3327206,-0.2315 20.6667206,-0.2315 21.2177206,0.6945 L21.2177206,0.6945 L39.7947206,31.8355 C40.3627206,32.7875 39.6817206,33.9995 38.5767206,33.9995 L38.5767206,33.9995 L1.42272065,33.9995 C0.317720649,33.9995 -0.363279351,32.7875 0.204720649,31.8355 L0.204720649,31.8355 Z M21,26 L19,26 L19,28 L21,28 L21,26 Z M20,9 C19.4501992,9 19,9.44854657 19,9.99908056 L19,9.99908056 L19,21.9989391 C19,22.5494731 19.4501992,23 20,23 C20.5498008,23 21,22.5504633 21,21.9989391 L21,21.9989391 L21,9.99908056 C21,9.44953674 20.5498008,9 20,9 Z",
        },
      },
    ],
  },
  name: "warningLg",
  theme: "filled",
};

const WarningLgFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>
) => <AntdIcon {...props} ref={ref} icon={WarningLgFilledSvg} />;

WarningLgFilled.displayName = "WarningLgFilled";
export default React.forwardRef<HTMLSpanElement, AntdIconProps>(
  WarningLgFilled
);
