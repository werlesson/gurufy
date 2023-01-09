import styled from 'styled-components'

export const Wrapper = styled.main`
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

export const InfoContent = styled.section`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  -webkit-box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
  -moz-box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
  box-shadow: -12px 0px 10px 0px rgba(0, 0, 0, 0.18);
`

export const Container = styled.article`
  width: 50%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  width: 75px;
  margin-bottom: 2rem;
  border-radius: 50%;
  border: 1px solid #e7ecf4;
  padding: 8px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`
export const Title = styled.h1`
  font-size: 2.5rem;
`
export const Description = styled.h3`
  font-size: 2rem;
  font-weight: 400;
`
export const Illustration = styled.img`
  width: 80%;
`
