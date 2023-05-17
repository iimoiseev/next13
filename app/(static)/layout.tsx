import React from 'react';

import styles from './layout.module.scss';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

const DynamicLayout = ({ children }: DynamicLayoutProps) => <>{children}</>;

export default DynamicLayout;
