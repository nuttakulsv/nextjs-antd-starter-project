'use client';

import { Table, Card, Button, Input, Space, Typography, Tag } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';

const { Title } = Typography;

interface OrderData {
  key: string;
  id: string;
  customer: string;
  date: string;
  total: number;
  status: string;
}

export default function OrdersPage() {
  const columns: TableProps<OrderData>['columns'] = [
    {
      title: 'Order ID',
      dataIndex: 'id',
      key: 'id',
      render: (id) => <span className="font-mono">#{id}</span>,
    },
    {
      title: 'Customer',
      dataIndex: 'customer',
      key: 'customer',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      render: (total) => (
        <span className="font-semibold">
          ${total.toFixed(2)}
        </span>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const colors = {
          'Completed': 'green',
          'Processing': 'blue',
          'Pending': 'orange',
          'Cancelled': 'red',
        };
        return (
          <Tag color={colors[status as keyof typeof colors]}>
            {status}
          </Tag>
        );
      },
    },
  ];

  const data: OrderData[] = [
    {
      key: '1',
      id: '1001',
      customer: 'John Doe',
      date: '2024-02-20',
      total: 299.99,
      status: 'Completed',
    },
    {
      key: '2',
      id: '1002',
      customer: 'Jane Smith',
      date: '2024-02-19',
      total: 149.99,
      status: 'Processing',
    },
    {
      key: '3',
      id: '1003',
      customer: 'Bob Johnson',
      date: '2024-02-18',
      total: 499.99,
      status: 'Pending',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <Title level={2}>Orders</Title>
      </div>

      <Card>
        <div className="mb-4">
          <Input
            placeholder="Search orders..."
            prefix={<SearchOutlined />}
            className="max-w-md"
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}