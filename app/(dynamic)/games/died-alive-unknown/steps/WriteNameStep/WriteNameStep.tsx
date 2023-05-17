'use client';
import React from 'react';

import { Typography, Button } from '@/components';
import { useForm } from '@/src/utils';
import styles from './WriteNameStep.module.scss';

interface WriteNameProps {
  next: (value: { name: string }) => void;
}

const WriteNameStep: React.FC<WriteNameProps> = ({ next }) => {
  const form = useForm({ initialValues: { name: '' } });

  const onClick = () => {
    if (!form.values.name.length)
      return form.setFieldError('name', 'Field required');

    next({ name: form.values.name });
  };

  return (
    <div className={styles.wrapper}>
      <Typography variant="title-1" tag="label">
        You name?
      </Typography>
      <input
        type="text"
        value={form.values.name}
        onChange={(event) => form.setFieldValue('name', event.target.value)}
      />
      <Button onClick={onClick}>Start</Button>
    </div>
  );
};

export default WriteNameStep;
