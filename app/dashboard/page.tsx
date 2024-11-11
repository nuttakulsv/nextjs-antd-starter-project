'use client';

import { Card, Typography } from 'antd';

const { Title } = Typography;

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="w-full max-w-6xl mx-auto">
        <Title level={2}>Dashboard</Title>
        <Typography.Paragraph>
          Welcome to your dashboard! You've successfully logged in.
        </Typography.Paragraph>
      </Card>
    </div>
  );
}