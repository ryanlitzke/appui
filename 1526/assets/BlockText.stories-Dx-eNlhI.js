import { A as AppUiDecorator } from "./Decorators-BA-AiU1b.js";
import { j as jsxRuntimeExports } from "./iframe-C44dtwpp.js";
import { S as StyledText } from "./StyledText-BY76KofT.js";
import "./appui-react-DrXaB080.js";
import "./Key.enum-BUNZu1c6.js";
import "./preload-helper-UZRgTS1n.js";
import "./client-DEiTaiZs.js";
function BlockText(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(StyledText, { ...props, mainClassName: "uicore-text-block" });
}
BlockText.__docgenInfo = { "description": "Styled block text React functional component\n@public\n@deprecated in 4.12.0. Use {@link https://itwinui.bentley.com/docs/typography#text iTwinUI Text} instead.", "methods": [], "displayName": "BlockText" };
const meta = {
  title: "Deprecated/BlockText",
  component: BlockText,
  tags: ["autodocs"],
  decorators: [AppUiDecorator]
};
const Basic = {
  args: {
    children: "This is a block of text"
  }
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: '{\n  args: {\n    children: "This is a block of text"\n  }\n}',
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
