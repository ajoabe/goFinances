import React from 'react';
import { Container,Title } from './style';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    title:String;
}

export function Button({title,...rest}:Props){
    return(
        <Container {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}