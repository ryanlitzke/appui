import { j as jsxRuntimeExports } from "./iframe-CnbeMqQc.js";
import { A as AppUiDecorator } from "./Decorators-BImuD1Eg.js";
import { A as AppUiStory, P as Page } from "./AppUiStory-BevyKRRN.js";
import { y as PreviewFeaturesProvider, u as StagePanelState } from "./appui-react-Bx_h5hps.js";
import { c as createFrontstage, a as createWidget } from "./Utils-C1H4lPTn.js";
import "./preload-helper-UZRgTS1n.js";
import "./Key.enum-CwPD4czx.js";
import "./blocks-BDwa3qrd.js";
import "./index-CRlEezGS.js";
import "./client-CZPszfDx.js";
function PreviewStory(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    PreviewFeaturesProvider,
    {
      features: {
        controlWidgetVisibility: true,
        widgetTabActions: true,
        ...props
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        AppUiStory,
        {
          itemProviders: [
            {
              id: "widgets",
              getWidgets: () => {
                return [
                  createWidget(1),
                  createWidget(2),
                  createWidget(3),
                  createWidget(4),
                  createWidget(5)
                ];
              }
            }
          ],
          frontstages: [
            createFrontstage({
              leftPanelProps: {
                defaultState: StagePanelState.Open,
                pinned: true
              }
            })
          ]
        }
      )
    }
  );
}
PreviewStory.__docgenInfo = { "description": "`widgetTabActions` preview feature. Widget tab actions are displayed for individual tabs instead of the default behavior where only active tab actions are exposed.", "methods": [], "displayName": "PreviewStory" };
const meta = {
  title: "PreviewFeatures/WidgetTabActions",
  component: PreviewStory,
  tags: ["autodocs"],
  decorators: [AppUiDecorator],
  parameters: {
    docs: {
      page: () => /* @__PURE__ */ jsxRuntimeExports.jsx(Page, {})
    }
  },
  args: {
    enableMaximizedFloatingWidget: false,
    enableMaximizedPanelWidget: false
  }
};
const Default = {};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...Default.parameters?.docs,
    source: {
      originalSource: "{}",
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
