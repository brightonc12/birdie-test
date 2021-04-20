import * as React from 'react';
import styled from 'styled-components';

interface SelectionViewHeaderProps {
}

interface SelectionViewHeaderState {
}

const Container = styled.section`
  background-color: beige;
  min-height: 30px;
`;

export default class SelectionViewHeader extends React.Component<SelectionViewHeaderProps, SelectionViewHeaderState> {

    public render() {
        return (
            <Container>
                Hello there
            </Container>
        );
    }
}