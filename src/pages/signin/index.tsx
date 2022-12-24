import { Button, Form, Input, Typography } from 'antd'
import * as S from './styles'

const { Title, Text } = Typography

export default function Signin() {
  const onFinish = (values: unknown) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: unknown) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <S.Wrapper>
      <S.InfoContent>
        <S.Illustration
          src="/img/signin/illustration.png"
          alt="Imagem de um átomo e React Avançado escrito ao lado."
        />
      </S.InfoContent>
      <S.FormContent>
        <S.Container>
          <S.Logo src="/img/logo.svg"></S.Logo>
          <Title level={3}>Bem-vindo, novamente!</Title>
          <Text
            type="secondary"
            style={{ marginBottom: '4rem', fontSize: '1.25rem' }}
          >
            Por favor, insira seu e-mail e senha
          </Text>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            style={{ width: '100%' }}
          >
            <Form.Item
              label="E-mail"
              name="username"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                style={{ width: '100%' }}
                type="primary"
                htmlType="submit"
              >
                Entrar
              </Button>
            </Form.Item>
          </Form>
        </S.Container>
      </S.FormContent>
    </S.Wrapper>
  )
}
