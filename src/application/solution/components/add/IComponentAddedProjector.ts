import { ComponentAddedEvent } from "../../../../domain/solution/components/add/ComponentAddedEvent.js";

export interface IComponentAddedProjector {
  applyComponentAdded(event: ComponentAddedEvent): Promise<void>;
}
