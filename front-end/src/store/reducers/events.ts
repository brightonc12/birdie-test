import * as types from '../types'
import {Event, Pagination} from "../../entities/event";
import {IEventState} from "../types";

export interface FetchEventAction {
    type: string
    payload: Pagination<Event> | string
}


export const initialState: IEventState = {
    events: [],
    loading: false,
    error: ''
}

export function events(state = initialState, action: FetchEventAction) {
    switch (action.type) {
        case types.GET_EVENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: ''
            }
        case types.GET_EVENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                events: (action.payload as Pagination<Event>).data,
            }
        case types.GET_EVENTS_FAILED:
            console.log(action)
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}