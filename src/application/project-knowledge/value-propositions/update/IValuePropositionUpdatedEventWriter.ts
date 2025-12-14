/**
 * Port interface for writing ValuePropositionUpdatedEvent events.
 * Infrastructure layer will implement this with FsEventStore.
 */

import { ValuePropositionUpdatedEvent } from "../../../../domain/project-knowledge/value-propositions/update/ValuePropositionUpdatedEvent.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { AppendResult } from "../../../shared/persistence/IEventStore.js";

export interface IValuePropositionUpdatedEventWriter {
  /**
   * Appends a ValuePropositionUpdatedEvent event to the event store.
   */
  append(event: ValuePropositionUpdatedEvent): Promise<AppendResult>;

  /**
   * Reads all events for a value proposition aggregate.
   */
  readStream(aggregateId: string): Promise<BaseEvent[]>;
}
