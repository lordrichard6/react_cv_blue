import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'twin.macro'

import { Variables } from '../../assets/variables'

type values = {
    completed: number,
}

export const ProgressBar = ({ completed }: values) => {
    const containerStyles = {
        height: 10,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: `${Variables.primary}`,
        borderRadius: 'inherit',
        // textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        // fontWeight: 'bold'
    }

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
        </div>
    )
}

