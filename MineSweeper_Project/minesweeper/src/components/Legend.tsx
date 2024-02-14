import React, { FC } from 'react'
import styled from '@emotion/styled'

export const LegendComponent: FC = () => (
    <ParentContainer>
        <strong> flag: </strong>
        <FlagComboParent>
            <Key>ctrl</Key>+<Click>click</Click>
        </FlagComboParent>
    </ParentContainer>
)

const FlagComboParent = styled.code`
    background: #e3e3e3;
`
const ParentContainer = styled.legend`
    font-size: 1em;
    margin: 1 auto 2vw;
    line-height: 1.25em;
`

const Key = styled.span`
    color: #ec433c;
`

const Click = styled.span`
    color: #2a48ec;
`
