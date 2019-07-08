import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavLinkWrap = styled(NavLink)`
  padding: 0;
  width: 2.75rem;
  height: 2.75rem;
  position: relative;
  z-index: 1;
  display: inline-block;
  vertical-align: top;
`
export const NavLinkWrap2 = styled(NavLink)`
  display: block;
  text-align: center;
`

export const PWrap = styled.p`
  display: block;
  font-size: 0.875rem;
  line-height: 1.187rem;
  color: #555;
`

export const IWrap = styled.i`
  float: none;
  margin: 0 auto;
  vertical-align: middle;
  line-height: 2rem;
  text-align: center;
  height: 100%;
  opacity: 1;
  background-image: url(http://m.ixingmei.com/images/search_ico.png);
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 70%;
  display: block;
  width: 1.375rem;
`

export const IWrap2 = styled.i`
  display: block;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
`

export const SpanWrap = styled.span`
  display: inline-block;
  width: 3.312rem;
  height: 3.312rem;
  margin: 0 auto 0.412rem auto;
  border-radius: 100%;
`
