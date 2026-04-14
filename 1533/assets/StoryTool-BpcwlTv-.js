import { q as PrimitiveTool } from "./appui-react-B_TRJJtR.js";
import "./Key.enum-CAMwd35F.js";
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
