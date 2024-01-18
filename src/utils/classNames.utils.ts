export type Mods = Record<string, boolean | string | undefined>;

export function classNamesUtils(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ');
}