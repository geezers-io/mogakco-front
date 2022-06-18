// Follow Antd breakpoint https://ant.design/components/layout/#Layout.Sider
export const breakpoint = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
} as const;
export const media = {
  xs: `@media (min-width: ${breakpoint.xs}px)`,
  sm: `@media (min-width: ${breakpoint.sm}px)`,
  md: `@media (min-width: ${breakpoint.md}px)`,
  lg: `@media (min-width: ${breakpoint.lg}px)`,
  xl: `@media (min-width: ${breakpoint.xl}px)`,
  xxl: `@media (min-width: ${breakpoint.xxl}px)`,
} as const;
