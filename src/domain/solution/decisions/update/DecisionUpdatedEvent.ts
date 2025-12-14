/**
 * DecisionUpdated Event
 *
 * Emitted when a decision's properties are updated.
 */

import { BaseEvent } from "../../../shared/BaseEvent.js";

export interface DecisionUpdatedEvent extends BaseEvent {
  readonly type: "DecisionUpdatedEvent";
  readonly payload: {
    readonly title?: string;
    readonly context?: string;
    readonly rationale?: string;
    readonly alternatives?: string[];
    readonly consequences?: string;
  };
}
