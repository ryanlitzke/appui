import { q as PrimitiveTool } from "./appui-react-DrXaB080.js";
import "./Key.enum-BUNZu1c6.js";
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
