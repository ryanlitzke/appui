import { D as Dialog } from "./Dialog-CAfUKbHv.js";
import { A as AppUiDecorator } from "./Decorators-D-Rt3xjv.js";
import { b as DialogButtonType } from "./Key.enum-DJcBC41F.js";
import "./iframe-C98IYynM.js";
import "./preload-helper-UZRgTS1n.js";
import "./DivWithOutsideClick-tg87Nxyz.js";
import "./useTranslation-CRYc907n.js";
import "./UiCore-CegaxPrK.js";
import "./appui-react-C9pNnkoL.js";
import "./client-D2bt15K3.js";
import "./index-DECez0rJ.js";
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
