import * as React from 'react';
import EventTable from "./EventTable";
import {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {IState} from "../../store/types";
import {getEvents} from "../../store/actions/events";
import Spinner from "react-spinner";

const EventContent = () => {

    const dispatch = useDispatch()
    const events = useSelector((state: IState) => state.events.events)
    const loading = useSelector((state: IState) => state.events.loading)
    const error = useSelector((state: IState) => state.events.error)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <>
            {events && <EventTable events={events}/>}
            {loading && <Spinner/>}
            {error && <p>{error}</p>}
        </>
    );
}

export default EventContent