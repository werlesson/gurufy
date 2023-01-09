import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LoadingPage from 'components/LoadingPage'
import Sider from './Sider'
import Header from './Header'
import Footer from './Footer'

const { Content } = Layout

interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props) {
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/auth/signin')
  }, [status, router])

  if (status === 'authenticated')
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout className="site-layout">
          <Header />
          <Content style={{ paddingTop: '2rem', margin: '0 16px' }}>
            {children}
          </Content>
          <Footer />
        </Layout>
      </Layout>
    )

  return <LoadingPage />
}
