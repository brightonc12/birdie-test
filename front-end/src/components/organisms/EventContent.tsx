import * as React from 'react';
import EventTimeline from '@App/components/organisms/EventTimeline';

interface EventContentProps {
}

interface EventContentState {
}

export default class EventContent extends React.Component<EventContentProps, EventContentState> {
    public render() {
        return (
            <>
                <EventTimeline/>
            </>
        );
    }
}