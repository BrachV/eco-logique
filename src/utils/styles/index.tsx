import React from 'react';
import styled from 'styled-components';

type FlexProps = Partial<{
    alignItems: string;
    justifyContent: string;
    flexDirection: string;
}>
export const Flex = styled.View<FlexProps>`
    display: flex;
    align-items: ${({alignItems}) => alignItems};
    justify-content: ${({justifyContent}) => justifyContent};
    flex-direction: ${({flexDirection}) => flexDirection};
`
export const Title = styled.Text`
  color: #000;
  text-align: center;
  font-size: 16px;
`;