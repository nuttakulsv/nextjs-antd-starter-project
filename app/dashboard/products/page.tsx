'use client';

import { Table, Card, Button, Input, Space, Typography, Tag, Image } from 'antd';
import { SearchOutlined, PlusOutlined, DollarOutlined } from '@ant-design/icons';
import type { TableProps } from 'antd';

const { Title } = Typography;

interface ProductData {
  key: string;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: string;
}

export default function ProductsPage() {
  const columns: TableProps<ProductData>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price) => (
        <span className="text-gray-900">
          ${price.toFixed(2)}
        </span>
      ),
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category) => (
        <Tag color="blue">{category}</Tag>
      ),
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      render: (stock) => (
        <Tag color={stock > 10 ? 'green' : 'red'}>
          {stock} units
        </Tag>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
  ];

  const data: ProductData[] = [
    {
      key: '1',
      name: 'Product A',
      price: 99.99,
      category: 'Electronics',
      stock: 15,
      status: 'Active',
    },
    {
      key: '2',
      name: 'Product B',
      price: 149.99,
      category: 'Accessories',
      stock: 8,
      status: 'Active',
    },
    {
      key: '3',
      name: 'Product C',
      price: 199.99,
      category: 'Electronics',
      stock: 0,
      status: 'Inactive',
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-6">
        <Title level={2}>Products</Title>
        <Button type="primary" icon={<PlusOutlined />}>
          Add Product
        </Button>
      </div>

      <Card>
        <div className="mb-4">
          <Input
            placeholder="Search products..."
            prefix={<SearchOutlined />}
            className="max-w-md"
          />
        </div>
        <Table columns={columns} dataSource={data} />
      </Card>
    </div>
  );
}