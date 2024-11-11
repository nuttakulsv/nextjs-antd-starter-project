'use client';

import { ConfigProvider, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#1677ff',
            borderRadius: 6,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
};

export default ThemeProvider;