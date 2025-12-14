import { IEventHandler } from "../../../shared/messaging/IEventHandler.js";
import { BaseEvent } from "../../../../domain/shared/BaseEvent.js";
import { SessionPausedEvent } from "../../../../domain/work/sessions/pause/SessionPausedEvent.js";
import { ISessionPausedProjector } from "./ISessionPausedProjector.js";

/**
 * Event handler for SessionPausedEvent event.
 *
 * Application layer handler that orchestrates projection updates
 * when a session is paused. Subscribes to SessionPausedEvent via event bus.
 */
export class SessionPausedEventHandler implements IEventHandler {
  constructor(private readonly projector: ISessionPausedProjector) {}

  async handle(event: BaseEvent): Promise<void> {
    const sessionPausedEvent = event as SessionPausedEvent;
    await this.projector.applySessionPaused(sessionPausedEvent);
  }
}
