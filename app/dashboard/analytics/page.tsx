'use client';

import { Card, Row, Col, Typography } from 'antd';
import { Area } from '@ant-design/plots';

const { Title } = Typography;

export default function AnalyticsPage() {
  const data = [
    { date: '2024-01', value: 3 },
    { date: '2024-02', value: 4 },
    { date: '2024-03', value: 3.5 },
    { date: '2024-04', value: 5 },
    { date: '2024-05', value: 4.9 },
    { date: '2024-06', value: 6 },
    { date: '2024-07', value: 7 },
    { date: '2024-08', value: 9 },
    { date: '2024-09', value: 13 },
  ];

  const config = {
    data,
    xField: 'date',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
    smooth: true,
    areaStyle: {
      fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
    },
  };

  return (
    <div className="space-y-6">
      <Title level={2}>Analytics</Title>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title="Revenue Growth">
            <Area {...config} height={400} />
          </Card>
        </Col>
      </Row>
    </div>
  );
}