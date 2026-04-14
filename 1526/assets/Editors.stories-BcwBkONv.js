import { j as jsxRuntimeExports } from "./iframe-C44dtwpp.js";
import "./Key.enum-BUNZu1c6.js";
import "./appui-react-DrXaB080.js";
import { E as EditorExampleComponent, A as AppUiStory } from "./AppUiStory-Dv2AMiFe.js";
import "./preload-helper-UZRgTS1n.js";
import "./client-DEiTaiZs.js";
import "./blocks-C0eIL-Xx.js";
import "./Utils-CbLA3Um4.js";
const meta = {
  title: "Components/Editors",
  component: EditorExampleComponent,
  tags: ["autodocs"]
};
const Basic = {
  render: () => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AppUiStory, { displayChildrenOnly: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      padding: 20,
      position: "relative"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(EditorExampleComponent, {}) }) });
  }
};
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: '{\n  render: () => {\n    return <AppUiStory displayChildrenOnly>\n        <div style={{\n        padding: 20,\n        position: "relative"\n      }}>\n          <EditorExampleComponent />\n        </div>\n      </AppUiStory>;\n  }\n}',
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
