/**
 * Port interface for writing ValuePropositionAddedEvent events.
 * Infrastructure layer will implement this with FsEventStore.
 */

import { ValuePropositionAddedEvent } from "../../../../domain/project-knowledge/value-propositions/add/ValuePropositionAddedEvent.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { AppendResult } from "../../../shared/persistence/IEventStore.js";

export interface IValuePropositionAddedEventWriter {
  /**
   * Appends a ValuePropositionAddedEvent event to the event store.
   */
  append(event: ValuePropositionAddedEvent): Promise<AppendResult>;

  /**
   * Reads all events for a value proposition aggregate.
   */
  readStream(aggregateId: string): Promise<BaseEvent[]>;
}
