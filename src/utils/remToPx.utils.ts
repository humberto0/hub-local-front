export const remToPx = (rem: string): number =>
  rem.length ? parseFloat(rem.replace(/D/g, '')) * 16 : 0;
