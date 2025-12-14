/**
 * Port interface for writing ValuePropositionRemovedEvent events.
 * Infrastructure layer will implement this with FsEventStore.
 */

import { ValuePropositionRemovedEvent } from "../../../../domain/project-knowledge/value-propositions/remove/ValuePropositionRemovedEvent.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { AppendResult } from "../../../shared/persistence/IEventStore.js";

export interface IValuePropositionRemovedEventWriter {
  /**
   * Appends a ValuePropositionRemovedEvent event to the event store.
   */
  append(event: ValuePropositionRemovedEvent): Promise<AppendResult>;

  /**
   * Reads all events for a value proposition aggregate.
   */
  readStream(aggregateId: string): Promise<BaseEvent[]>;
}
