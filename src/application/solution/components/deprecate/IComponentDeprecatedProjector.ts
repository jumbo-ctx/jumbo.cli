import { ComponentDeprecatedEvent } from "../../../../domain/solution/components/deprecate/ComponentDeprecatedEvent.js";

export interface IComponentDeprecatedProjector {
  applyComponentDeprecated(event: ComponentDeprecatedEvent): Promise<void>;
}
