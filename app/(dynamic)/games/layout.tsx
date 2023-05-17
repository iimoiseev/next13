import React from 'react';
import Link from 'next/link';

import styles from './layout.module.scss';

interface GamesLayoutProps {
  children: React.ReactNode;
}

const GamesLayout = ({ children }: GamesLayoutProps) => {
  return (
    <section className={styles.section}>
      <div>
        <h1 className={styles.gameName}>
          <Link href="/games/died-alive-unknown">Died or Alive or Unknown</Link>
        </h1>
      </div>

      {children}
    </section>
  );
};

export default GamesLayout;
