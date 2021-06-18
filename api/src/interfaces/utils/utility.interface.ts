export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends Readonly<infer U>[]
    ? Readonly<DeepPartial<U>>[]
    : DeepPartial<T[P]>;
};

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject = Record<string, any>;
