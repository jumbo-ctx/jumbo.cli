import { IEventHandler } from "../../../shared/messaging/IEventHandler.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { AudiencePainResolvedEvent } from "../../../../domain/project-knowledge/audience-pains/resolve/AudiencePainResolvedEvent.js";
import { IAudiencePainResolvedProjector } from "./IAudiencePainResolvedProjector.js";

/**
 * Event handler for AudiencePainResolvedEvent event.
 *
 * Application layer handler that orchestrates projection updates
 * when an audience pain is resolved. Subscribes to AudiencePainResolvedEvent via event bus.
 */
export class AudiencePainResolvedEventHandler implements IEventHandler {
  constructor(private readonly projector: IAudiencePainResolvedProjector) {}

  async handle(event: BaseEvent): Promise<void> {
    const audiencePainResolvedEvent = event as AudiencePainResolvedEvent;
    await this.projector.applyAudiencePainResolved(audiencePainResolvedEvent);
  }
}
