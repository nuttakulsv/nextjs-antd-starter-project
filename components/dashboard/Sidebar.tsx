'use client';

import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  BarChartOutlined,
  TeamOutlined,
  FileOutlined
} from '@ant-design/icons';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const { Sider } = Layout;
const { Text } = Typography;

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    {
      key: 'main',
      type: 'group',
      label: 'Main',
      children: [
        {
          key: '/dashboard',
          icon: <DashboardOutlined />,
          label: 'Dashboard',
        },
        {
          key: '/dashboard/analytics',
          icon: <BarChartOutlined />,
          label: 'Analytics',
        }
      ]
    },
    {
      key: 'management',
      type: 'group',
      label: 'Management',
      children: [
        {
          key: '/dashboard/users',
          icon: <TeamOutlined />,
          label: 'Users',
        },
        {
          key: '/dashboard/products',
          icon: <ShoppingOutlined />,
          label: 'Products',
        },
        {
          key: '/dashboard/orders',
          icon: <FileOutlined />,
          label: 'Orders',
        }
      ]
    },
    {
      key: 'system',
      type: 'group',
      label: 'System',
      children: [
        {
          key: '/dashboard/settings',
          icon: <SettingOutlined />,
          label: 'Settings',
        },
        {
          key: '/login',
          icon: <LogoutOutlined />,
          label: 'Logout',
          danger: true,
        }
      ]
    }
  ];

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="min-h-screen shadow-lg"
      width={260}
      style={{ background: '#001529' }}
    >
      <div className="flex items-center justify-center p-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <Text className="text-white text-xl font-bold">A</Text>
          </div>
          <Text className="text-white text-xl font-bold">Admin Panel</Text>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[pathname]}
        items={menuItems}
        onClick={({ key }) => router.push(key)}
        className="px-2"
      />
    </Sider>
  );
}