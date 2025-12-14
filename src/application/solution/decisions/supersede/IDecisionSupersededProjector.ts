/**
 * Port interface for projecting DecisionSuperseded events.
 * Infrastructure layer will implement this.
 */

import { DecisionSupersededEvent } from "../../../../domain/solution/decisions/supersede/DecisionSupersededEvent.js";

export interface IDecisionSupersededProjector {
  /**
   * Applies a DecisionSuperseded event to update the materialized view.
   */
  applyDecisionSuperseded(event: DecisionSupersededEvent): Promise<void>;
}
