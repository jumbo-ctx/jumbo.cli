/**
 * Port interface for projecting ValuePropositionRemovedEvent events.
 * Infrastructure layer will implement this.
 */

import { ValuePropositionRemovedEvent } from "../../../../domain/project-knowledge/value-propositions/remove/ValuePropositionRemovedEvent.js";

export interface IValuePropositionRemovedProjector {
  /**
   * Applies a ValuePropositionRemovedEvent event to update the materialized view.
   */
  applyValuePropositionRemoved(event: ValuePropositionRemovedEvent): Promise<void>;
}
