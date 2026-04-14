import { q as PrimitiveTool } from "./appui-react-B4mSoiHm.js";
import "./Key.enum-Cwm_wx_0.js";
class StoryPrimitiveTool extends PrimitiveTool {
  requireWriteableTarget() {
    return false;
  }
  onRestartTool() {
    return this.exitTool();
  }
}
export {
  StoryPrimitiveTool as S
};
