import { createReducer, on } from "@ngrx/store";
import { AppState } from "./Store.state";
import { event_action } from "./Store.action";

export const event:AppState[]=[];
export const _event_reducer = createReducer(event,on(event_action,(state,action)=>{
    return {
        ...state,
        id:action.value
    }
}))
export function event_reducer(state:any,action:any){
    return _event_reducer(state,action)
}