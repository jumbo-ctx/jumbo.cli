import { ComponentAddedEvent } from "../../../../domain/solution/components/add/ComponentAddedEvent.js";
import { ComponentUpdatedEvent } from "../../../../domain/solution/components/update/ComponentUpdatedEvent.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { AppendResult } from "../../../shared/persistence/IEventStore.js";

export interface IComponentAddedEventWriter {
  append(event: ComponentAddedEvent | ComponentUpdatedEvent): Promise<AppendResult>;
  readStream(aggregateId: string): Promise<BaseEvent[]>;
}
