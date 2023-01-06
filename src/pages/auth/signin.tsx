import { Button, Form, Input, Typography } from 'antd'
import * as S from './styles'
import { signIn } from 'next-auth/react'
import { FormEventHandler, useState } from 'react'

const { Title, Text } = Typography

export default function Signin() {
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    // e.preventDefault()

    console.log('E', e)

    const res = await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    })

    console.log(res)
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
          {/* onFinish={onFinish}
          onFinishFailed={onFinishFailed} */}
          <Form
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
            layout="vertical"
            style={{ width: '100%' }}
            onFinish={handleSubmit}
          >
            <Form.Item
              label="E-mail"
              name="username"
              rules={[{ message: 'Please input your username!' }]}
            >
              <Input
                value={userInfo.email}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, email: target.value })
                }
              />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[{ message: 'Please input your password!' }]}
            >
              <Input.Password
                value={userInfo.password}
                onChange={({ target }) =>
                  setUserInfo({ ...userInfo, password: target.value })
                }
              />
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
