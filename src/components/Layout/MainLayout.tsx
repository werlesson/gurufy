import React, { useEffect } from 'react'
import { Layout } from 'antd'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import LoadingPage from 'components/LoadingPage'
import Footer from './Structure/Footer'
import Sider from './Structure/Sider'
import Header from './Structure/Header'

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
          <Content>{children}</Content>
          <Footer />
        </Layout>
      </Layout>
    )

  return <LoadingPage />
}
