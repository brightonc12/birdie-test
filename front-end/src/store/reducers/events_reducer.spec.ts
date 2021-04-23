
import {initialState, events, FetchEventAction} from './events';
import {getEvents} from "../actions/events";

describe('Event reducer', () => {

    it('should handle request to fetch events', () => {
        expect(events(initialState, getEvents())).toEqual({
            ...initialState,
            loading: true,
        });
    });

    it('should return the initial state', () => {
        expect(events(undefined, {} as FetchEventAction )).toEqual(initialState);
    });
})