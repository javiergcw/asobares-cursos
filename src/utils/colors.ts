// Constantes de colores extraídas de la imagen del header
export const COLORS = {
  PRIMARY_DARK: '#134C4B',
  PRIMARY_LIGHT: '#205656',
  WHITE: '#FFFFFF',
  LIGHT_GRAY: '#D3D3D3',
  LOGO_BLUE: '#007BFF',
  LOGO_ORANGE: '#FF6600',
  DARK_TEXT: '#1A202C',
  CALL_TO_ACTION_BLUE: '#3385FF',
} as const;

// Tipos para TypeScript
export type ColorKey = keyof typeof COLORS;
export type ColorValue = typeof COLORS[ColorKey];
