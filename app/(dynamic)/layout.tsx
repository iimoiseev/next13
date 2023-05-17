import React from 'react';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => <>{children}</>;

export default DynamicLayout;
