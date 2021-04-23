import {Event} from "../entities/event";

export const GET_EVENTS = 'GET_EVENTS'
export const GET_EVENTS_REQUEST = 'GET_EVENTS_REQUEST'
export const GET_EVENTS_SUCCESS = 'GET_EVENTS_SUCCESS'
export const GET_EVENTS_FAILED = 'GET_EVENTS_FAILED'


export interface IEventState {
    events: Event[],
    loading: boolean,
    error: string
}

export interface IState {
    events: IEventState
}