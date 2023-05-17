import Link from 'next/link';
import React from 'react';

import { Typography } from '@/components';
import { caller } from '@/server/routes';
import { ROUTES } from '@/utils/constants';

import styles from './Footer.module.scss';

export const Footer = async () => {
  const [characterCount, episodesCount, locationsCount] = await Promise.all([
    (await caller.getCharactersInfo()).response.info.count,
    (await caller.getEpisodesInfo()).response.info.count,
    (await caller.getLocationsInfo()).response.info.count,
  ]);

  return (
    <footer className={styles.footer}>
      <div className={styles.counts}>
        <Typography variant="sub-title-2">
          <Link prefetch={false} href={ROUTES.CHARACTERS}>
            characters: <b>{characterCount}</b>
          </Link>
        </Typography>
        <Typography variant="sub-title-2">
          <Link prefetch={false} href={ROUTES.EPISODES}>
            episodes: <b>{episodesCount}</b>
          </Link>
        </Typography>
        <Typography variant="sub-title-2">
          <Link prefetch={false} href={ROUTES.LOCATIONS}>
            locations: <b>{locationsCount}</b>
          </Link>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
