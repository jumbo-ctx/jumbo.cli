export * from "./add/RelationAddedEvent.js";
export * from "./remove/RelationRemovedEvent.js";

import { RelationAddedEvent } from "./add/RelationAddedEvent.js";
import { RelationRemovedEvent } from "./remove/RelationRemovedEvent.js";

// Union type will expand as we add more events
export type RelationEvent = RelationAddedEvent | RelationRemovedEvent;
