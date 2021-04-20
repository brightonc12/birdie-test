import * as React from 'react';
import EventTableView from '@App/components/molecules/EventTableView';
import SelectionViewHeader from '@App/components/molecules/SelectionViewHeader';
import EventGraphView from '@App/components/molecules/EventGraphView';

interface EventContentProps {
}

interface EventContentState {
}

export default class EventContent extends React.Component<EventContentProps, EventContentState> {
    public render() {
        return (
            <>
                <SelectionViewHeader/>
                <EventGraphView/>
                <EventTableView/>
            </>
        );
    }
}