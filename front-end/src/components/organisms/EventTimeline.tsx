import * as React from 'react';
import styled from 'styled-components';
import TimelineCard from '../molecules/TimelineCard';

export interface Event {
    id: string;
    eventType: string;
    mood: string;
    timestamp: string;
    notes: string;
}

const data: Event[] = Array.from(Array(50)).map((_, index) => {
    return {
        id: `${index + 1}`,
        eventType: 'mood',
        mood: 'Happy',
        timestamp: new Date().toISOString(),
        notes: 'some notes here',
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
                {data.map((event: Event) => <TimelineCard key={event.id} event={event}/>)}
            </TimelineWrapper>
        );
    }
}