import { AudienceAddedEvent } from "../../../../domain/project-knowledge/audiences/add/AudienceAddedEvent.js";

/**
 * Port interface for projecting AudienceAddedEvent events to the read model.
 * Used by AudienceAddedEventHandler to update the projection store.
 */
export interface IAudienceAddedProjector {
  applyAudienceAdded(event: AudienceAddedEvent): Promise<void>;
}
