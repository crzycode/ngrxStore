import { createAction, props } from "@ngrx/store";

export const event_action = createAction('event',props<{value:any}>())
