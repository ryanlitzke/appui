import { j as jsxRuntimeExports } from "./iframe-Ce3lap89.js";
import { u as useMDXComponents, M as Meta, S as Story2 } from "./blocks-B-Y4VgmS.js";
import { s as stories, B as Basic } from "./useIsBackstageOpen.stories-BZkcwvs6.js";
import "./preload-helper-UZRgTS1n.js";
import "./index-CZZ7UcJw.js";
import "./appui-react-B_TRJJtR.js";
import "./Key.enum-CAMwd35F.js";
import "./client-8VfxnKhi.js";
import "./AppUiStory-KozsSOvS.js";
import "./Utils-SQTvEgLl.js";
import "./BackstageComposer-BVjV1-76.js";
import "./BackstageAppButton-JZJ4Adcx.js";
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
