/**
 * DecisionSuperseded Event
 *
 * Emitted when a decision is superseded by another decision.
 * Marks the decision as no longer applicable because it has been replaced.
 */

import { BaseEvent, UUID } from "../../../shared/BaseEvent.js";

export interface DecisionSupersededEvent extends BaseEvent {
  readonly type: "DecisionSupersededEvent";
  readonly payload: {
    readonly supersededBy: UUID;
  };
}
