
export class CircuitVisualization {
  constructor(workspace) {
    /**
     * The workspace.
     * @type {!Blockly.WorkspaceSvg}
     * @private
     */
    this.workspace_ = workspace;
  }

  /**
   * Initializes the workspace circuit visualization.
   */
  init() {
    createRobot_();
  }

  /**
   * Creates and injects the robot board
   * @protected
   */
  createRobot_(){

  }
}