// src/theme/types.ts
export interface AppTheme {
  COLOR: typeof import('./Color').COLOR;
  FONT_FAMILY: typeof import('./fontFamily').FONT_FAMILY;
  SPACING: typeof import('./spacing').SPACING;
  BORDER_RADIOUS: typeof import('./borderRadius').BORDER_RADIOUS;
  FONT_WEIGHT: typeof import('./fontWeight').FONT_WEIGHT;
  FONT_SIZE: typeof import('./fontSize').FONT_SIZE;
  LINE_HEIGHT: typeof import('./lineHeight').LINE_HEIGHT;
}
