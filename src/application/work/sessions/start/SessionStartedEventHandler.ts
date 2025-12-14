import { IEventHandler } from "../../../shared/messaging/IEventHandler.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { SessionStartedEvent } from "../../../../domain/work/sessions/start/SessionStartedEvent.js";
import { ISessionStartedProjector } from "./ISessionStartedProjector.js";

/**
 * Event handler for SessionStartedEvent event.
 *
 * Application layer handler that orchestrates projection updates
 * when a session is started. Subscribes to SessionStartedEvent via event bus.
 */
export class SessionStartedEventHandler implements IEventHandler {
  constructor(private readonly projector: ISessionStartedProjector) {}

  async handle(event: BaseEvent): Promise<void> {
    const sessionStartedEvent = event as SessionStartedEvent;
    await this.projector.applySessionStarted(sessionStartedEvent);
  }
}
