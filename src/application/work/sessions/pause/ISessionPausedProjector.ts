import { SessionPausedEvent } from "../../../../domain/work/sessions/pause/SessionPausedEvent.js";

/**
 * Port interface for projecting SessionPausedEvent event to the read model.
 * Used by SessionPausedEventHandler to update the projection store.
 */
export interface ISessionPausedProjector {
  applySessionPaused(event: SessionPausedEvent): Promise<void>;
}
