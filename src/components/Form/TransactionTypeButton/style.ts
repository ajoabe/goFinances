import {TouchableOpacity } from "react-native";
import styled,{css} from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/styles/theme";

interface IconsProps{
    type:'up'|'down'
}

interface ContainerProps{
    isActive:boolean;
    type:'up'|'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border-width: ${({ isActive, type }) => isActive ? 0 : 1.5}px;
    border-style: solid;
    border-color: ${theme.colors.text};
    border-radius: 5px;

    ${({ isActive, type, theme }) => isActive && type === 'up' && css`
        background-color: ${theme.colors.success_ligth};
    `};

    ${({ isActive, type, theme }) => isActive && type === 'down' && css`
        background-color: ${theme.colors.attention_ligth};
    `};

    padding: 16px;
`;

export const Title = styled.Text`
     font-family: ${theme.fonts.regular};
     font-size   : ${RFValue(14)}px;
`;

export const Icon = styled(Feather)<IconsProps>`
     font-size   : ${RFValue(24)}px ;
     margin-right: 12px;
     color: ${({type}) => type === 'up' ?  theme.colors.success : theme.colors.attention};
`;
