import { j as jsxRuntimeExports } from "./iframe-C44dtwpp.js";
import { useMDXComponents } from "./index-RtaIH9Pt.js";
import { M as Meta, S as Story2 } from "./blocks-C0eIL-Xx.js";
import { s as stories, B as Basic } from "./useIsBackstageOpen.stories-Cz45QyYo.js";
import "./preload-helper-UZRgTS1n.js";
import "./appui-react-DrXaB080.js";
import "./Key.enum-BUNZu1c6.js";
import "./client-DEiTaiZs.js";
import "./AppUiStory-Dv2AMiFe.js";
import "./Utils-CbLA3Um4.js";
import "./BackstageComposer-DpS1ZnQm.js";
import "./BackstageAppButton-DwgE3WLo.js";
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
