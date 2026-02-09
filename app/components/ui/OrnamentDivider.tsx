'use client';

import React from 'react';

export function OrnamentDivider({ label }: { label: string }) {
  return (
    <div className="divider-ornament" aria-hidden="true">
      <span>{label}</span>
    </div>
  );
}

