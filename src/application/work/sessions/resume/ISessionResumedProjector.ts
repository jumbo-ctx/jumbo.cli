import { SessionResumedEvent } from "../../../../domain/work/sessions/resume/SessionResumedEvent.js";

/**
 * Port interface for projecting SessionResumedEvent event to the read model.
 * Used by SessionResumedEventHandler to update the projection store.
 */
export interface ISessionResumedProjector {
  applySessionResumed(event: SessionResumedEvent): Promise<void>;
}
