import { BaseEvent } from "../../../shared/BaseEvent.js";

/**
 * Emitted when a session is ended.
 * Captures the final focus/summary of work accomplished.
 */
export interface SessionEndedEvent extends BaseEvent {
  readonly type: "SessionEndedEvent";
  readonly payload: {
    readonly focus: string;
    readonly summary: string | null;
  };
}
