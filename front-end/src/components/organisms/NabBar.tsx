import * as React from 'react';
import styled from 'styled-components';
import Logo from "../atoms/Logo";

import LogoUrl from '../../assets/images/logo-birdie.svg';

interface NavBarProps {
}

interface NavBarState {
}

const HeaderContainer = styled.div`
    margin: 1rem 0;
`;

export default class NabBar extends React.Component<NavBarProps, NavBarState> {

    public render() {
        return (
            <HeaderContainer>
                <Logo src={LogoUrl}/>
            </HeaderContainer>
        );
    }

}