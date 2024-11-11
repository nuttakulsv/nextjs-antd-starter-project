'use client';

import { Table, Card, Button, Input, Space, Typography } from 'antd';
import { UserOutlined, SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';

const { Title } = Typography;

interface UserData {
  key: string;
  name: string;
  email: string;
  role: string;
  status: string;
}

export default function UsersPage() {
  const columns: TableProps<UserData>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Space>
          <UserOutlined />
          {text}
        </Space>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <span className={`px-2 py-1 rounded-full text-sm ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      ),
    },
  ];

  const data: UserData[] = [
    {
      key: '1',
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin',
      status: 'Active',
    },
    {
      key: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User',
      status: 'Active',
    },
    {
      key: '3',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Editor',
      status: 'Inactive',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <Title level={2}>Users</Title>
        <Button type="primary" icon={<PlusOutlined />}>
          Add User
        </Button>
      </div>

      <Card>
        <div className="mb-4">
          <Input
            placeholder="Search users..."
            prefix={<SearchOutlined />}
            className="max-w-md"
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}