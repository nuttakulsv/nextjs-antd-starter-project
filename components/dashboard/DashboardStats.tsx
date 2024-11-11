'use client';

import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, ShoppingOutlined, DollarOutlined, LineChartOutlined } from '@ant-design/icons';

export default function DashboardStats() {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Users"
            value={1234}
            prefix={<UserOutlined />}
            valueStyle={{ color: '#1677ff' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Total Orders"
            value={456}
            prefix={<ShoppingOutlined />}
            valueStyle={{ color: '#52c41a' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Revenue"
            value={89345}
            prefix={<DollarOutlined />}
            valueStyle={{ color: '#faad14' }}
          />
        </Card>
      </Col>
      <Col xs={24} sm={12} lg={6}>
        <Card>
          <Statistic
            title="Growth"
            value={23.45}
            prefix={<LineChartOutlined />}
            suffix="%"
            valueStyle={{ color: '#eb2f96' }}
          />
        </Card>
      </Col>
    </Row>
  );
}