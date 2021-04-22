import styled from 'styled-components';
import * as React from 'react';
import { Event } from '../organisms/EventTimeline';

interface TimelineCardProps {
    event: Event;
}

interface TimelineCardState {}

const Container = styled.div`
  background-color: #fff;
  min-height: 30px;
  margin: 1rem;
  padding: 1rem;
  border-radius: .5rem;
  box-shadow: 0 4px 10px rgba(0, 37, 70, .2);
`;

export default class TimelineCard extends React.Component<TimelineCardProps, TimelineCardState> {

    public render() {
        return (
            <Container>
                <h4>{this.props.event.eventType}</h4>
                <h5>{this.props.event.mood}</h5>
                <p>{this.props.event.notes}</p>
                <p>{this.props.event.timestamp}</p>
            </Container>
        );
    }
}