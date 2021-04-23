import * as React from 'react';
import styled from 'styled-components';
import TimelineCard from '../molecules/TimelineCard';

import {Event} from '../../entities/event'



export const eventData: Event[] = Array.from(Array(50)).map((_, index) => {

    return {
        id: `${index + 1}`,
        eventType: 'mood',
        taskInstanceId: 'shole20js',
        visitId: 'sk2k23',
        medicationFailureReason: 'Happy',
        caregiverId: 'skj329dihj3',
        careRecipientId: 'sfj2jd',
        timestamp: new Date().toISOString(),
        note: 'some notes here',
    };

});

interface EventTimelineProps {
}

interface EventTimelineState {
}

const TimelineWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: start;
  gap: 10px;
  flex-wrap: wrap;
`;

export default class EventTimeline extends React.Component<EventTimelineProps, EventTimelineState> {
    public render() {
        return (
            <TimelineWrapper>
                {eventData.map((event: Event) => <TimelineCard key={event.id} event={event}/>)}
            </TimelineWrapper>
        );
    }
}