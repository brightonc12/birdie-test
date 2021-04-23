import {all, call, put, takeEvery} from 'redux-saga/effects'
import {Pagination} from "../../entities/event";
import axios from "axios";
import * as types from "../types";


const apiUrl = 'https://birdie-test-be.herokuapp.com/v1/events?size=50&page=1'

async function getEvents(): Promise<Pagination<Event>> {
    try {
        const res = await axios.get(apiUrl)
        return (res.data as Pagination<Event>)
    } catch (e) {
        throw e
    }
}


function* fetchEvents() {
    try {
        // @ts-ignore
        const result = yield call(getEvents)
        yield  put({type: types.GET_EVENTS_SUCCESS, payload: result})
    } catch (e) {
        yield  put({type: types.GET_EVENTS_FAILED, payload:  'Failed to load content'})
    }
}


function* eventSaga() {
    yield takeEvery(types.GET_EVENTS_REQUEST, fetchEvents);
}

export default function* rootSaga() {
    yield all([eventSaga()])
}