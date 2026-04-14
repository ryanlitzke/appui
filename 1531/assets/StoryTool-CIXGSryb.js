import { q as PrimitiveTool } from "./appui-react-Bx_h5hps.js";
import "./Key.enum-CwPD4czx.js";
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
