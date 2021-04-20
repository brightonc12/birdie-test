import * as React from 'react';
import Logo from '@App/components/atoms/Logo';
import styled from 'styled-components';

const LogoUrl = require('../../assets/images/logo-birdie.svg');

interface AppHeaderProps {
}

interface AppHeaderState {
}

const HeaderContainer = styled.div`

`;

export default class AppHeader extends React.Component<AppHeaderProps, AppHeaderState> {

    public render() {
        return (
            <HeaderContainer>
                <Logo src={LogoUrl}/>
            </HeaderContainer>
        );
    }

}