import styled from 'styled-components'

export const Button = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background-color: transparent;
border: 0.05rem solid var(--lightBlue);
border-color: ${props=>props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
color:${props=>props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: .5s;
&:hover{
  background: ${props=>props.cart ? "var(--mainYellow)":"var(--lightBlue)"};
  color: var(--mainBlue)
}
`