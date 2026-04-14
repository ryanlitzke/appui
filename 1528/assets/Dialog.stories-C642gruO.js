import { D as Dialog } from "./Dialog-CTHi4xIs.js";
import { A as AppUiDecorator } from "./Decorators-UszGLTir.js";
import { b as DialogButtonType } from "./Key.enum-Cwm_wx_0.js";
import "./iframe-Bz2NxXXs.js";
import "./preload-helper-UZRgTS1n.js";
import "./DivWithOutsideClick-O9KdtHt6.js";
import "./useTranslation-D9mgHczY.js";
import "./UiCore-DEmG4iAt.js";
import "./appui-react-B4mSoiHm.js";
import "./client-BS1X1g9q.js";
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
