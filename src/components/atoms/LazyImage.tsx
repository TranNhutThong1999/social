'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholder?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

export function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',



