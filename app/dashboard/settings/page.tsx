'use client';

import { Card, Form, Input, Button, Switch, Space, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export default function SettingsPage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="space-y-6">
      <Title level={2}>Settings</Title>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            siteName: 'My Admin Dashboard',
            email: 'admin@example.com',
            notifications: true,
            darkMode: false,
          }}
        >
          <div className="space-y-6">
            <div>
              <Title level={4}>General Settings</Title>
              <Form.Item
                name="siteName"
                label="Site Name"
                rules={[{ required: true, message: 'Please input the site name!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="email"
                label="Admin Email"
                rules={[
                  { required: true, message: 'Please input your email!' },
                  { type: 'email', message: 'Please enter a valid email!' },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <Divider />

            <div>
              <Title level={4}>Preferences</Title>
              <Space direction="vertical" className="w-full">
                <Form.Item name="notifications" valuePropName="checked">
                  <Space>
                    <Switch />
                    <Text>Enable Email Notifications</Text>
                  </Space>
                </Form.Item>

                <Form.Item name="darkMode" valuePropName="checked">
                  <Space>
                    <Switch />
                    <Text>Dark Mode</Text>
                  </Space>
                </Form.Item>
              </Space>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
                Save Changes
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Card>
    </div>
  );
}