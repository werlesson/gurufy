import { Avatar, Dropdown, MenuProps } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'

import * as S from './styles'
import { signOut } from 'next-auth/react'

export default function Header() {
  const itemsMenuUser: MenuProps['items'] = [
    {
      label: 'Sair',
      key: 'logout',
      icon: <LogoutOutlined />,
      onClick: () => signOut()
    }
  ]

  return (
    <S.HeaderPage>
      <Dropdown menu={{ items: itemsMenuUser }} placement="bottomRight" arrow>
        <Avatar size={40} icon={<UserOutlined />} />
      </Dropdown>
    </S.HeaderPage>
  )
}
