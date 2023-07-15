import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { event_reducer } from "./Store.reducer";

export interface event{
    id:any;
} 

export interface AppState{
    id:event
}

