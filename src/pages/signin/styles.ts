import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #f5f6f7;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: rgb(35, 11, 92);
  background: linear-gradient(
    180deg,
    rgba(35, 11, 92, 1) 0%,
    rgba(9, 9, 121, 1) 30%,
    rgba(206, 20, 89, 1) 100%
  );
  color: white;
`

export const InfoContent = styled.article`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.article`
  background-color: #f5f6f7;
  -webkit-box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
  box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`
export const Title = styled.h1`
  font-size: 2.5rem;
`
export const Description = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`
export const Illustration = styled.img`
  margin-top: 3rem;
  width: 60%;
`
