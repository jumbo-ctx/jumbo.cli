import { ComponentUpdatedEvent } from "../../../../domain/solution/components/update/ComponentUpdatedEvent.js";

export interface IComponentUpdatedProjector {
  applyComponentUpdated(event: ComponentUpdatedEvent): Promise<void>;
}
