import { j as jsxRuntimeExports } from "./iframe-CnbeMqQc.js";
import { useMDXComponents } from "./index-CL-ijAl3.js";
import { M as Meta, S as Story2 } from "./blocks-BDwa3qrd.js";
import { s as stories, B as Basic } from "./useIsBackstageOpen.stories-C6U0nPYg.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-CRlEezGS.js";
import "./appui-react-Bx_h5hps.js";
import "./Key.enum-CwPD4czx.js";
import "./client-CZPszfDx.js";
import "./AppUiStory-BevyKRRN.js";
import "./Utils-C1H4lPTn.js";
import "./BackstageComposer-Cj36oH_D.js";
import "./BackstageAppButton-vdFcXr9D.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      of: stories
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "useisbackstageopen",
      children: "useIsBackstageOpen"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "React hook that returns whether the backstage is open."
    }), "\n", jsxRuntimeExports.jsx(Story2, {
      of: Basic
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
