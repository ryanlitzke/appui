import { j as jsxRuntimeExports } from "./iframe-C98IYynM.js";
import { u as useMDXComponents, M as Meta, S as Story2 } from "./blocks-DPaSgVyl.js";
import { s as stories, B as Basic } from "./useIsBackstageOpen.stories-C56LhC5x.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-DECez0rJ.js";
import "./appui-react-C9pNnkoL.js";
import "./Key.enum-DJcBC41F.js";
import "./client-D2bt15K3.js";
import "./AppUiStory-KPYTkHF8.js";
import "./Utils-DelqliFu.js";
import "./BackstageComposer-KFfG09gJ.js";
import "./BackstageAppButton-SCxEiGMc.js";
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
