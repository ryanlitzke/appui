import { D as Dialog } from "./Dialog-ClvIhlwu.js";
import { A as AppUiDecorator } from "./Decorators-BA-AiU1b.js";
import { b as DialogButtonType } from "./Key.enum-BUNZu1c6.js";
import "./iframe-C44dtwpp.js";
import "./preload-helper-UZRgTS1n.js";
import "./DivWithOutsideClick-DrcqwHP7.js";
import "./useTranslation-C3gaerfC.js";
import "./UiCore-CCyAGVfR.js";
import "./appui-react-DrXaB080.js";
import "./client-DEiTaiZs.js";
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
