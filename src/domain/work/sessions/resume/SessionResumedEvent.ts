import { BaseEvent } from "../../../shared/BaseEvent.js";

/**
 * Emitted when a paused session is resumed.
 * Session transitions from 'paused' to 'active' status.
 */
export interface SessionResumedEvent extends BaseEvent {
  readonly type: "SessionResumedEvent";
  readonly payload: {
    // Minimal payload - status transition only
  };
}
