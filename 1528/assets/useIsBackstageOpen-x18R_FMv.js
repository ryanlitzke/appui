import { j as jsxRuntimeExports } from "./iframe-Bz2NxXXs.js";
import { useMDXComponents } from "./index-DrYvRbfU.js";
import { M as Meta, S as Story2 } from "./blocks-BL10zoPt.js";
import { s as stories, B as Basic } from "./useIsBackstageOpen.stories-IRRosbN0.js";
import "./preload-helper-UZRgTS1n.js";
import "./appui-react-B4mSoiHm.js";
import "./Key.enum-Cwm_wx_0.js";
import "./client-BS1X1g9q.js";
import "./AppUiStory-BcagHwjv.js";
import "./Utils-_PFe3XaQ.js";
import "./BackstageComposer-D1qOjt4R.js";
import "./BackstageAppButton-C4WDE4ed.js";
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
