import { IEventHandler } from "../../../shared/messaging/IEventHandler.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { ValuePropositionUpdatedEvent } from "../../../../domain/project-knowledge/value-propositions/update/ValuePropositionUpdatedEvent.js";
import { IValuePropositionUpdatedProjector } from "./IValuePropositionUpdatedProjector.js";

/**
 * Event handler for ValuePropositionUpdatedEvent event.
 *
 * Application layer handler that orchestrates projection updates
 * when a value proposition is updated. Subscribes to ValuePropositionUpdatedEvent via event bus.
 */
export class ValuePropositionUpdatedEventHandler implements IEventHandler {
  constructor(private readonly projector: IValuePropositionUpdatedProjector) {}

  async handle(event: BaseEvent): Promise<void> {
    const valuePropositionUpdatedEvent = event as ValuePropositionUpdatedEvent;
    await this.projector.applyValuePropositionUpdated(valuePropositionUpdatedEvent);
  }
}
