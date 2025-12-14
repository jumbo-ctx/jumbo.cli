/**
 * DecisionReversed Event
 *
 * Emitted when a decision is reversed.
 * Marks the decision as no longer applicable with a reason for reversal.
 */

import { BaseEvent } from "../../../shared/BaseEvent.js";
import { ISO8601 } from "../../../shared/BaseEvent.js";

export interface DecisionReversedEvent extends BaseEvent {
  readonly type: "DecisionReversedEvent";
  readonly payload: {
    readonly reason: string;
    readonly reversedAt: ISO8601;
  };
}
