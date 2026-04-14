import { q as PrimitiveTool } from "./appui-react-C9pNnkoL.js";
import "./Key.enum-DJcBC41F.js";
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
