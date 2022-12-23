import * as S from './styles'

export default function Signin() {
  return (
    <S.Wrapper>
      <S.InfoContent>
        <S.Title>Não sabe por onde começar a escalar seu negócio?</S.Title>
        <S.Description>
          Que tal se através do seus dados nós pudéssemos te ajudar?
        </S.Description>
        <S.Illustration
          src="/img/signin/illustration.png"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </S.InfoContent>
      <S.FormContent></S.FormContent>
    </S.Wrapper>
  )
}
