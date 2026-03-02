declare module '@splidejs/react-splide' {
  import type { ComponentType } from 'react';

  export const Splide: ComponentType<{
    options?: Record<string, unknown>;
    className?: string;
    children?: React.ReactNode;
  }>;

  export const SplideSlide: ComponentType<{
    children?: React.ReactNode;
  }>;
}
