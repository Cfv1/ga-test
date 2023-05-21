import {hexToRgb} from '@mui/material';

export function hexToRgba(hex: string, opacity: number) {
  const rgbText = hexToRgb(hex);
  const indexToInsert = -1;
  return `${rgbText.slice(0, indexToInsert)}, ${opacity}${rgbText.slice(indexToInsert)}`
}
