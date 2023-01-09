import { useEffect, useState } from 'react'
import { HomeOutlined, NotificationOutlined } from '@ant-design/icons'

import * as S from './styles'
import { MenuProps } from 'antd'
import { useRouter } from 'next/router'

export default function Sider() {
  const router = useRouter()

  const [collapsed, setCollapsed] = useState(true)
  const [pathname, setPathname] = useState('/')

  useEffect(() => {
    setPathname(router.pathname)
  }, [router])

  const items: MenuProps['items'] = [
    {
      label: 'Dashboard',
      key: '/',
      icon: <HomeOutlined />,
      onClick: () => router.push('/')
    },
    {
      label: 'Insights do Guru',
      key: 'notifications',
      icon: <NotificationOutlined />,
      onClick: () => router.push('/notifications')
    }
  ]

  return (
    <S.SideMenu
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <S.Logo src="/img/logo.svg" alt="logo do guru" />
      <S.SideMenuItems
        items={items}
        theme="dark"
        defaultSelectedKeys={[pathname]}
        mode="inline"
      />
    </S.SideMenu>
  )
}
