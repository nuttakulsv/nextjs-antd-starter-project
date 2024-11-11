'use client';

import { Layout, Button, Avatar, Space, Typography, Dropdown, Badge, theme } from 'antd';
import { 
  UserOutlined, 
  BellOutlined, 
  SettingOutlined, 
  LogoutOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Header: AntHeader } = Layout;
const { Text } = Typography;
const { useToken } = theme;

export default function Header() {
  const router = useRouter();
  const { token } = useToken();

  const userMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      danger: true,
    },
  ];

  const notifications = [
    {
      title: 'New Order #1234',
      time: '5 minutes ago',
    },
    {
      title: 'Server Update',
      time: '2 hours ago',
    },
  ];

  return (
    <AntHeader 
      className="bg-white px-6 flex justify-between items-center shadow-sm" 
      style={{ height: '64px', padding: '0 24px' }}
    >
      <div className="flex items-center">
        <Button 
          type="text" 
          icon={<SearchOutlined />} 
          size="large"
          className="mr-2"
        />
      </div>
      
      <Space size="large" align="center">
        <Dropdown
          menu={{
            items: notifications.map((notif, index) => ({
              key: index,
              label: (
                <div>
                  <Text strong>{notif.title}</Text>
                  <div>
                    <Text type="secondary">{notif.time}</Text>
                  </div>
                </div>
              ),
            })),
          }}
          placement="bottomRight"
          arrow
        >
          <Badge count={notifications.length} size="small">
            <Button type="text" icon={<BellOutlined />} size="large" />
          </Badge>
        </Dropdown>

        <Dropdown 
          menu={{ 
            items: userMenuItems,
            onClick: ({ key }) => {
              if (key === 'logout') {
                router.push('/login');
              } else if (key === 'settings') {
                router.push('/dashboard/settings');
              }
            }
          }} 
          placement="bottomRight"
          arrow
        >
          <Space className="cursor-pointer">
            <Avatar 
              icon={<UserOutlined />}
              style={{ backgroundColor: token.colorPrimary }}
            />
            <div className="hidden md:block">
              <Text strong>Admin User</Text>
              <div>
                <Text type="secondary" className="text-sm">Administrator</Text>
              </div>
            </div>
          </Space>
        </Dropdown>
      </Space>
    </AntHeader>
  );
}