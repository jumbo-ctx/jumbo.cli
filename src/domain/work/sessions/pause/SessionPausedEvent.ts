import { BaseEvent } from "../../../shared/BaseEvent.js";

/**
 * Emitted when a session is paused.
 * Session can be resumed later with SessionResumed.
 */
export interface SessionPausedEvent extends BaseEvent {
  readonly type: "SessionPausedEvent";
  readonly payload: {
    // Minimal payload - status transition only
  };
}
