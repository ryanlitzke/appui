import { D as Dialog } from "./Dialog-ShkzTqem.js";
import { A as AppUiDecorator } from "./Decorators-BImuD1Eg.js";
import { b as DialogButtonType } from "./Key.enum-CwPD4czx.js";
import "./iframe-CnbeMqQc.js";
import "./preload-helper-UZRgTS1n.js";
import "./DivWithOutsideClick-1RwlvjCU.js";
import "./useTranslation-CTAKzphV.js";
import "./UiCore-B8kvvfnZ.js";
import "./appui-react-Bx_h5hps.js";
import "./client-CZPszfDx.js";
import "./index-CRlEezGS.js";
const meta = {
  title: "Deprecated/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  decorators: [AppUiDecorator]
};
const Basic = {
  args: {
    opened: true,
    title: "Title",
    children: "Content",
    buttonCluster: [{
      type: DialogButtonType.Cancel,
      onClick: () => void 0,
      label: "Cancel"
    }, {
      type: DialogButtonType.OK,
      onClick: () => void 0,
      label: "OK"
    }]
  }
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: '{\n  args: {\n    opened: true,\n    title: "Title",\n    children: "Content",\n    buttonCluster: [{\n      type: DialogButtonType.Cancel,\n      onClick: () => undefined,\n      label: "Cancel"\n    }, {\n      type: DialogButtonType.OK,\n      onClick: () => undefined,\n      label: "OK"\n    }]\n  }\n}',
      ...Basic.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Basic"];
export {
  Basic,
  __namedExportsOrder,
  meta as default
};
