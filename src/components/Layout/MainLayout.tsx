import React, { useEffect, useState } from 'react'
import { HomeOutlined, NotificationOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Layout, theme } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LoadingPage from 'components/LoadingPage'
import * as S from './styles'
import Link from 'next/link'

const { Header, Content, Footer } = Layout

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(true)
  const [pathname, setPathname] = useState('/')
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  const { status } = useSession()
  const router = useRouter()

  const items = [
    {
      label: 'Dashboard',
      key: '/',
      icon: <HomeOutlined />,
      route: '/'
    },
    {
      label: 'Insights do Guru',
      key: 'notifications',
      icon: <NotificationOutlined />,
      route: '/notifications'
    }
  ]

  useEffect(() => {
    setPathname(router.pathname)
  }, [router.pathname])

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin')
  }, [status, router])

  if (status === 'authenticated')
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {/* MENU LATERAL */}
        <S.SideMenu
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <S.Logo src="/img/logo.svg" alt="logo do guru" />
          <S.SideMenuItems
            theme="dark"
            defaultSelectedKeys={[pathname]}
            mode="inline"
          >
            {items.map((item) => {
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link href={item.route}>
                    <span>{item.label}</span>
                  </Link>
                </Menu.Item>
              )
            })}
          </S.SideMenuItems>
        </S.SideMenu>
        {/* CONTEUDO PRINCIPAL */}
        <Layout className="site-layout">
          {/* CABEÇALHO */}
          <Header style={{ padding: 0, background: colorBgContainer }} />
          {/* CONTEUDO DA PÁGINA */}
          <Content style={{ paddingTop: '2rem', margin: '0 16px' }}>
            {children}
          </Content>
          {/* RODAPÉ */}
          <Footer style={{ textAlign: 'center' }}>
            Gurufy ©2023 Created by C3C Software
          </Footer>
        </Layout>
      </Layout>
    )

  return <LoadingPage />
}
