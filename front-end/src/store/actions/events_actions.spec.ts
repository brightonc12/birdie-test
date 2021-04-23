import * as types from '../types'
import * as eventAction from './events'

describe('Event Action', () => {

    it('should dispatch a request to fetch events', () => {
        const expectedAction = {
            type: types.GET_EVENTS_REQUEST,
        };
        expect(eventAction.getEvents()).toEqual(expectedAction);
    });
})