import { SessionEndedEvent } from "../../../../domain/work/sessions/end/SessionEndedEvent.js";

/**
 * Port interface for projecting SessionEndedEvent event to the read model.
 * Used by SessionEndedEventHandler to update the projection store.
 */
export interface ISessionEndedProjector {
  applySessionEnded(event: SessionEndedEvent): Promise<void>;
}
