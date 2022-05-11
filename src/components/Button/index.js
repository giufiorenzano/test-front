import React from 'react'
import { ContainerButton } from './styles'

export const Button = (props) => {
  return <ContainerButton onClick={props.onClick}>{props.title}</ContainerButton>
}
