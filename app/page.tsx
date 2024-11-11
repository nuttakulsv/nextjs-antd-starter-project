'use client';

import { Button, Typography, Space, Card } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Card className="shadow-lg">
          <Space direction="vertical" size="large" className="w-full">
            <div className="text-center">
              <Title level={1}>Welcome to Next.js + Ant Design</Title>
              <Paragraph className="text-lg">
                A modern web application template built with Next.js 14 and Ant Design
              </Paragraph>
            </div>
            
            <div className="flex justify-center gap-4">
              <Button type="primary" size="large" icon={<GithubOutlined />}>
                View on GitHub
              </Button>
              <Button size="large">Documentation</Button>
            </div>

            <Card className="mt-8">
              <Title level={3}>Features</Title>
              <ul className="list-disc pl-6 space-y-2">
                <li>Next.js 14 with App Router</li>
                <li>Ant Design Components</li>
                <li>TypeScript Support</li>
                <li>Tailwind CSS Integration</li>
                <li>ESLint Configuration</li>
                <li>Dark Mode Support</li>
              </ul>
            </Card>
          </Space>
        </Card>
      </div>
    </main>
  );
}