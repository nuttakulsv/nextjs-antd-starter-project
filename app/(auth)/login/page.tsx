'use client';

import { useState } from 'react';
import { Card, Form, Input, Button, Typography, Divider, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

const { Title } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values: { username: string; password: string }) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (values.username === 'admin' && values.password === 'admin') {
        messageApi.success('Login successful!');
        router.push('/dashboard');
      } else {
        messageApi.error('Invalid credentials!');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <div className="text-center mb-8">
            <Title level={2}>Welcome Back</Title>
            <Typography.Paragraph className="text-gray-500">
              Please sign in to continue
            </Typography.Paragraph>
          </div>

          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            layout="vertical"
            size="large"
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full" loading={loading}>
                Sign in
              </Button>
            </Form.Item>

            <Divider>Demo Credentials</Divider>
            <Typography.Paragraph className="text-center text-gray-500">
              Username: admin | Password: admin
            </Typography.Paragraph>
          </Form>
        </Card>
      </div>
    </>
  );
}