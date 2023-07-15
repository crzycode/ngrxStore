import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./Store.state";
import { state } from "@angular/animations";

const event = createFeatureSelector<AppState>('event')

export const event_selector = createSelector(event,state =>{
    return state.id
})