import { Layout, Menu } from 'antd'
import styled from 'styled-components'

const { Sider } = Layout

export const SideMenu = styled(Sider)`
  background: #230b5c !important;
  .ant-layout-sider-trigger {
    background: #1a0844 !important;
    border-radius: 0 0 1rem 0;
  }
`

export const Logo = styled.img`
  width: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
`

export const SideMenuItems = styled(Menu)`
  background: #230b5c !important;
  .ant-menu-item-selected,
  .ant-menu-item-selected:active {
    background: #ce1459 !important;
  }
`
