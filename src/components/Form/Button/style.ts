import 'react-native-gesture-handler';
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../global/styles/theme";


export const Container = styled(RectButton)`
    width: 100%;
    background-color: ${theme.colors.secondary};
    border-radius:5px;
    align-items: center;
    justify-content: center;
    padding: 18px;
`;
export const Title = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${theme.fonts.medium};
    color: ${theme.colors.shape};
    
`;