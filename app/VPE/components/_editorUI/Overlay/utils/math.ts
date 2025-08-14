// utils/popover/math.ts

export function toPx(value: number | string | undefined): string | undefined {
  if (typeof value === 'number') return `${Math.round(value)}px`;
  return value;
}

export function parsePx(value: string): number {
  const parsed = parseInt(value, 10);
  return isNaN(parsed) ? 0 : parsed;
}

export function optionalDistance(from: number, to?: number): number | undefined {
  return typeof to === 'number' ? to - from : undefined;
}

export function mergeObjects<T extends object[]>(...objects: T): T[number] {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

export function normalizeCssValue(value: string | number | undefined): string | undefined {
  return typeof value === "number" ? toPx(value) : value;
}


export function removeUndefinedValues<T extends Record<string, any>>(object: T): Partial<T> {
  return Object.entries(object)
    .filter(([_, value]) => value !== undefined)
    .reduce((result, [key, value]) => {
      return {
        ...result,
        [key]: value,
      };
    }, {} as Partial<T>);
}