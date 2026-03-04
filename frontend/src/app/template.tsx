'use client';

import React from 'react';
import Stairs from '@/components/stairs';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <Stairs>
      {children}
    </Stairs>
  );
}
