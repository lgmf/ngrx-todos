export interface EntityOf<T> {
  [id: string]: T;
}

export function arrayToEntity<T>(arr: T[], trackBy: string | number): EntityOf<T> {
  return arr.reduce((result, current) => {
    const key = current[trackBy];
    return {
      ...result,
      [key]: current
    };
  }, {});
}

export function entityToArray<T>(entity: EntityOf<T> = {}): T[] {
  return Object.values(entity);
}
