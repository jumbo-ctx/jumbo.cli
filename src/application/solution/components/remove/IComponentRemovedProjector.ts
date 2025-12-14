import { ComponentRemovedEvent } from "../../../../domain/solution/components/remove/ComponentRemovedEvent.js";

export interface IComponentRemovedProjector {
  applyComponentRemoved(event: ComponentRemovedEvent): Promise<void>;
}
