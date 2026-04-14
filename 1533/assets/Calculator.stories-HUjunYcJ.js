import { C as Calculator } from "./appui-react-B_TRJJtR.js";
import { A as AppUiDecorator } from "./Decorators-D7FKap7C.js";
import "./iframe-Ce3lap89.js";
import "./preload-helper-UZRgTS1n.js";
import "./Key.enum-CAMwd35F.js";
import "./client-8VfxnKhi.js";
import "./index-CZZ7UcJw.js";
const { action } = __STORYBOOK_MODULE_ACTIONS__;
const meta = {
  title: "Components/Calculator",
  component: Calculator,
  tags: ["autodocs"],
  decorators: [AppUiDecorator]
};
const Default = {
  args: {
    engine: void 0,
    // set via defaultProps
    onOk: action("onOk"),
    onCancel: action("onCancel")
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: '{\n  args: {\n    engine: undefined!,\n    // set via defaultProps\n    onOk: action("onOk"),\n    onCancel: action("onCancel")\n  }\n}',
      ...Default.parameters?.docs?.source
    }
  }
};
const __namedExportsOrder = ["Default"];
export {
  Default,
  __namedExportsOrder,
  meta as default
};
