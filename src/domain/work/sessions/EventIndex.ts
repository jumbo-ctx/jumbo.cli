export * from "./start/SessionStartedEvent.js";
export * from "./pause/SessionPausedEvent.js";
export * from "./resume/SessionResumedEvent.js";
export * from "./end/SessionEndedEvent.js";

import { SessionStartedEvent } from "./start/SessionStartedEvent.js";
import { SessionPausedEvent } from "./pause/SessionPausedEvent.js";
import { SessionResumedEvent } from "./resume/SessionResumedEvent.js";
import { SessionEndedEvent } from "./end/SessionEndedEvent.js";

// Union type will expand as we add more events
export type SessionEvent = SessionStartedEvent | SessionPausedEvent | SessionResumedEvent | SessionEndedEvent;
