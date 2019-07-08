import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavLinkWrap = styled(NavLink)`
  float: left;
  width: 25%;
  box-sizing: border-box;
  color: #555 !important;
`

export const EmWrap = styled.em`
  background-repeat: no-repeat;
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  background-position: 0 0;
  background-size: 100% 100%;
  margin: 0.5rem auto 0;
`

export const SpanWrap = styled.span`
  padding-top: 2px;
  display: block;
  font-size: 0.625rem;
  line-height: 1;
  background-color: #fff;
`
