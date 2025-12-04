
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StreamerLevel
 * 
 */
export type StreamerLevel = $Result.DefaultSelection<Prisma.$StreamerLevelPayload>
/**
 * Model Regalo
 * 
 */
export type Regalo = $Result.DefaultSelection<Prisma.$RegaloPayload>
/**
 * Model Stream
 * 
 */
export type Stream = $Result.DefaultSelection<Prisma.$StreamPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model StreamTag
 * 
 */
export type StreamTag = $Result.DefaultSelection<Prisma.$StreamTagPayload>
/**
 * Model Monedas
 * 
 */
export type Monedas = $Result.DefaultSelection<Prisma.$MonedasPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamerLevel`: Exposes CRUD operations for the **StreamerLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamerLevels
    * const streamerLevels = await prisma.streamerLevel.findMany()
    * ```
    */
  get streamerLevel(): Prisma.StreamerLevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.regalo`: Exposes CRUD operations for the **Regalo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regalos
    * const regalos = await prisma.regalo.findMany()
    * ```
    */
  get regalo(): Prisma.RegaloDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stream`: Exposes CRUD operations for the **Stream** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Streams
    * const streams = await prisma.stream.findMany()
    * ```
    */
  get stream(): Prisma.StreamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.streamTag`: Exposes CRUD operations for the **StreamTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StreamTags
    * const streamTags = await prisma.streamTag.findMany()
    * ```
    */
  get streamTag(): Prisma.StreamTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monedas`: Exposes CRUD operations for the **Monedas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Monedas
    * const monedas = await prisma.monedas.findMany()
    * ```
    */
  get monedas(): Prisma.MonedasDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StreamerLevel: 'StreamerLevel',
    Regalo: 'Regalo',
    Stream: 'Stream',
    Tag: 'Tag',
    StreamTag: 'StreamTag',
    Monedas: 'Monedas'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "streamerLevel" | "regalo" | "stream" | "tag" | "streamTag" | "monedas"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StreamerLevel: {
        payload: Prisma.$StreamerLevelPayload<ExtArgs>
        fields: Prisma.StreamerLevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamerLevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamerLevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          findFirst: {
            args: Prisma.StreamerLevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamerLevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          findMany: {
            args: Prisma.StreamerLevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>[]
          }
          create: {
            args: Prisma.StreamerLevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          createMany: {
            args: Prisma.StreamerLevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamerLevelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>[]
          }
          delete: {
            args: Prisma.StreamerLevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          update: {
            args: Prisma.StreamerLevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          deleteMany: {
            args: Prisma.StreamerLevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamerLevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamerLevelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>[]
          }
          upsert: {
            args: Prisma.StreamerLevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamerLevelPayload>
          }
          aggregate: {
            args: Prisma.StreamerLevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamerLevel>
          }
          groupBy: {
            args: Prisma.StreamerLevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamerLevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamerLevelCountArgs<ExtArgs>
            result: $Utils.Optional<StreamerLevelCountAggregateOutputType> | number
          }
        }
      }
      Regalo: {
        payload: Prisma.$RegaloPayload<ExtArgs>
        fields: Prisma.RegaloFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegaloFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegaloFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          findFirst: {
            args: Prisma.RegaloFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegaloFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          findMany: {
            args: Prisma.RegaloFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          create: {
            args: Prisma.RegaloCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          createMany: {
            args: Prisma.RegaloCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegaloCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          delete: {
            args: Prisma.RegaloDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          update: {
            args: Prisma.RegaloUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          deleteMany: {
            args: Prisma.RegaloDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegaloUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegaloUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>[]
          }
          upsert: {
            args: Prisma.RegaloUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegaloPayload>
          }
          aggregate: {
            args: Prisma.RegaloAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegalo>
          }
          groupBy: {
            args: Prisma.RegaloGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegaloGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegaloCountArgs<ExtArgs>
            result: $Utils.Optional<RegaloCountAggregateOutputType> | number
          }
        }
      }
      Stream: {
        payload: Prisma.$StreamPayload<ExtArgs>
        fields: Prisma.StreamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findFirst: {
            args: Prisma.StreamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          findMany: {
            args: Prisma.StreamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          create: {
            args: Prisma.StreamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          createMany: {
            args: Prisma.StreamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          delete: {
            args: Prisma.StreamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          update: {
            args: Prisma.StreamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          deleteMany: {
            args: Prisma.StreamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>[]
          }
          upsert: {
            args: Prisma.StreamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamPayload>
          }
          aggregate: {
            args: Prisma.StreamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStream>
          }
          groupBy: {
            args: Prisma.StreamGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamCountArgs<ExtArgs>
            result: $Utils.Optional<StreamCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      StreamTag: {
        payload: Prisma.$StreamTagPayload<ExtArgs>
        fields: Prisma.StreamTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StreamTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StreamTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          findFirst: {
            args: Prisma.StreamTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StreamTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          findMany: {
            args: Prisma.StreamTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>[]
          }
          create: {
            args: Prisma.StreamTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          createMany: {
            args: Prisma.StreamTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StreamTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>[]
          }
          delete: {
            args: Prisma.StreamTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          update: {
            args: Prisma.StreamTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          deleteMany: {
            args: Prisma.StreamTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StreamTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StreamTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>[]
          }
          upsert: {
            args: Prisma.StreamTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StreamTagPayload>
          }
          aggregate: {
            args: Prisma.StreamTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStreamTag>
          }
          groupBy: {
            args: Prisma.StreamTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<StreamTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.StreamTagCountArgs<ExtArgs>
            result: $Utils.Optional<StreamTagCountAggregateOutputType> | number
          }
        }
      }
      Monedas: {
        payload: Prisma.$MonedasPayload<ExtArgs>
        fields: Prisma.MonedasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonedasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonedasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          findFirst: {
            args: Prisma.MonedasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonedasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          findMany: {
            args: Prisma.MonedasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>[]
          }
          create: {
            args: Prisma.MonedasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          createMany: {
            args: Prisma.MonedasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonedasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>[]
          }
          delete: {
            args: Prisma.MonedasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          update: {
            args: Prisma.MonedasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          deleteMany: {
            args: Prisma.MonedasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonedasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonedasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>[]
          }
          upsert: {
            args: Prisma.MonedasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonedasPayload>
          }
          aggregate: {
            args: Prisma.MonedasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonedas>
          }
          groupBy: {
            args: Prisma.MonedasGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonedasGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonedasCountArgs<ExtArgs>
            result: $Utils.Optional<MonedasCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    streamerLevel?: StreamerLevelOmit
    regalo?: RegaloOmit
    stream?: StreamOmit
    tag?: TagOmit
    streamTag?: StreamTagOmit
    monedas?: MonedasOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    streams: number
    regalosCreados: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | UserCountOutputTypeCountStreamsArgs
    regalosCreados?: boolean | UserCountOutputTypeCountRegalosCreadosArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRegalosCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegaloWhereInput
  }


  /**
   * Count Type StreamerLevelCountOutputType
   */

  export type StreamerLevelCountOutputType = {
    users: number
  }

  export type StreamerLevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | StreamerLevelCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * StreamerLevelCountOutputType without action
   */
  export type StreamerLevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevelCountOutputType
     */
    select?: StreamerLevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamerLevelCountOutputType without action
   */
  export type StreamerLevelCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type StreamCountOutputType
   */

  export type StreamCountOutputType = {
    tags: number
  }

  export type StreamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | StreamCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamCountOutputType
     */
    select?: StreamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StreamCountOutputType without action
   */
  export type StreamCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamTagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    streams: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | TagCountOutputTypeCountStreamsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountStreamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamTagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    coins: number | null
    points: number | null
    streamingHours: number | null
  }

  export type UserSumAggregateOutputType = {
    coins: number | null
    points: number | null
    streamingHours: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    coins: number | null
    points: number | null
    streamingHours: number | null
    currentLevelId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    coins: number | null
    points: number | null
    streamingHours: number | null
    currentLevelId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    coins: number
    points: number
    streamingHours: number
    currentLevelId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    coins?: true
    points?: true
    streamingHours?: true
  }

  export type UserSumAggregateInputType = {
    coins?: true
    points?: true
    streamingHours?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    coins?: true
    points?: true
    streamingHours?: true
    currentLevelId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    coins?: true
    points?: true
    streamingHours?: true
    currentLevelId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    coins?: true
    points?: true
    streamingHours?: true
    currentLevelId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    coins: number
    points: number
    streamingHours: number
    currentLevelId: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    coins?: boolean
    points?: boolean
    streamingHours?: boolean
    currentLevelId?: boolean
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
    streams?: boolean | User$streamsArgs<ExtArgs>
    regalosCreados?: boolean | User$regalosCreadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    coins?: boolean
    points?: boolean
    streamingHours?: boolean
    currentLevelId?: boolean
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    coins?: boolean
    points?: boolean
    streamingHours?: boolean
    currentLevelId?: boolean
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    coins?: boolean
    points?: boolean
    streamingHours?: boolean
    currentLevelId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "coins" | "points" | "streamingHours" | "currentLevelId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
    streams?: boolean | User$streamsArgs<ExtArgs>
    regalosCreados?: boolean | User$regalosCreadosArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    currentLevel?: boolean | User$currentLevelArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      currentLevel: Prisma.$StreamerLevelPayload<ExtArgs> | null
      streams: Prisma.$StreamPayload<ExtArgs>[]
      regalosCreados: Prisma.$RegaloPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      coins: number
      points: number
      streamingHours: number
      currentLevelId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    currentLevel<T extends User$currentLevelArgs<ExtArgs> = {}>(args?: Subset<T, User$currentLevelArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    streams<T extends User$streamsArgs<ExtArgs> = {}>(args?: Subset<T, User$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    regalosCreados<T extends User$regalosCreadosArgs<ExtArgs> = {}>(args?: Subset<T, User$regalosCreadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly coins: FieldRef<"User", 'Int'>
    readonly points: FieldRef<"User", 'Int'>
    readonly streamingHours: FieldRef<"User", 'Float'>
    readonly currentLevelId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.currentLevel
   */
  export type User$currentLevelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    where?: StreamerLevelWhereInput
  }

  /**
   * User.streams
   */
  export type User$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    cursor?: StreamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * User.regalosCreados
   */
  export type User$regalosCreadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    where?: RegaloWhereInput
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    cursor?: RegaloWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StreamerLevel
   */

  export type AggregateStreamerLevel = {
    _count: StreamerLevelCountAggregateOutputType | null
    _avg: StreamerLevelAvgAggregateOutputType | null
    _sum: StreamerLevelSumAggregateOutputType | null
    _min: StreamerLevelMinAggregateOutputType | null
    _max: StreamerLevelMaxAggregateOutputType | null
  }

  export type StreamerLevelAvgAggregateOutputType = {
    puntosRequeridos: number | null
  }

  export type StreamerLevelSumAggregateOutputType = {
    puntosRequeridos: number | null
  }

  export type StreamerLevelMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    puntosRequeridos: number | null
    recompensa: string | null
    image: string | null
  }

  export type StreamerLevelMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    puntosRequeridos: number | null
    recompensa: string | null
    image: string | null
  }

  export type StreamerLevelCountAggregateOutputType = {
    id: number
    nombre: number
    puntosRequeridos: number
    recompensa: number
    image: number
    _all: number
  }


  export type StreamerLevelAvgAggregateInputType = {
    puntosRequeridos?: true
  }

  export type StreamerLevelSumAggregateInputType = {
    puntosRequeridos?: true
  }

  export type StreamerLevelMinAggregateInputType = {
    id?: true
    nombre?: true
    puntosRequeridos?: true
    recompensa?: true
    image?: true
  }

  export type StreamerLevelMaxAggregateInputType = {
    id?: true
    nombre?: true
    puntosRequeridos?: true
    recompensa?: true
    image?: true
  }

  export type StreamerLevelCountAggregateInputType = {
    id?: true
    nombre?: true
    puntosRequeridos?: true
    recompensa?: true
    image?: true
    _all?: true
  }

  export type StreamerLevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamerLevel to aggregate.
     */
    where?: StreamerLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerLevels to fetch.
     */
    orderBy?: StreamerLevelOrderByWithRelationInput | StreamerLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamerLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamerLevels
    **/
    _count?: true | StreamerLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StreamerLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StreamerLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamerLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamerLevelMaxAggregateInputType
  }

  export type GetStreamerLevelAggregateType<T extends StreamerLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamerLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamerLevel[P]>
      : GetScalarType<T[P], AggregateStreamerLevel[P]>
  }




  export type StreamerLevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamerLevelWhereInput
    orderBy?: StreamerLevelOrderByWithAggregationInput | StreamerLevelOrderByWithAggregationInput[]
    by: StreamerLevelScalarFieldEnum[] | StreamerLevelScalarFieldEnum
    having?: StreamerLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamerLevelCountAggregateInputType | true
    _avg?: StreamerLevelAvgAggregateInputType
    _sum?: StreamerLevelSumAggregateInputType
    _min?: StreamerLevelMinAggregateInputType
    _max?: StreamerLevelMaxAggregateInputType
  }

  export type StreamerLevelGroupByOutputType = {
    id: string
    nombre: string
    puntosRequeridos: number
    recompensa: string | null
    image: string | null
    _count: StreamerLevelCountAggregateOutputType | null
    _avg: StreamerLevelAvgAggregateOutputType | null
    _sum: StreamerLevelSumAggregateOutputType | null
    _min: StreamerLevelMinAggregateOutputType | null
    _max: StreamerLevelMaxAggregateOutputType | null
  }

  type GetStreamerLevelGroupByPayload<T extends StreamerLevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamerLevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamerLevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamerLevelGroupByOutputType[P]>
            : GetScalarType<T[P], StreamerLevelGroupByOutputType[P]>
        }
      >
    >


  export type StreamerLevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    puntosRequeridos?: boolean
    recompensa?: boolean
    image?: boolean
    users?: boolean | StreamerLevel$usersArgs<ExtArgs>
    _count?: boolean | StreamerLevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamerLevel"]>

  export type StreamerLevelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    puntosRequeridos?: boolean
    recompensa?: boolean
    image?: boolean
  }, ExtArgs["result"]["streamerLevel"]>

  export type StreamerLevelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    puntosRequeridos?: boolean
    recompensa?: boolean
    image?: boolean
  }, ExtArgs["result"]["streamerLevel"]>

  export type StreamerLevelSelectScalar = {
    id?: boolean
    nombre?: boolean
    puntosRequeridos?: boolean
    recompensa?: boolean
    image?: boolean
  }

  export type StreamerLevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "puntosRequeridos" | "recompensa" | "image", ExtArgs["result"]["streamerLevel"]>
  export type StreamerLevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | StreamerLevel$usersArgs<ExtArgs>
    _count?: boolean | StreamerLevelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamerLevelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StreamerLevelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StreamerLevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamerLevel"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      puntosRequeridos: number
      recompensa: string | null
      image: string | null
    }, ExtArgs["result"]["streamerLevel"]>
    composites: {}
  }

  type StreamerLevelGetPayload<S extends boolean | null | undefined | StreamerLevelDefaultArgs> = $Result.GetResult<Prisma.$StreamerLevelPayload, S>

  type StreamerLevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamerLevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamerLevelCountAggregateInputType | true
    }

  export interface StreamerLevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamerLevel'], meta: { name: 'StreamerLevel' } }
    /**
     * Find zero or one StreamerLevel that matches the filter.
     * @param {StreamerLevelFindUniqueArgs} args - Arguments to find a StreamerLevel
     * @example
     * // Get one StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamerLevelFindUniqueArgs>(args: SelectSubset<T, StreamerLevelFindUniqueArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamerLevel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamerLevelFindUniqueOrThrowArgs} args - Arguments to find a StreamerLevel
     * @example
     * // Get one StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamerLevelFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamerLevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamerLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelFindFirstArgs} args - Arguments to find a StreamerLevel
     * @example
     * // Get one StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamerLevelFindFirstArgs>(args?: SelectSubset<T, StreamerLevelFindFirstArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamerLevel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelFindFirstOrThrowArgs} args - Arguments to find a StreamerLevel
     * @example
     * // Get one StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamerLevelFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamerLevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamerLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamerLevels
     * const streamerLevels = await prisma.streamerLevel.findMany()
     * 
     * // Get first 10 StreamerLevels
     * const streamerLevels = await prisma.streamerLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamerLevelWithIdOnly = await prisma.streamerLevel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamerLevelFindManyArgs>(args?: SelectSubset<T, StreamerLevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamerLevel.
     * @param {StreamerLevelCreateArgs} args - Arguments to create a StreamerLevel.
     * @example
     * // Create one StreamerLevel
     * const StreamerLevel = await prisma.streamerLevel.create({
     *   data: {
     *     // ... data to create a StreamerLevel
     *   }
     * })
     * 
     */
    create<T extends StreamerLevelCreateArgs>(args: SelectSubset<T, StreamerLevelCreateArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamerLevels.
     * @param {StreamerLevelCreateManyArgs} args - Arguments to create many StreamerLevels.
     * @example
     * // Create many StreamerLevels
     * const streamerLevel = await prisma.streamerLevel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamerLevelCreateManyArgs>(args?: SelectSubset<T, StreamerLevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamerLevels and returns the data saved in the database.
     * @param {StreamerLevelCreateManyAndReturnArgs} args - Arguments to create many StreamerLevels.
     * @example
     * // Create many StreamerLevels
     * const streamerLevel = await prisma.streamerLevel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamerLevels and only return the `id`
     * const streamerLevelWithIdOnly = await prisma.streamerLevel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamerLevelCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamerLevelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamerLevel.
     * @param {StreamerLevelDeleteArgs} args - Arguments to delete one StreamerLevel.
     * @example
     * // Delete one StreamerLevel
     * const StreamerLevel = await prisma.streamerLevel.delete({
     *   where: {
     *     // ... filter to delete one StreamerLevel
     *   }
     * })
     * 
     */
    delete<T extends StreamerLevelDeleteArgs>(args: SelectSubset<T, StreamerLevelDeleteArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamerLevel.
     * @param {StreamerLevelUpdateArgs} args - Arguments to update one StreamerLevel.
     * @example
     * // Update one StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamerLevelUpdateArgs>(args: SelectSubset<T, StreamerLevelUpdateArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamerLevels.
     * @param {StreamerLevelDeleteManyArgs} args - Arguments to filter StreamerLevels to delete.
     * @example
     * // Delete a few StreamerLevels
     * const { count } = await prisma.streamerLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamerLevelDeleteManyArgs>(args?: SelectSubset<T, StreamerLevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamerLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamerLevels
     * const streamerLevel = await prisma.streamerLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamerLevelUpdateManyArgs>(args: SelectSubset<T, StreamerLevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamerLevels and returns the data updated in the database.
     * @param {StreamerLevelUpdateManyAndReturnArgs} args - Arguments to update many StreamerLevels.
     * @example
     * // Update many StreamerLevels
     * const streamerLevel = await prisma.streamerLevel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamerLevels and only return the `id`
     * const streamerLevelWithIdOnly = await prisma.streamerLevel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamerLevelUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamerLevelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamerLevel.
     * @param {StreamerLevelUpsertArgs} args - Arguments to update or create a StreamerLevel.
     * @example
     * // Update or create a StreamerLevel
     * const streamerLevel = await prisma.streamerLevel.upsert({
     *   create: {
     *     // ... data to create a StreamerLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamerLevel we want to update
     *   }
     * })
     */
    upsert<T extends StreamerLevelUpsertArgs>(args: SelectSubset<T, StreamerLevelUpsertArgs<ExtArgs>>): Prisma__StreamerLevelClient<$Result.GetResult<Prisma.$StreamerLevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamerLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelCountArgs} args - Arguments to filter StreamerLevels to count.
     * @example
     * // Count the number of StreamerLevels
     * const count = await prisma.streamerLevel.count({
     *   where: {
     *     // ... the filter for the StreamerLevels we want to count
     *   }
     * })
    **/
    count<T extends StreamerLevelCountArgs>(
      args?: Subset<T, StreamerLevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamerLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamerLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamerLevelAggregateArgs>(args: Subset<T, StreamerLevelAggregateArgs>): Prisma.PrismaPromise<GetStreamerLevelAggregateType<T>>

    /**
     * Group by StreamerLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamerLevelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamerLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamerLevelGroupByArgs['orderBy'] }
        : { orderBy?: StreamerLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamerLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamerLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamerLevel model
   */
  readonly fields: StreamerLevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamerLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamerLevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends StreamerLevel$usersArgs<ExtArgs> = {}>(args?: Subset<T, StreamerLevel$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamerLevel model
   */
  interface StreamerLevelFieldRefs {
    readonly id: FieldRef<"StreamerLevel", 'String'>
    readonly nombre: FieldRef<"StreamerLevel", 'String'>
    readonly puntosRequeridos: FieldRef<"StreamerLevel", 'Int'>
    readonly recompensa: FieldRef<"StreamerLevel", 'String'>
    readonly image: FieldRef<"StreamerLevel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StreamerLevel findUnique
   */
  export type StreamerLevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter, which StreamerLevel to fetch.
     */
    where: StreamerLevelWhereUniqueInput
  }

  /**
   * StreamerLevel findUniqueOrThrow
   */
  export type StreamerLevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter, which StreamerLevel to fetch.
     */
    where: StreamerLevelWhereUniqueInput
  }

  /**
   * StreamerLevel findFirst
   */
  export type StreamerLevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter, which StreamerLevel to fetch.
     */
    where?: StreamerLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerLevels to fetch.
     */
    orderBy?: StreamerLevelOrderByWithRelationInput | StreamerLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamerLevels.
     */
    cursor?: StreamerLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamerLevels.
     */
    distinct?: StreamerLevelScalarFieldEnum | StreamerLevelScalarFieldEnum[]
  }

  /**
   * StreamerLevel findFirstOrThrow
   */
  export type StreamerLevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter, which StreamerLevel to fetch.
     */
    where?: StreamerLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerLevels to fetch.
     */
    orderBy?: StreamerLevelOrderByWithRelationInput | StreamerLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamerLevels.
     */
    cursor?: StreamerLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerLevels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamerLevels.
     */
    distinct?: StreamerLevelScalarFieldEnum | StreamerLevelScalarFieldEnum[]
  }

  /**
   * StreamerLevel findMany
   */
  export type StreamerLevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter, which StreamerLevels to fetch.
     */
    where?: StreamerLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamerLevels to fetch.
     */
    orderBy?: StreamerLevelOrderByWithRelationInput | StreamerLevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamerLevels.
     */
    cursor?: StreamerLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamerLevels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamerLevels.
     */
    skip?: number
    distinct?: StreamerLevelScalarFieldEnum | StreamerLevelScalarFieldEnum[]
  }

  /**
   * StreamerLevel create
   */
  export type StreamerLevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamerLevel.
     */
    data: XOR<StreamerLevelCreateInput, StreamerLevelUncheckedCreateInput>
  }

  /**
   * StreamerLevel createMany
   */
  export type StreamerLevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamerLevels.
     */
    data: StreamerLevelCreateManyInput | StreamerLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamerLevel createManyAndReturn
   */
  export type StreamerLevelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * The data used to create many StreamerLevels.
     */
    data: StreamerLevelCreateManyInput | StreamerLevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamerLevel update
   */
  export type StreamerLevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamerLevel.
     */
    data: XOR<StreamerLevelUpdateInput, StreamerLevelUncheckedUpdateInput>
    /**
     * Choose, which StreamerLevel to update.
     */
    where: StreamerLevelWhereUniqueInput
  }

  /**
   * StreamerLevel updateMany
   */
  export type StreamerLevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamerLevels.
     */
    data: XOR<StreamerLevelUpdateManyMutationInput, StreamerLevelUncheckedUpdateManyInput>
    /**
     * Filter which StreamerLevels to update
     */
    where?: StreamerLevelWhereInput
    /**
     * Limit how many StreamerLevels to update.
     */
    limit?: number
  }

  /**
   * StreamerLevel updateManyAndReturn
   */
  export type StreamerLevelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * The data used to update StreamerLevels.
     */
    data: XOR<StreamerLevelUpdateManyMutationInput, StreamerLevelUncheckedUpdateManyInput>
    /**
     * Filter which StreamerLevels to update
     */
    where?: StreamerLevelWhereInput
    /**
     * Limit how many StreamerLevels to update.
     */
    limit?: number
  }

  /**
   * StreamerLevel upsert
   */
  export type StreamerLevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamerLevel to update in case it exists.
     */
    where: StreamerLevelWhereUniqueInput
    /**
     * In case the StreamerLevel found by the `where` argument doesn't exist, create a new StreamerLevel with this data.
     */
    create: XOR<StreamerLevelCreateInput, StreamerLevelUncheckedCreateInput>
    /**
     * In case the StreamerLevel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamerLevelUpdateInput, StreamerLevelUncheckedUpdateInput>
  }

  /**
   * StreamerLevel delete
   */
  export type StreamerLevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
    /**
     * Filter which StreamerLevel to delete.
     */
    where: StreamerLevelWhereUniqueInput
  }

  /**
   * StreamerLevel deleteMany
   */
  export type StreamerLevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamerLevels to delete
     */
    where?: StreamerLevelWhereInput
    /**
     * Limit how many StreamerLevels to delete.
     */
    limit?: number
  }

  /**
   * StreamerLevel.users
   */
  export type StreamerLevel$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * StreamerLevel without action
   */
  export type StreamerLevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamerLevel
     */
    select?: StreamerLevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamerLevel
     */
    omit?: StreamerLevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamerLevelInclude<ExtArgs> | null
  }


  /**
   * Model Regalo
   */

  export type AggregateRegalo = {
    _count: RegaloCountAggregateOutputType | null
    _avg: RegaloAvgAggregateOutputType | null
    _sum: RegaloSumAggregateOutputType | null
    _min: RegaloMinAggregateOutputType | null
    _max: RegaloMaxAggregateOutputType | null
  }

  export type RegaloAvgAggregateOutputType = {
    costo: number | null
    puntos: number | null
  }

  export type RegaloSumAggregateOutputType = {
    costo: number | null
    puntos: number | null
  }

  export type RegaloMinAggregateOutputType = {
    id: string | null
    nombre: string | null
    costo: number | null
    puntos: number | null
    icono: string | null
    activo: boolean | null
    streamerId: string | null
  }

  export type RegaloMaxAggregateOutputType = {
    id: string | null
    nombre: string | null
    costo: number | null
    puntos: number | null
    icono: string | null
    activo: boolean | null
    streamerId: string | null
  }

  export type RegaloCountAggregateOutputType = {
    id: number
    nombre: number
    costo: number
    puntos: number
    icono: number
    activo: number
    streamerId: number
    _all: number
  }


  export type RegaloAvgAggregateInputType = {
    costo?: true
    puntos?: true
  }

  export type RegaloSumAggregateInputType = {
    costo?: true
    puntos?: true
  }

  export type RegaloMinAggregateInputType = {
    id?: true
    nombre?: true
    costo?: true
    puntos?: true
    icono?: true
    activo?: true
    streamerId?: true
  }

  export type RegaloMaxAggregateInputType = {
    id?: true
    nombre?: true
    costo?: true
    puntos?: true
    icono?: true
    activo?: true
    streamerId?: true
  }

  export type RegaloCountAggregateInputType = {
    id?: true
    nombre?: true
    costo?: true
    puntos?: true
    icono?: true
    activo?: true
    streamerId?: true
    _all?: true
  }

  export type RegaloAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regalo to aggregate.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regalos
    **/
    _count?: true | RegaloCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegaloAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegaloSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegaloMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegaloMaxAggregateInputType
  }

  export type GetRegaloAggregateType<T extends RegaloAggregateArgs> = {
        [P in keyof T & keyof AggregateRegalo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegalo[P]>
      : GetScalarType<T[P], AggregateRegalo[P]>
  }




  export type RegaloGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegaloWhereInput
    orderBy?: RegaloOrderByWithAggregationInput | RegaloOrderByWithAggregationInput[]
    by: RegaloScalarFieldEnum[] | RegaloScalarFieldEnum
    having?: RegaloScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegaloCountAggregateInputType | true
    _avg?: RegaloAvgAggregateInputType
    _sum?: RegaloSumAggregateInputType
    _min?: RegaloMinAggregateInputType
    _max?: RegaloMaxAggregateInputType
  }

  export type RegaloGroupByOutputType = {
    id: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo: boolean
    streamerId: string
    _count: RegaloCountAggregateOutputType | null
    _avg: RegaloAvgAggregateOutputType | null
    _sum: RegaloSumAggregateOutputType | null
    _min: RegaloMinAggregateOutputType | null
    _max: RegaloMaxAggregateOutputType | null
  }

  type GetRegaloGroupByPayload<T extends RegaloGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegaloGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegaloGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegaloGroupByOutputType[P]>
            : GetScalarType<T[P], RegaloGroupByOutputType[P]>
        }
      >
    >


  export type RegaloSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    costo?: boolean
    puntos?: boolean
    icono?: boolean
    activo?: boolean
    streamerId?: boolean
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    costo?: boolean
    puntos?: boolean
    icono?: boolean
    activo?: boolean
    streamerId?: boolean
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    costo?: boolean
    puntos?: boolean
    icono?: boolean
    activo?: boolean
    streamerId?: boolean
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["regalo"]>

  export type RegaloSelectScalar = {
    id?: boolean
    nombre?: boolean
    costo?: boolean
    puntos?: boolean
    icono?: boolean
    activo?: boolean
    streamerId?: boolean
  }

  export type RegaloOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "costo" | "puntos" | "icono" | "activo" | "streamerId", ExtArgs["result"]["regalo"]>
  export type RegaloInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegaloIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RegaloIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streamer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RegaloPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Regalo"
    objects: {
      streamer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nombre: string
      costo: number
      puntos: number
      icono: string
      activo: boolean
      streamerId: string
    }, ExtArgs["result"]["regalo"]>
    composites: {}
  }

  type RegaloGetPayload<S extends boolean | null | undefined | RegaloDefaultArgs> = $Result.GetResult<Prisma.$RegaloPayload, S>

  type RegaloCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegaloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegaloCountAggregateInputType | true
    }

  export interface RegaloDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Regalo'], meta: { name: 'Regalo' } }
    /**
     * Find zero or one Regalo that matches the filter.
     * @param {RegaloFindUniqueArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegaloFindUniqueArgs>(args: SelectSubset<T, RegaloFindUniqueArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Regalo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegaloFindUniqueOrThrowArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegaloFindUniqueOrThrowArgs>(args: SelectSubset<T, RegaloFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regalo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindFirstArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegaloFindFirstArgs>(args?: SelectSubset<T, RegaloFindFirstArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Regalo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindFirstOrThrowArgs} args - Arguments to find a Regalo
     * @example
     * // Get one Regalo
     * const regalo = await prisma.regalo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegaloFindFirstOrThrowArgs>(args?: SelectSubset<T, RegaloFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regalos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regalos
     * const regalos = await prisma.regalo.findMany()
     * 
     * // Get first 10 Regalos
     * const regalos = await prisma.regalo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regaloWithIdOnly = await prisma.regalo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegaloFindManyArgs>(args?: SelectSubset<T, RegaloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Regalo.
     * @param {RegaloCreateArgs} args - Arguments to create a Regalo.
     * @example
     * // Create one Regalo
     * const Regalo = await prisma.regalo.create({
     *   data: {
     *     // ... data to create a Regalo
     *   }
     * })
     * 
     */
    create<T extends RegaloCreateArgs>(args: SelectSubset<T, RegaloCreateArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regalos.
     * @param {RegaloCreateManyArgs} args - Arguments to create many Regalos.
     * @example
     * // Create many Regalos
     * const regalo = await prisma.regalo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegaloCreateManyArgs>(args?: SelectSubset<T, RegaloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regalos and returns the data saved in the database.
     * @param {RegaloCreateManyAndReturnArgs} args - Arguments to create many Regalos.
     * @example
     * // Create many Regalos
     * const regalo = await prisma.regalo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regalos and only return the `id`
     * const regaloWithIdOnly = await prisma.regalo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegaloCreateManyAndReturnArgs>(args?: SelectSubset<T, RegaloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Regalo.
     * @param {RegaloDeleteArgs} args - Arguments to delete one Regalo.
     * @example
     * // Delete one Regalo
     * const Regalo = await prisma.regalo.delete({
     *   where: {
     *     // ... filter to delete one Regalo
     *   }
     * })
     * 
     */
    delete<T extends RegaloDeleteArgs>(args: SelectSubset<T, RegaloDeleteArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Regalo.
     * @param {RegaloUpdateArgs} args - Arguments to update one Regalo.
     * @example
     * // Update one Regalo
     * const regalo = await prisma.regalo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegaloUpdateArgs>(args: SelectSubset<T, RegaloUpdateArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regalos.
     * @param {RegaloDeleteManyArgs} args - Arguments to filter Regalos to delete.
     * @example
     * // Delete a few Regalos
     * const { count } = await prisma.regalo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegaloDeleteManyArgs>(args?: SelectSubset<T, RegaloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regalos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regalos
     * const regalo = await prisma.regalo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegaloUpdateManyArgs>(args: SelectSubset<T, RegaloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regalos and returns the data updated in the database.
     * @param {RegaloUpdateManyAndReturnArgs} args - Arguments to update many Regalos.
     * @example
     * // Update many Regalos
     * const regalo = await prisma.regalo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regalos and only return the `id`
     * const regaloWithIdOnly = await prisma.regalo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegaloUpdateManyAndReturnArgs>(args: SelectSubset<T, RegaloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Regalo.
     * @param {RegaloUpsertArgs} args - Arguments to update or create a Regalo.
     * @example
     * // Update or create a Regalo
     * const regalo = await prisma.regalo.upsert({
     *   create: {
     *     // ... data to create a Regalo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Regalo we want to update
     *   }
     * })
     */
    upsert<T extends RegaloUpsertArgs>(args: SelectSubset<T, RegaloUpsertArgs<ExtArgs>>): Prisma__RegaloClient<$Result.GetResult<Prisma.$RegaloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regalos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloCountArgs} args - Arguments to filter Regalos to count.
     * @example
     * // Count the number of Regalos
     * const count = await prisma.regalo.count({
     *   where: {
     *     // ... the filter for the Regalos we want to count
     *   }
     * })
    **/
    count<T extends RegaloCountArgs>(
      args?: Subset<T, RegaloCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegaloCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Regalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegaloAggregateArgs>(args: Subset<T, RegaloAggregateArgs>): Prisma.PrismaPromise<GetRegaloAggregateType<T>>

    /**
     * Group by Regalo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegaloGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegaloGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegaloGroupByArgs['orderBy'] }
        : { orderBy?: RegaloGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegaloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegaloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Regalo model
   */
  readonly fields: RegaloFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Regalo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegaloClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streamer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Regalo model
   */
  interface RegaloFieldRefs {
    readonly id: FieldRef<"Regalo", 'String'>
    readonly nombre: FieldRef<"Regalo", 'String'>
    readonly costo: FieldRef<"Regalo", 'Int'>
    readonly puntos: FieldRef<"Regalo", 'Int'>
    readonly icono: FieldRef<"Regalo", 'String'>
    readonly activo: FieldRef<"Regalo", 'Boolean'>
    readonly streamerId: FieldRef<"Regalo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Regalo findUnique
   */
  export type RegaloFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo findUniqueOrThrow
   */
  export type RegaloFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo findFirst
   */
  export type RegaloFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regalos.
     */
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo findFirstOrThrow
   */
  export type RegaloFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalo to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regalos.
     */
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo findMany
   */
  export type RegaloFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter, which Regalos to fetch.
     */
    where?: RegaloWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regalos to fetch.
     */
    orderBy?: RegaloOrderByWithRelationInput | RegaloOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regalos.
     */
    cursor?: RegaloWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regalos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regalos.
     */
    skip?: number
    distinct?: RegaloScalarFieldEnum | RegaloScalarFieldEnum[]
  }

  /**
   * Regalo create
   */
  export type RegaloCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The data needed to create a Regalo.
     */
    data: XOR<RegaloCreateInput, RegaloUncheckedCreateInput>
  }

  /**
   * Regalo createMany
   */
  export type RegaloCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regalos.
     */
    data: RegaloCreateManyInput | RegaloCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Regalo createManyAndReturn
   */
  export type RegaloCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * The data used to create many Regalos.
     */
    data: RegaloCreateManyInput | RegaloCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Regalo update
   */
  export type RegaloUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The data needed to update a Regalo.
     */
    data: XOR<RegaloUpdateInput, RegaloUncheckedUpdateInput>
    /**
     * Choose, which Regalo to update.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo updateMany
   */
  export type RegaloUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regalos.
     */
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyInput>
    /**
     * Filter which Regalos to update
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to update.
     */
    limit?: number
  }

  /**
   * Regalo updateManyAndReturn
   */
  export type RegaloUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * The data used to update Regalos.
     */
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyInput>
    /**
     * Filter which Regalos to update
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Regalo upsert
   */
  export type RegaloUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * The filter to search for the Regalo to update in case it exists.
     */
    where: RegaloWhereUniqueInput
    /**
     * In case the Regalo found by the `where` argument doesn't exist, create a new Regalo with this data.
     */
    create: XOR<RegaloCreateInput, RegaloUncheckedCreateInput>
    /**
     * In case the Regalo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegaloUpdateInput, RegaloUncheckedUpdateInput>
  }

  /**
   * Regalo delete
   */
  export type RegaloDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
    /**
     * Filter which Regalo to delete.
     */
    where: RegaloWhereUniqueInput
  }

  /**
   * Regalo deleteMany
   */
  export type RegaloDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regalos to delete
     */
    where?: RegaloWhereInput
    /**
     * Limit how many Regalos to delete.
     */
    limit?: number
  }

  /**
   * Regalo without action
   */
  export type RegaloDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Regalo
     */
    select?: RegaloSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Regalo
     */
    omit?: RegaloOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegaloInclude<ExtArgs> | null
  }


  /**
   * Model Stream
   */

  export type AggregateStream = {
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  export type StreamMinAggregateOutputType = {
    id: string | null
    title: string | null
    isLive: boolean | null
    userId: string | null
  }

  export type StreamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    isLive: boolean | null
    userId: string | null
  }

  export type StreamCountAggregateOutputType = {
    id: number
    title: number
    isLive: number
    userId: number
    _all: number
  }


  export type StreamMinAggregateInputType = {
    id?: true
    title?: true
    isLive?: true
    userId?: true
  }

  export type StreamMaxAggregateInputType = {
    id?: true
    title?: true
    isLive?: true
    userId?: true
  }

  export type StreamCountAggregateInputType = {
    id?: true
    title?: true
    isLive?: true
    userId?: true
    _all?: true
  }

  export type StreamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stream to aggregate.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Streams
    **/
    _count?: true | StreamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamMaxAggregateInputType
  }

  export type GetStreamAggregateType<T extends StreamAggregateArgs> = {
        [P in keyof T & keyof AggregateStream]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStream[P]>
      : GetScalarType<T[P], AggregateStream[P]>
  }




  export type StreamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamWhereInput
    orderBy?: StreamOrderByWithAggregationInput | StreamOrderByWithAggregationInput[]
    by: StreamScalarFieldEnum[] | StreamScalarFieldEnum
    having?: StreamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamCountAggregateInputType | true
    _min?: StreamMinAggregateInputType
    _max?: StreamMaxAggregateInputType
  }

  export type StreamGroupByOutputType = {
    id: string
    title: string
    isLive: boolean
    userId: string
    _count: StreamCountAggregateOutputType | null
    _min: StreamMinAggregateOutputType | null
    _max: StreamMaxAggregateOutputType | null
  }

  type GetStreamGroupByPayload<T extends StreamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamGroupByOutputType[P]>
            : GetScalarType<T[P], StreamGroupByOutputType[P]>
        }
      >
    >


  export type StreamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isLive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Stream$tagsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isLive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    isLive?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stream"]>

  export type StreamSelectScalar = {
    id?: boolean
    title?: boolean
    isLive?: boolean
    userId?: boolean
  }

  export type StreamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "isLive" | "userId", ExtArgs["result"]["stream"]>
  export type StreamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Stream$tagsArgs<ExtArgs>
    _count?: boolean | StreamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StreamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StreamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StreamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stream"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$StreamTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      isLive: boolean
      userId: string
    }, ExtArgs["result"]["stream"]>
    composites: {}
  }

  type StreamGetPayload<S extends boolean | null | undefined | StreamDefaultArgs> = $Result.GetResult<Prisma.$StreamPayload, S>

  type StreamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamCountAggregateInputType | true
    }

  export interface StreamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stream'], meta: { name: 'Stream' } }
    /**
     * Find zero or one Stream that matches the filter.
     * @param {StreamFindUniqueArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamFindUniqueArgs>(args: SelectSubset<T, StreamFindUniqueArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stream that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamFindUniqueOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamFindFirstArgs>(args?: SelectSubset<T, StreamFindFirstArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stream that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindFirstOrThrowArgs} args - Arguments to find a Stream
     * @example
     * // Get one Stream
     * const stream = await prisma.stream.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Streams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Streams
     * const streams = await prisma.stream.findMany()
     * 
     * // Get first 10 Streams
     * const streams = await prisma.stream.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const streamWithIdOnly = await prisma.stream.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StreamFindManyArgs>(args?: SelectSubset<T, StreamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stream.
     * @param {StreamCreateArgs} args - Arguments to create a Stream.
     * @example
     * // Create one Stream
     * const Stream = await prisma.stream.create({
     *   data: {
     *     // ... data to create a Stream
     *   }
     * })
     * 
     */
    create<T extends StreamCreateArgs>(args: SelectSubset<T, StreamCreateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Streams.
     * @param {StreamCreateManyArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamCreateManyArgs>(args?: SelectSubset<T, StreamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Streams and returns the data saved in the database.
     * @param {StreamCreateManyAndReturnArgs} args - Arguments to create many Streams.
     * @example
     * // Create many Streams
     * const stream = await prisma.stream.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stream.
     * @param {StreamDeleteArgs} args - Arguments to delete one Stream.
     * @example
     * // Delete one Stream
     * const Stream = await prisma.stream.delete({
     *   where: {
     *     // ... filter to delete one Stream
     *   }
     * })
     * 
     */
    delete<T extends StreamDeleteArgs>(args: SelectSubset<T, StreamDeleteArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stream.
     * @param {StreamUpdateArgs} args - Arguments to update one Stream.
     * @example
     * // Update one Stream
     * const stream = await prisma.stream.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamUpdateArgs>(args: SelectSubset<T, StreamUpdateArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Streams.
     * @param {StreamDeleteManyArgs} args - Arguments to filter Streams to delete.
     * @example
     * // Delete a few Streams
     * const { count } = await prisma.stream.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamDeleteManyArgs>(args?: SelectSubset<T, StreamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamUpdateManyArgs>(args: SelectSubset<T, StreamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Streams and returns the data updated in the database.
     * @param {StreamUpdateManyAndReturnArgs} args - Arguments to update many Streams.
     * @example
     * // Update many Streams
     * const stream = await prisma.stream.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Streams and only return the `id`
     * const streamWithIdOnly = await prisma.stream.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stream.
     * @param {StreamUpsertArgs} args - Arguments to update or create a Stream.
     * @example
     * // Update or create a Stream
     * const stream = await prisma.stream.upsert({
     *   create: {
     *     // ... data to create a Stream
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stream we want to update
     *   }
     * })
     */
    upsert<T extends StreamUpsertArgs>(args: SelectSubset<T, StreamUpsertArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Streams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamCountArgs} args - Arguments to filter Streams to count.
     * @example
     * // Count the number of Streams
     * const count = await prisma.stream.count({
     *   where: {
     *     // ... the filter for the Streams we want to count
     *   }
     * })
    **/
    count<T extends StreamCountArgs>(
      args?: Subset<T, StreamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamAggregateArgs>(args: Subset<T, StreamAggregateArgs>): Prisma.PrismaPromise<GetStreamAggregateType<T>>

    /**
     * Group by Stream.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamGroupByArgs['orderBy'] }
        : { orderBy?: StreamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stream model
   */
  readonly fields: StreamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stream.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Stream$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Stream$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stream model
   */
  interface StreamFieldRefs {
    readonly id: FieldRef<"Stream", 'String'>
    readonly title: FieldRef<"Stream", 'String'>
    readonly isLive: FieldRef<"Stream", 'Boolean'>
    readonly userId: FieldRef<"Stream", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Stream findUnique
   */
  export type StreamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findUniqueOrThrow
   */
  export type StreamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream findFirst
   */
  export type StreamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findFirstOrThrow
   */
  export type StreamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Stream to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Streams.
     */
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream findMany
   */
  export type StreamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter, which Streams to fetch.
     */
    where?: StreamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Streams to fetch.
     */
    orderBy?: StreamOrderByWithRelationInput | StreamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Streams.
     */
    cursor?: StreamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Streams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Streams.
     */
    skip?: number
    distinct?: StreamScalarFieldEnum | StreamScalarFieldEnum[]
  }

  /**
   * Stream create
   */
  export type StreamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to create a Stream.
     */
    data: XOR<StreamCreateInput, StreamUncheckedCreateInput>
  }

  /**
   * Stream createMany
   */
  export type StreamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stream createManyAndReturn
   */
  export type StreamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to create many Streams.
     */
    data: StreamCreateManyInput | StreamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stream update
   */
  export type StreamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The data needed to update a Stream.
     */
    data: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
    /**
     * Choose, which Stream to update.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream updateMany
   */
  export type StreamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
  }

  /**
   * Stream updateManyAndReturn
   */
  export type StreamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * The data used to update Streams.
     */
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyInput>
    /**
     * Filter which Streams to update
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stream upsert
   */
  export type StreamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * The filter to search for the Stream to update in case it exists.
     */
    where: StreamWhereUniqueInput
    /**
     * In case the Stream found by the `where` argument doesn't exist, create a new Stream with this data.
     */
    create: XOR<StreamCreateInput, StreamUncheckedCreateInput>
    /**
     * In case the Stream was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamUpdateInput, StreamUncheckedUpdateInput>
  }

  /**
   * Stream delete
   */
  export type StreamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
    /**
     * Filter which Stream to delete.
     */
    where: StreamWhereUniqueInput
  }

  /**
   * Stream deleteMany
   */
  export type StreamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Streams to delete
     */
    where?: StreamWhereInput
    /**
     * Limit how many Streams to delete.
     */
    limit?: number
  }

  /**
   * Stream.tags
   */
  export type Stream$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    where?: StreamTagWhereInput
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    cursor?: StreamTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamTagScalarFieldEnum | StreamTagScalarFieldEnum[]
  }

  /**
   * Stream without action
   */
  export type StreamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stream
     */
    select?: StreamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stream
     */
    omit?: StreamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: string
    name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    streams?: boolean | Tag$streamsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    streams?: boolean | Tag$streamsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      streams: Prisma.$StreamTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    streams<T extends Tag$streamsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$streamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'String'>
    readonly name: FieldRef<"Tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.streams
   */
  export type Tag$streamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    where?: StreamTagWhereInput
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    cursor?: StreamTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StreamTagScalarFieldEnum | StreamTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model StreamTag
   */

  export type AggregateStreamTag = {
    _count: StreamTagCountAggregateOutputType | null
    _min: StreamTagMinAggregateOutputType | null
    _max: StreamTagMaxAggregateOutputType | null
  }

  export type StreamTagMinAggregateOutputType = {
    streamId: string | null
    tagId: string | null
  }

  export type StreamTagMaxAggregateOutputType = {
    streamId: string | null
    tagId: string | null
  }

  export type StreamTagCountAggregateOutputType = {
    streamId: number
    tagId: number
    _all: number
  }


  export type StreamTagMinAggregateInputType = {
    streamId?: true
    tagId?: true
  }

  export type StreamTagMaxAggregateInputType = {
    streamId?: true
    tagId?: true
  }

  export type StreamTagCountAggregateInputType = {
    streamId?: true
    tagId?: true
    _all?: true
  }

  export type StreamTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamTag to aggregate.
     */
    where?: StreamTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamTags to fetch.
     */
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StreamTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StreamTags
    **/
    _count?: true | StreamTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StreamTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StreamTagMaxAggregateInputType
  }

  export type GetStreamTagAggregateType<T extends StreamTagAggregateArgs> = {
        [P in keyof T & keyof AggregateStreamTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStreamTag[P]>
      : GetScalarType<T[P], AggregateStreamTag[P]>
  }




  export type StreamTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StreamTagWhereInput
    orderBy?: StreamTagOrderByWithAggregationInput | StreamTagOrderByWithAggregationInput[]
    by: StreamTagScalarFieldEnum[] | StreamTagScalarFieldEnum
    having?: StreamTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StreamTagCountAggregateInputType | true
    _min?: StreamTagMinAggregateInputType
    _max?: StreamTagMaxAggregateInputType
  }

  export type StreamTagGroupByOutputType = {
    streamId: string
    tagId: string
    _count: StreamTagCountAggregateOutputType | null
    _min: StreamTagMinAggregateOutputType | null
    _max: StreamTagMaxAggregateOutputType | null
  }

  type GetStreamTagGroupByPayload<T extends StreamTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StreamTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StreamTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StreamTagGroupByOutputType[P]>
            : GetScalarType<T[P], StreamTagGroupByOutputType[P]>
        }
      >
    >


  export type StreamTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    streamId?: boolean
    tagId?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamTag"]>

  export type StreamTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    streamId?: boolean
    tagId?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamTag"]>

  export type StreamTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    streamId?: boolean
    tagId?: boolean
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["streamTag"]>

  export type StreamTagSelectScalar = {
    streamId?: boolean
    tagId?: boolean
  }

  export type StreamTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"streamId" | "tagId", ExtArgs["result"]["streamTag"]>
  export type StreamTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type StreamTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type StreamTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stream?: boolean | StreamDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $StreamTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StreamTag"
    objects: {
      stream: Prisma.$StreamPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      streamId: string
      tagId: string
    }, ExtArgs["result"]["streamTag"]>
    composites: {}
  }

  type StreamTagGetPayload<S extends boolean | null | undefined | StreamTagDefaultArgs> = $Result.GetResult<Prisma.$StreamTagPayload, S>

  type StreamTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StreamTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StreamTagCountAggregateInputType | true
    }

  export interface StreamTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StreamTag'], meta: { name: 'StreamTag' } }
    /**
     * Find zero or one StreamTag that matches the filter.
     * @param {StreamTagFindUniqueArgs} args - Arguments to find a StreamTag
     * @example
     * // Get one StreamTag
     * const streamTag = await prisma.streamTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StreamTagFindUniqueArgs>(args: SelectSubset<T, StreamTagFindUniqueArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StreamTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StreamTagFindUniqueOrThrowArgs} args - Arguments to find a StreamTag
     * @example
     * // Get one StreamTag
     * const streamTag = await prisma.streamTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StreamTagFindUniqueOrThrowArgs>(args: SelectSubset<T, StreamTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagFindFirstArgs} args - Arguments to find a StreamTag
     * @example
     * // Get one StreamTag
     * const streamTag = await prisma.streamTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StreamTagFindFirstArgs>(args?: SelectSubset<T, StreamTagFindFirstArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StreamTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagFindFirstOrThrowArgs} args - Arguments to find a StreamTag
     * @example
     * // Get one StreamTag
     * const streamTag = await prisma.streamTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StreamTagFindFirstOrThrowArgs>(args?: SelectSubset<T, StreamTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StreamTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StreamTags
     * const streamTags = await prisma.streamTag.findMany()
     * 
     * // Get first 10 StreamTags
     * const streamTags = await prisma.streamTag.findMany({ take: 10 })
     * 
     * // Only select the `streamId`
     * const streamTagWithStreamIdOnly = await prisma.streamTag.findMany({ select: { streamId: true } })
     * 
     */
    findMany<T extends StreamTagFindManyArgs>(args?: SelectSubset<T, StreamTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StreamTag.
     * @param {StreamTagCreateArgs} args - Arguments to create a StreamTag.
     * @example
     * // Create one StreamTag
     * const StreamTag = await prisma.streamTag.create({
     *   data: {
     *     // ... data to create a StreamTag
     *   }
     * })
     * 
     */
    create<T extends StreamTagCreateArgs>(args: SelectSubset<T, StreamTagCreateArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StreamTags.
     * @param {StreamTagCreateManyArgs} args - Arguments to create many StreamTags.
     * @example
     * // Create many StreamTags
     * const streamTag = await prisma.streamTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StreamTagCreateManyArgs>(args?: SelectSubset<T, StreamTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StreamTags and returns the data saved in the database.
     * @param {StreamTagCreateManyAndReturnArgs} args - Arguments to create many StreamTags.
     * @example
     * // Create many StreamTags
     * const streamTag = await prisma.streamTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StreamTags and only return the `streamId`
     * const streamTagWithStreamIdOnly = await prisma.streamTag.createManyAndReturn({
     *   select: { streamId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StreamTagCreateManyAndReturnArgs>(args?: SelectSubset<T, StreamTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StreamTag.
     * @param {StreamTagDeleteArgs} args - Arguments to delete one StreamTag.
     * @example
     * // Delete one StreamTag
     * const StreamTag = await prisma.streamTag.delete({
     *   where: {
     *     // ... filter to delete one StreamTag
     *   }
     * })
     * 
     */
    delete<T extends StreamTagDeleteArgs>(args: SelectSubset<T, StreamTagDeleteArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StreamTag.
     * @param {StreamTagUpdateArgs} args - Arguments to update one StreamTag.
     * @example
     * // Update one StreamTag
     * const streamTag = await prisma.streamTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StreamTagUpdateArgs>(args: SelectSubset<T, StreamTagUpdateArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StreamTags.
     * @param {StreamTagDeleteManyArgs} args - Arguments to filter StreamTags to delete.
     * @example
     * // Delete a few StreamTags
     * const { count } = await prisma.streamTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StreamTagDeleteManyArgs>(args?: SelectSubset<T, StreamTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StreamTags
     * const streamTag = await prisma.streamTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StreamTagUpdateManyArgs>(args: SelectSubset<T, StreamTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StreamTags and returns the data updated in the database.
     * @param {StreamTagUpdateManyAndReturnArgs} args - Arguments to update many StreamTags.
     * @example
     * // Update many StreamTags
     * const streamTag = await prisma.streamTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StreamTags and only return the `streamId`
     * const streamTagWithStreamIdOnly = await prisma.streamTag.updateManyAndReturn({
     *   select: { streamId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StreamTagUpdateManyAndReturnArgs>(args: SelectSubset<T, StreamTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StreamTag.
     * @param {StreamTagUpsertArgs} args - Arguments to update or create a StreamTag.
     * @example
     * // Update or create a StreamTag
     * const streamTag = await prisma.streamTag.upsert({
     *   create: {
     *     // ... data to create a StreamTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StreamTag we want to update
     *   }
     * })
     */
    upsert<T extends StreamTagUpsertArgs>(args: SelectSubset<T, StreamTagUpsertArgs<ExtArgs>>): Prisma__StreamTagClient<$Result.GetResult<Prisma.$StreamTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StreamTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagCountArgs} args - Arguments to filter StreamTags to count.
     * @example
     * // Count the number of StreamTags
     * const count = await prisma.streamTag.count({
     *   where: {
     *     // ... the filter for the StreamTags we want to count
     *   }
     * })
    **/
    count<T extends StreamTagCountArgs>(
      args?: Subset<T, StreamTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StreamTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StreamTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StreamTagAggregateArgs>(args: Subset<T, StreamTagAggregateArgs>): Prisma.PrismaPromise<GetStreamTagAggregateType<T>>

    /**
     * Group by StreamTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StreamTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StreamTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StreamTagGroupByArgs['orderBy'] }
        : { orderBy?: StreamTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StreamTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStreamTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StreamTag model
   */
  readonly fields: StreamTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StreamTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StreamTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stream<T extends StreamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StreamDefaultArgs<ExtArgs>>): Prisma__StreamClient<$Result.GetResult<Prisma.$StreamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StreamTag model
   */
  interface StreamTagFieldRefs {
    readonly streamId: FieldRef<"StreamTag", 'String'>
    readonly tagId: FieldRef<"StreamTag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StreamTag findUnique
   */
  export type StreamTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter, which StreamTag to fetch.
     */
    where: StreamTagWhereUniqueInput
  }

  /**
   * StreamTag findUniqueOrThrow
   */
  export type StreamTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter, which StreamTag to fetch.
     */
    where: StreamTagWhereUniqueInput
  }

  /**
   * StreamTag findFirst
   */
  export type StreamTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter, which StreamTag to fetch.
     */
    where?: StreamTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamTags to fetch.
     */
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamTags.
     */
    cursor?: StreamTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamTags.
     */
    distinct?: StreamTagScalarFieldEnum | StreamTagScalarFieldEnum[]
  }

  /**
   * StreamTag findFirstOrThrow
   */
  export type StreamTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter, which StreamTag to fetch.
     */
    where?: StreamTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamTags to fetch.
     */
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StreamTags.
     */
    cursor?: StreamTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StreamTags.
     */
    distinct?: StreamTagScalarFieldEnum | StreamTagScalarFieldEnum[]
  }

  /**
   * StreamTag findMany
   */
  export type StreamTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter, which StreamTags to fetch.
     */
    where?: StreamTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StreamTags to fetch.
     */
    orderBy?: StreamTagOrderByWithRelationInput | StreamTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StreamTags.
     */
    cursor?: StreamTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StreamTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StreamTags.
     */
    skip?: number
    distinct?: StreamTagScalarFieldEnum | StreamTagScalarFieldEnum[]
  }

  /**
   * StreamTag create
   */
  export type StreamTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * The data needed to create a StreamTag.
     */
    data: XOR<StreamTagCreateInput, StreamTagUncheckedCreateInput>
  }

  /**
   * StreamTag createMany
   */
  export type StreamTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StreamTags.
     */
    data: StreamTagCreateManyInput | StreamTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StreamTag createManyAndReturn
   */
  export type StreamTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * The data used to create many StreamTags.
     */
    data: StreamTagCreateManyInput | StreamTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamTag update
   */
  export type StreamTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * The data needed to update a StreamTag.
     */
    data: XOR<StreamTagUpdateInput, StreamTagUncheckedUpdateInput>
    /**
     * Choose, which StreamTag to update.
     */
    where: StreamTagWhereUniqueInput
  }

  /**
   * StreamTag updateMany
   */
  export type StreamTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StreamTags.
     */
    data: XOR<StreamTagUpdateManyMutationInput, StreamTagUncheckedUpdateManyInput>
    /**
     * Filter which StreamTags to update
     */
    where?: StreamTagWhereInput
    /**
     * Limit how many StreamTags to update.
     */
    limit?: number
  }

  /**
   * StreamTag updateManyAndReturn
   */
  export type StreamTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * The data used to update StreamTags.
     */
    data: XOR<StreamTagUpdateManyMutationInput, StreamTagUncheckedUpdateManyInput>
    /**
     * Filter which StreamTags to update
     */
    where?: StreamTagWhereInput
    /**
     * Limit how many StreamTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StreamTag upsert
   */
  export type StreamTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * The filter to search for the StreamTag to update in case it exists.
     */
    where: StreamTagWhereUniqueInput
    /**
     * In case the StreamTag found by the `where` argument doesn't exist, create a new StreamTag with this data.
     */
    create: XOR<StreamTagCreateInput, StreamTagUncheckedCreateInput>
    /**
     * In case the StreamTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StreamTagUpdateInput, StreamTagUncheckedUpdateInput>
  }

  /**
   * StreamTag delete
   */
  export type StreamTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
    /**
     * Filter which StreamTag to delete.
     */
    where: StreamTagWhereUniqueInput
  }

  /**
   * StreamTag deleteMany
   */
  export type StreamTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StreamTags to delete
     */
    where?: StreamTagWhereInput
    /**
     * Limit how many StreamTags to delete.
     */
    limit?: number
  }

  /**
   * StreamTag without action
   */
  export type StreamTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StreamTag
     */
    select?: StreamTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StreamTag
     */
    omit?: StreamTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StreamTagInclude<ExtArgs> | null
  }


  /**
   * Model Monedas
   */

  export type AggregateMonedas = {
    _count: MonedasCountAggregateOutputType | null
    _avg: MonedasAvgAggregateOutputType | null
    _sum: MonedasSumAggregateOutputType | null
    _min: MonedasMinAggregateOutputType | null
    _max: MonedasMaxAggregateOutputType | null
  }

  export type MonedasAvgAggregateOutputType = {
    id: number | null
    saldo: number | null
  }

  export type MonedasSumAggregateOutputType = {
    id: number | null
    saldo: number | null
  }

  export type MonedasMinAggregateOutputType = {
    id: number | null
    saldo: number | null
    usuarioId: string | null
  }

  export type MonedasMaxAggregateOutputType = {
    id: number | null
    saldo: number | null
    usuarioId: string | null
  }

  export type MonedasCountAggregateOutputType = {
    id: number
    saldo: number
    usuarioId: number
    _all: number
  }


  export type MonedasAvgAggregateInputType = {
    id?: true
    saldo?: true
  }

  export type MonedasSumAggregateInputType = {
    id?: true
    saldo?: true
  }

  export type MonedasMinAggregateInputType = {
    id?: true
    saldo?: true
    usuarioId?: true
  }

  export type MonedasMaxAggregateInputType = {
    id?: true
    saldo?: true
    usuarioId?: true
  }

  export type MonedasCountAggregateInputType = {
    id?: true
    saldo?: true
    usuarioId?: true
    _all?: true
  }

  export type MonedasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monedas to aggregate.
     */
    where?: MonedasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monedas to fetch.
     */
    orderBy?: MonedasOrderByWithRelationInput | MonedasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonedasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monedas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monedas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Monedas
    **/
    _count?: true | MonedasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonedasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonedasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonedasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonedasMaxAggregateInputType
  }

  export type GetMonedasAggregateType<T extends MonedasAggregateArgs> = {
        [P in keyof T & keyof AggregateMonedas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonedas[P]>
      : GetScalarType<T[P], AggregateMonedas[P]>
  }




  export type MonedasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonedasWhereInput
    orderBy?: MonedasOrderByWithAggregationInput | MonedasOrderByWithAggregationInput[]
    by: MonedasScalarFieldEnum[] | MonedasScalarFieldEnum
    having?: MonedasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonedasCountAggregateInputType | true
    _avg?: MonedasAvgAggregateInputType
    _sum?: MonedasSumAggregateInputType
    _min?: MonedasMinAggregateInputType
    _max?: MonedasMaxAggregateInputType
  }

  export type MonedasGroupByOutputType = {
    id: number
    saldo: number
    usuarioId: string
    _count: MonedasCountAggregateOutputType | null
    _avg: MonedasAvgAggregateOutputType | null
    _sum: MonedasSumAggregateOutputType | null
    _min: MonedasMinAggregateOutputType | null
    _max: MonedasMaxAggregateOutputType | null
  }

  type GetMonedasGroupByPayload<T extends MonedasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonedasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonedasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonedasGroupByOutputType[P]>
            : GetScalarType<T[P], MonedasGroupByOutputType[P]>
        }
      >
    >


  export type MonedasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldo?: boolean
    usuarioId?: boolean
  }, ExtArgs["result"]["monedas"]>

  export type MonedasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldo?: boolean
    usuarioId?: boolean
  }, ExtArgs["result"]["monedas"]>

  export type MonedasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saldo?: boolean
    usuarioId?: boolean
  }, ExtArgs["result"]["monedas"]>

  export type MonedasSelectScalar = {
    id?: boolean
    saldo?: boolean
    usuarioId?: boolean
  }

  export type MonedasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saldo" | "usuarioId", ExtArgs["result"]["monedas"]>

  export type $MonedasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Monedas"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      saldo: number
      usuarioId: string
    }, ExtArgs["result"]["monedas"]>
    composites: {}
  }

  type MonedasGetPayload<S extends boolean | null | undefined | MonedasDefaultArgs> = $Result.GetResult<Prisma.$MonedasPayload, S>

  type MonedasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonedasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonedasCountAggregateInputType | true
    }

  export interface MonedasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Monedas'], meta: { name: 'Monedas' } }
    /**
     * Find zero or one Monedas that matches the filter.
     * @param {MonedasFindUniqueArgs} args - Arguments to find a Monedas
     * @example
     * // Get one Monedas
     * const monedas = await prisma.monedas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonedasFindUniqueArgs>(args: SelectSubset<T, MonedasFindUniqueArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Monedas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonedasFindUniqueOrThrowArgs} args - Arguments to find a Monedas
     * @example
     * // Get one Monedas
     * const monedas = await prisma.monedas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonedasFindUniqueOrThrowArgs>(args: SelectSubset<T, MonedasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monedas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasFindFirstArgs} args - Arguments to find a Monedas
     * @example
     * // Get one Monedas
     * const monedas = await prisma.monedas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonedasFindFirstArgs>(args?: SelectSubset<T, MonedasFindFirstArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Monedas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasFindFirstOrThrowArgs} args - Arguments to find a Monedas
     * @example
     * // Get one Monedas
     * const monedas = await prisma.monedas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonedasFindFirstOrThrowArgs>(args?: SelectSubset<T, MonedasFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Monedas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Monedas
     * const monedas = await prisma.monedas.findMany()
     * 
     * // Get first 10 Monedas
     * const monedas = await prisma.monedas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monedasWithIdOnly = await prisma.monedas.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonedasFindManyArgs>(args?: SelectSubset<T, MonedasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Monedas.
     * @param {MonedasCreateArgs} args - Arguments to create a Monedas.
     * @example
     * // Create one Monedas
     * const Monedas = await prisma.monedas.create({
     *   data: {
     *     // ... data to create a Monedas
     *   }
     * })
     * 
     */
    create<T extends MonedasCreateArgs>(args: SelectSubset<T, MonedasCreateArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Monedas.
     * @param {MonedasCreateManyArgs} args - Arguments to create many Monedas.
     * @example
     * // Create many Monedas
     * const monedas = await prisma.monedas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonedasCreateManyArgs>(args?: SelectSubset<T, MonedasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Monedas and returns the data saved in the database.
     * @param {MonedasCreateManyAndReturnArgs} args - Arguments to create many Monedas.
     * @example
     * // Create many Monedas
     * const monedas = await prisma.monedas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Monedas and only return the `id`
     * const monedasWithIdOnly = await prisma.monedas.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonedasCreateManyAndReturnArgs>(args?: SelectSubset<T, MonedasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Monedas.
     * @param {MonedasDeleteArgs} args - Arguments to delete one Monedas.
     * @example
     * // Delete one Monedas
     * const Monedas = await prisma.monedas.delete({
     *   where: {
     *     // ... filter to delete one Monedas
     *   }
     * })
     * 
     */
    delete<T extends MonedasDeleteArgs>(args: SelectSubset<T, MonedasDeleteArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Monedas.
     * @param {MonedasUpdateArgs} args - Arguments to update one Monedas.
     * @example
     * // Update one Monedas
     * const monedas = await prisma.monedas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonedasUpdateArgs>(args: SelectSubset<T, MonedasUpdateArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Monedas.
     * @param {MonedasDeleteManyArgs} args - Arguments to filter Monedas to delete.
     * @example
     * // Delete a few Monedas
     * const { count } = await prisma.monedas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonedasDeleteManyArgs>(args?: SelectSubset<T, MonedasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monedas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Monedas
     * const monedas = await prisma.monedas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonedasUpdateManyArgs>(args: SelectSubset<T, MonedasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Monedas and returns the data updated in the database.
     * @param {MonedasUpdateManyAndReturnArgs} args - Arguments to update many Monedas.
     * @example
     * // Update many Monedas
     * const monedas = await prisma.monedas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Monedas and only return the `id`
     * const monedasWithIdOnly = await prisma.monedas.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonedasUpdateManyAndReturnArgs>(args: SelectSubset<T, MonedasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Monedas.
     * @param {MonedasUpsertArgs} args - Arguments to update or create a Monedas.
     * @example
     * // Update or create a Monedas
     * const monedas = await prisma.monedas.upsert({
     *   create: {
     *     // ... data to create a Monedas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Monedas we want to update
     *   }
     * })
     */
    upsert<T extends MonedasUpsertArgs>(args: SelectSubset<T, MonedasUpsertArgs<ExtArgs>>): Prisma__MonedasClient<$Result.GetResult<Prisma.$MonedasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Monedas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasCountArgs} args - Arguments to filter Monedas to count.
     * @example
     * // Count the number of Monedas
     * const count = await prisma.monedas.count({
     *   where: {
     *     // ... the filter for the Monedas we want to count
     *   }
     * })
    **/
    count<T extends MonedasCountArgs>(
      args?: Subset<T, MonedasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonedasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Monedas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonedasAggregateArgs>(args: Subset<T, MonedasAggregateArgs>): Prisma.PrismaPromise<GetMonedasAggregateType<T>>

    /**
     * Group by Monedas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonedasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonedasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonedasGroupByArgs['orderBy'] }
        : { orderBy?: MonedasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonedasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonedasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Monedas model
   */
  readonly fields: MonedasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Monedas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonedasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Monedas model
   */
  interface MonedasFieldRefs {
    readonly id: FieldRef<"Monedas", 'Int'>
    readonly saldo: FieldRef<"Monedas", 'Int'>
    readonly usuarioId: FieldRef<"Monedas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Monedas findUnique
   */
  export type MonedasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter, which Monedas to fetch.
     */
    where: MonedasWhereUniqueInput
  }

  /**
   * Monedas findUniqueOrThrow
   */
  export type MonedasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter, which Monedas to fetch.
     */
    where: MonedasWhereUniqueInput
  }

  /**
   * Monedas findFirst
   */
  export type MonedasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter, which Monedas to fetch.
     */
    where?: MonedasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monedas to fetch.
     */
    orderBy?: MonedasOrderByWithRelationInput | MonedasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monedas.
     */
    cursor?: MonedasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monedas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monedas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monedas.
     */
    distinct?: MonedasScalarFieldEnum | MonedasScalarFieldEnum[]
  }

  /**
   * Monedas findFirstOrThrow
   */
  export type MonedasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter, which Monedas to fetch.
     */
    where?: MonedasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monedas to fetch.
     */
    orderBy?: MonedasOrderByWithRelationInput | MonedasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Monedas.
     */
    cursor?: MonedasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monedas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monedas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Monedas.
     */
    distinct?: MonedasScalarFieldEnum | MonedasScalarFieldEnum[]
  }

  /**
   * Monedas findMany
   */
  export type MonedasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter, which Monedas to fetch.
     */
    where?: MonedasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Monedas to fetch.
     */
    orderBy?: MonedasOrderByWithRelationInput | MonedasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Monedas.
     */
    cursor?: MonedasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Monedas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Monedas.
     */
    skip?: number
    distinct?: MonedasScalarFieldEnum | MonedasScalarFieldEnum[]
  }

  /**
   * Monedas create
   */
  export type MonedasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * The data needed to create a Monedas.
     */
    data: XOR<MonedasCreateInput, MonedasUncheckedCreateInput>
  }

  /**
   * Monedas createMany
   */
  export type MonedasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Monedas.
     */
    data: MonedasCreateManyInput | MonedasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monedas createManyAndReturn
   */
  export type MonedasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * The data used to create many Monedas.
     */
    data: MonedasCreateManyInput | MonedasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Monedas update
   */
  export type MonedasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * The data needed to update a Monedas.
     */
    data: XOR<MonedasUpdateInput, MonedasUncheckedUpdateInput>
    /**
     * Choose, which Monedas to update.
     */
    where: MonedasWhereUniqueInput
  }

  /**
   * Monedas updateMany
   */
  export type MonedasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Monedas.
     */
    data: XOR<MonedasUpdateManyMutationInput, MonedasUncheckedUpdateManyInput>
    /**
     * Filter which Monedas to update
     */
    where?: MonedasWhereInput
    /**
     * Limit how many Monedas to update.
     */
    limit?: number
  }

  /**
   * Monedas updateManyAndReturn
   */
  export type MonedasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * The data used to update Monedas.
     */
    data: XOR<MonedasUpdateManyMutationInput, MonedasUncheckedUpdateManyInput>
    /**
     * Filter which Monedas to update
     */
    where?: MonedasWhereInput
    /**
     * Limit how many Monedas to update.
     */
    limit?: number
  }

  /**
   * Monedas upsert
   */
  export type MonedasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * The filter to search for the Monedas to update in case it exists.
     */
    where: MonedasWhereUniqueInput
    /**
     * In case the Monedas found by the `where` argument doesn't exist, create a new Monedas with this data.
     */
    create: XOR<MonedasCreateInput, MonedasUncheckedCreateInput>
    /**
     * In case the Monedas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonedasUpdateInput, MonedasUncheckedUpdateInput>
  }

  /**
   * Monedas delete
   */
  export type MonedasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
    /**
     * Filter which Monedas to delete.
     */
    where: MonedasWhereUniqueInput
  }

  /**
   * Monedas deleteMany
   */
  export type MonedasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Monedas to delete
     */
    where?: MonedasWhereInput
    /**
     * Limit how many Monedas to delete.
     */
    limit?: number
  }

  /**
   * Monedas without action
   */
  export type MonedasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Monedas
     */
    select?: MonedasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Monedas
     */
    omit?: MonedasOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    coins: 'coins',
    points: 'points',
    streamingHours: 'streamingHours',
    currentLevelId: 'currentLevelId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StreamerLevelScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    puntosRequeridos: 'puntosRequeridos',
    recompensa: 'recompensa',
    image: 'image'
  };

  export type StreamerLevelScalarFieldEnum = (typeof StreamerLevelScalarFieldEnum)[keyof typeof StreamerLevelScalarFieldEnum]


  export const RegaloScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    costo: 'costo',
    puntos: 'puntos',
    icono: 'icono',
    activo: 'activo',
    streamerId: 'streamerId'
  };

  export type RegaloScalarFieldEnum = (typeof RegaloScalarFieldEnum)[keyof typeof RegaloScalarFieldEnum]


  export const StreamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    isLive: 'isLive',
    userId: 'userId'
  };

  export type StreamScalarFieldEnum = (typeof StreamScalarFieldEnum)[keyof typeof StreamScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const StreamTagScalarFieldEnum: {
    streamId: 'streamId',
    tagId: 'tagId'
  };

  export type StreamTagScalarFieldEnum = (typeof StreamTagScalarFieldEnum)[keyof typeof StreamTagScalarFieldEnum]


  export const MonedasScalarFieldEnum: {
    id: 'id',
    saldo: 'saldo',
    usuarioId: 'usuarioId'
  };

  export type MonedasScalarFieldEnum = (typeof MonedasScalarFieldEnum)[keyof typeof MonedasScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    coins?: IntFilter<"User"> | number
    points?: IntFilter<"User"> | number
    streamingHours?: FloatFilter<"User"> | number
    currentLevelId?: StringNullableFilter<"User"> | string | null
    currentLevel?: XOR<StreamerLevelNullableScalarRelationFilter, StreamerLevelWhereInput> | null
    streams?: StreamListRelationFilter
    regalosCreados?: RegaloListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
    currentLevelId?: SortOrderInput | SortOrder
    currentLevel?: StreamerLevelOrderByWithRelationInput
    streams?: StreamOrderByRelationAggregateInput
    regalosCreados?: RegaloOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    coins?: IntFilter<"User"> | number
    points?: IntFilter<"User"> | number
    streamingHours?: FloatFilter<"User"> | number
    currentLevelId?: StringNullableFilter<"User"> | string | null
    currentLevel?: XOR<StreamerLevelNullableScalarRelationFilter, StreamerLevelWhereInput> | null
    streams?: StreamListRelationFilter
    regalosCreados?: RegaloListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
    currentLevelId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    coins?: IntWithAggregatesFilter<"User"> | number
    points?: IntWithAggregatesFilter<"User"> | number
    streamingHours?: FloatWithAggregatesFilter<"User"> | number
    currentLevelId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type StreamerLevelWhereInput = {
    AND?: StreamerLevelWhereInput | StreamerLevelWhereInput[]
    OR?: StreamerLevelWhereInput[]
    NOT?: StreamerLevelWhereInput | StreamerLevelWhereInput[]
    id?: StringFilter<"StreamerLevel"> | string
    nombre?: StringFilter<"StreamerLevel"> | string
    puntosRequeridos?: IntFilter<"StreamerLevel"> | number
    recompensa?: StringNullableFilter<"StreamerLevel"> | string | null
    image?: StringNullableFilter<"StreamerLevel"> | string | null
    users?: UserListRelationFilter
  }

  export type StreamerLevelOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    puntosRequeridos?: SortOrder
    recompensa?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type StreamerLevelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nombre?: string
    AND?: StreamerLevelWhereInput | StreamerLevelWhereInput[]
    OR?: StreamerLevelWhereInput[]
    NOT?: StreamerLevelWhereInput | StreamerLevelWhereInput[]
    puntosRequeridos?: IntFilter<"StreamerLevel"> | number
    recompensa?: StringNullableFilter<"StreamerLevel"> | string | null
    image?: StringNullableFilter<"StreamerLevel"> | string | null
    users?: UserListRelationFilter
  }, "id" | "nombre">

  export type StreamerLevelOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    puntosRequeridos?: SortOrder
    recompensa?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    _count?: StreamerLevelCountOrderByAggregateInput
    _avg?: StreamerLevelAvgOrderByAggregateInput
    _max?: StreamerLevelMaxOrderByAggregateInput
    _min?: StreamerLevelMinOrderByAggregateInput
    _sum?: StreamerLevelSumOrderByAggregateInput
  }

  export type StreamerLevelScalarWhereWithAggregatesInput = {
    AND?: StreamerLevelScalarWhereWithAggregatesInput | StreamerLevelScalarWhereWithAggregatesInput[]
    OR?: StreamerLevelScalarWhereWithAggregatesInput[]
    NOT?: StreamerLevelScalarWhereWithAggregatesInput | StreamerLevelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StreamerLevel"> | string
    nombre?: StringWithAggregatesFilter<"StreamerLevel"> | string
    puntosRequeridos?: IntWithAggregatesFilter<"StreamerLevel"> | number
    recompensa?: StringNullableWithAggregatesFilter<"StreamerLevel"> | string | null
    image?: StringNullableWithAggregatesFilter<"StreamerLevel"> | string | null
  }

  export type RegaloWhereInput = {
    AND?: RegaloWhereInput | RegaloWhereInput[]
    OR?: RegaloWhereInput[]
    NOT?: RegaloWhereInput | RegaloWhereInput[]
    id?: StringFilter<"Regalo"> | string
    nombre?: StringFilter<"Regalo"> | string
    costo?: IntFilter<"Regalo"> | number
    puntos?: IntFilter<"Regalo"> | number
    icono?: StringFilter<"Regalo"> | string
    activo?: BoolFilter<"Regalo"> | boolean
    streamerId?: StringFilter<"Regalo"> | string
    streamer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RegaloOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    puntos?: SortOrder
    icono?: SortOrder
    activo?: SortOrder
    streamerId?: SortOrder
    streamer?: UserOrderByWithRelationInput
  }

  export type RegaloWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RegaloWhereInput | RegaloWhereInput[]
    OR?: RegaloWhereInput[]
    NOT?: RegaloWhereInput | RegaloWhereInput[]
    nombre?: StringFilter<"Regalo"> | string
    costo?: IntFilter<"Regalo"> | number
    puntos?: IntFilter<"Regalo"> | number
    icono?: StringFilter<"Regalo"> | string
    activo?: BoolFilter<"Regalo"> | boolean
    streamerId?: StringFilter<"Regalo"> | string
    streamer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RegaloOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    puntos?: SortOrder
    icono?: SortOrder
    activo?: SortOrder
    streamerId?: SortOrder
    _count?: RegaloCountOrderByAggregateInput
    _avg?: RegaloAvgOrderByAggregateInput
    _max?: RegaloMaxOrderByAggregateInput
    _min?: RegaloMinOrderByAggregateInput
    _sum?: RegaloSumOrderByAggregateInput
  }

  export type RegaloScalarWhereWithAggregatesInput = {
    AND?: RegaloScalarWhereWithAggregatesInput | RegaloScalarWhereWithAggregatesInput[]
    OR?: RegaloScalarWhereWithAggregatesInput[]
    NOT?: RegaloScalarWhereWithAggregatesInput | RegaloScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Regalo"> | string
    nombre?: StringWithAggregatesFilter<"Regalo"> | string
    costo?: IntWithAggregatesFilter<"Regalo"> | number
    puntos?: IntWithAggregatesFilter<"Regalo"> | number
    icono?: StringWithAggregatesFilter<"Regalo"> | string
    activo?: BoolWithAggregatesFilter<"Regalo"> | boolean
    streamerId?: StringWithAggregatesFilter<"Regalo"> | string
  }

  export type StreamWhereInput = {
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    id?: StringFilter<"Stream"> | string
    title?: StringFilter<"Stream"> | string
    isLive?: BoolFilter<"Stream"> | boolean
    userId?: StringFilter<"Stream"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: StreamTagListRelationFilter
  }

  export type StreamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    isLive?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: StreamTagOrderByRelationAggregateInput
  }

  export type StreamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StreamWhereInput | StreamWhereInput[]
    OR?: StreamWhereInput[]
    NOT?: StreamWhereInput | StreamWhereInput[]
    title?: StringFilter<"Stream"> | string
    isLive?: BoolFilter<"Stream"> | boolean
    userId?: StringFilter<"Stream"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: StreamTagListRelationFilter
  }, "id">

  export type StreamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    isLive?: SortOrder
    userId?: SortOrder
    _count?: StreamCountOrderByAggregateInput
    _max?: StreamMaxOrderByAggregateInput
    _min?: StreamMinOrderByAggregateInput
  }

  export type StreamScalarWhereWithAggregatesInput = {
    AND?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    OR?: StreamScalarWhereWithAggregatesInput[]
    NOT?: StreamScalarWhereWithAggregatesInput | StreamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stream"> | string
    title?: StringWithAggregatesFilter<"Stream"> | string
    isLive?: BoolWithAggregatesFilter<"Stream"> | boolean
    userId?: StringWithAggregatesFilter<"Stream"> | string
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: StringFilter<"Tag"> | string
    name?: StringFilter<"Tag"> | string
    streams?: StreamTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    streams?: StreamTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    streams?: StreamTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tag"> | string
    name?: StringWithAggregatesFilter<"Tag"> | string
  }

  export type StreamTagWhereInput = {
    AND?: StreamTagWhereInput | StreamTagWhereInput[]
    OR?: StreamTagWhereInput[]
    NOT?: StreamTagWhereInput | StreamTagWhereInput[]
    streamId?: StringFilter<"StreamTag"> | string
    tagId?: StringFilter<"StreamTag"> | string
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type StreamTagOrderByWithRelationInput = {
    streamId?: SortOrder
    tagId?: SortOrder
    stream?: StreamOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type StreamTagWhereUniqueInput = Prisma.AtLeast<{
    streamId_tagId?: StreamTagStreamIdTagIdCompoundUniqueInput
    AND?: StreamTagWhereInput | StreamTagWhereInput[]
    OR?: StreamTagWhereInput[]
    NOT?: StreamTagWhereInput | StreamTagWhereInput[]
    streamId?: StringFilter<"StreamTag"> | string
    tagId?: StringFilter<"StreamTag"> | string
    stream?: XOR<StreamScalarRelationFilter, StreamWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "streamId_tagId">

  export type StreamTagOrderByWithAggregationInput = {
    streamId?: SortOrder
    tagId?: SortOrder
    _count?: StreamTagCountOrderByAggregateInput
    _max?: StreamTagMaxOrderByAggregateInput
    _min?: StreamTagMinOrderByAggregateInput
  }

  export type StreamTagScalarWhereWithAggregatesInput = {
    AND?: StreamTagScalarWhereWithAggregatesInput | StreamTagScalarWhereWithAggregatesInput[]
    OR?: StreamTagScalarWhereWithAggregatesInput[]
    NOT?: StreamTagScalarWhereWithAggregatesInput | StreamTagScalarWhereWithAggregatesInput[]
    streamId?: StringWithAggregatesFilter<"StreamTag"> | string
    tagId?: StringWithAggregatesFilter<"StreamTag"> | string
  }

  export type MonedasWhereInput = {
    AND?: MonedasWhereInput | MonedasWhereInput[]
    OR?: MonedasWhereInput[]
    NOT?: MonedasWhereInput | MonedasWhereInput[]
    id?: IntFilter<"Monedas"> | number
    saldo?: IntFilter<"Monedas"> | number
    usuarioId?: StringFilter<"Monedas"> | string
  }

  export type MonedasOrderByWithRelationInput = {
    id?: SortOrder
    saldo?: SortOrder
    usuarioId?: SortOrder
  }

  export type MonedasWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId?: string
    AND?: MonedasWhereInput | MonedasWhereInput[]
    OR?: MonedasWhereInput[]
    NOT?: MonedasWhereInput | MonedasWhereInput[]
    saldo?: IntFilter<"Monedas"> | number
  }, "id" | "usuarioId">

  export type MonedasOrderByWithAggregationInput = {
    id?: SortOrder
    saldo?: SortOrder
    usuarioId?: SortOrder
    _count?: MonedasCountOrderByAggregateInput
    _avg?: MonedasAvgOrderByAggregateInput
    _max?: MonedasMaxOrderByAggregateInput
    _min?: MonedasMinOrderByAggregateInput
    _sum?: MonedasSumOrderByAggregateInput
  }

  export type MonedasScalarWhereWithAggregatesInput = {
    AND?: MonedasScalarWhereWithAggregatesInput | MonedasScalarWhereWithAggregatesInput[]
    OR?: MonedasScalarWhereWithAggregatesInput[]
    NOT?: MonedasScalarWhereWithAggregatesInput | MonedasScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Monedas"> | number
    saldo?: IntWithAggregatesFilter<"Monedas"> | number
    usuarioId?: StringWithAggregatesFilter<"Monedas"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevel?: StreamerLevelCreateNestedOneWithoutUsersInput
    streams?: StreamCreateNestedManyWithoutUserInput
    regalosCreados?: RegaloCreateNestedManyWithoutStreamerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevelId?: string | null
    streams?: StreamUncheckedCreateNestedManyWithoutUserInput
    regalosCreados?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevel?: StreamerLevelUpdateOneWithoutUsersNestedInput
    streams?: StreamUpdateManyWithoutUserNestedInput
    regalosCreados?: RegaloUpdateManyWithoutStreamerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevelId?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: StreamUncheckedUpdateManyWithoutUserNestedInput
    regalosCreados?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevelId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamerLevelCreateInput = {
    id?: string
    nombre: string
    puntosRequeridos: number
    recompensa?: string | null
    image?: string | null
    users?: UserCreateNestedManyWithoutCurrentLevelInput
  }

  export type StreamerLevelUncheckedCreateInput = {
    id?: string
    nombre: string
    puntosRequeridos: number
    recompensa?: string | null
    image?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCurrentLevelInput
  }

  export type StreamerLevelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUpdateManyWithoutCurrentLevelNestedInput
  }

  export type StreamerLevelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCurrentLevelNestedInput
  }

  export type StreamerLevelCreateManyInput = {
    id?: string
    nombre: string
    puntosRequeridos: number
    recompensa?: string | null
    image?: string | null
  }

  export type StreamerLevelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamerLevelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RegaloCreateInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
    streamer: UserCreateNestedOneWithoutRegalosCreadosInput
  }

  export type RegaloUncheckedCreateInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
    streamerId: string
  }

  export type RegaloUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    streamer?: UserUpdateOneRequiredWithoutRegalosCreadosNestedInput
  }

  export type RegaloUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    streamerId?: StringFieldUpdateOperationsInput | string
  }

  export type RegaloCreateManyInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
    streamerId: string
  }

  export type RegaloUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegaloUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
    streamerId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamCreateInput = {
    id?: string
    title: string
    isLive?: boolean
    user: UserCreateNestedOneWithoutStreamsInput
    tags?: StreamTagCreateNestedManyWithoutStreamInput
  }

  export type StreamUncheckedCreateInput = {
    id?: string
    title: string
    isLive?: boolean
    userId: string
    tags?: StreamTagUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStreamsNestedInput
    tags?: StreamTagUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    tags?: StreamTagUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamCreateManyInput = {
    id?: string
    title: string
    isLive?: boolean
    userId: string
  }

  export type StreamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StreamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagCreateInput = {
    id?: string
    name: string
    streams?: StreamTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: string
    name: string
    streams?: StreamTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streams?: StreamTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    streams?: StreamTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StreamTagCreateInput = {
    stream: StreamCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutStreamsInput
  }

  export type StreamTagUncheckedCreateInput = {
    streamId: string
    tagId: string
  }

  export type StreamTagUpdateInput = {
    stream?: StreamUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamTagUncheckedUpdateInput = {
    streamId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamTagCreateManyInput = {
    streamId: string
    tagId: string
  }

  export type StreamTagUpdateManyMutationInput = {

  }

  export type StreamTagUncheckedUpdateManyInput = {
    streamId?: StringFieldUpdateOperationsInput | string
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type MonedasCreateInput = {
    saldo?: number
    usuarioId: string
  }

  export type MonedasUncheckedCreateInput = {
    id?: number
    saldo?: number
    usuarioId: string
  }

  export type MonedasUpdateInput = {
    saldo?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MonedasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MonedasCreateManyInput = {
    id?: number
    saldo?: number
    usuarioId: string
  }

  export type MonedasUpdateManyMutationInput = {
    saldo?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type MonedasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    saldo?: IntFieldUpdateOperationsInput | number
    usuarioId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StreamerLevelNullableScalarRelationFilter = {
    is?: StreamerLevelWhereInput | null
    isNot?: StreamerLevelWhereInput | null
  }

  export type StreamListRelationFilter = {
    every?: StreamWhereInput
    some?: StreamWhereInput
    none?: StreamWhereInput
  }

  export type RegaloListRelationFilter = {
    every?: RegaloWhereInput
    some?: RegaloWhereInput
    none?: RegaloWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StreamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RegaloOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
    currentLevelId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
    currentLevelId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
    currentLevelId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    coins?: SortOrder
    points?: SortOrder
    streamingHours?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamerLevelCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    puntosRequeridos?: SortOrder
    recompensa?: SortOrder
    image?: SortOrder
  }

  export type StreamerLevelAvgOrderByAggregateInput = {
    puntosRequeridos?: SortOrder
  }

  export type StreamerLevelMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    puntosRequeridos?: SortOrder
    recompensa?: SortOrder
    image?: SortOrder
  }

  export type StreamerLevelMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    puntosRequeridos?: SortOrder
    recompensa?: SortOrder
    image?: SortOrder
  }

  export type StreamerLevelSumOrderByAggregateInput = {
    puntosRequeridos?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RegaloCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    puntos?: SortOrder
    icono?: SortOrder
    activo?: SortOrder
    streamerId?: SortOrder
  }

  export type RegaloAvgOrderByAggregateInput = {
    costo?: SortOrder
    puntos?: SortOrder
  }

  export type RegaloMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    puntos?: SortOrder
    icono?: SortOrder
    activo?: SortOrder
    streamerId?: SortOrder
  }

  export type RegaloMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    puntos?: SortOrder
    icono?: SortOrder
    activo?: SortOrder
    streamerId?: SortOrder
  }

  export type RegaloSumOrderByAggregateInput = {
    costo?: SortOrder
    puntos?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamTagListRelationFilter = {
    every?: StreamTagWhereInput
    some?: StreamTagWhereInput
    none?: StreamTagWhereInput
  }

  export type StreamTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StreamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isLive?: SortOrder
    userId?: SortOrder
  }

  export type StreamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isLive?: SortOrder
    userId?: SortOrder
  }

  export type StreamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    isLive?: SortOrder
    userId?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StreamScalarRelationFilter = {
    is?: StreamWhereInput
    isNot?: StreamWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type StreamTagStreamIdTagIdCompoundUniqueInput = {
    streamId: string
    tagId: string
  }

  export type StreamTagCountOrderByAggregateInput = {
    streamId?: SortOrder
    tagId?: SortOrder
  }

  export type StreamTagMaxOrderByAggregateInput = {
    streamId?: SortOrder
    tagId?: SortOrder
  }

  export type StreamTagMinOrderByAggregateInput = {
    streamId?: SortOrder
    tagId?: SortOrder
  }

  export type MonedasCountOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
    usuarioId?: SortOrder
  }

  export type MonedasAvgOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
  }

  export type MonedasMaxOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
    usuarioId?: SortOrder
  }

  export type MonedasMinOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
    usuarioId?: SortOrder
  }

  export type MonedasSumOrderByAggregateInput = {
    id?: SortOrder
    saldo?: SortOrder
  }

  export type StreamerLevelCreateNestedOneWithoutUsersInput = {
    create?: XOR<StreamerLevelCreateWithoutUsersInput, StreamerLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StreamerLevelCreateOrConnectWithoutUsersInput
    connect?: StreamerLevelWhereUniqueInput
  }

  export type StreamCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput> | StreamCreateWithoutUserInput[] | StreamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutUserInput | StreamCreateOrConnectWithoutUserInput[]
    createMany?: StreamCreateManyUserInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type RegaloCreateNestedManyWithoutStreamerInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
  }

  export type StreamUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput> | StreamCreateWithoutUserInput[] | StreamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutUserInput | StreamCreateOrConnectWithoutUserInput[]
    createMany?: StreamCreateManyUserInputEnvelope
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
  }

  export type RegaloUncheckedCreateNestedManyWithoutStreamerInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StreamerLevelUpdateOneWithoutUsersNestedInput = {
    create?: XOR<StreamerLevelCreateWithoutUsersInput, StreamerLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: StreamerLevelCreateOrConnectWithoutUsersInput
    upsert?: StreamerLevelUpsertWithoutUsersInput
    disconnect?: StreamerLevelWhereInput | boolean
    delete?: StreamerLevelWhereInput | boolean
    connect?: StreamerLevelWhereUniqueInput
    update?: XOR<XOR<StreamerLevelUpdateToOneWithWhereWithoutUsersInput, StreamerLevelUpdateWithoutUsersInput>, StreamerLevelUncheckedUpdateWithoutUsersInput>
  }

  export type StreamUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput> | StreamCreateWithoutUserInput[] | StreamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutUserInput | StreamCreateOrConnectWithoutUserInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutUserInput | StreamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamCreateManyUserInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutUserInput | StreamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutUserInput | StreamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type RegaloUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    upsert?: RegaloUpsertWithWhereUniqueWithoutStreamerInput | RegaloUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    set?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    disconnect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    delete?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    update?: RegaloUpdateWithWhereUniqueWithoutStreamerInput | RegaloUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: RegaloUpdateManyWithWhereWithoutStreamerInput | RegaloUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StreamUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput> | StreamCreateWithoutUserInput[] | StreamUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StreamCreateOrConnectWithoutUserInput | StreamCreateOrConnectWithoutUserInput[]
    upsert?: StreamUpsertWithWhereUniqueWithoutUserInput | StreamUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StreamCreateManyUserInputEnvelope
    set?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    disconnect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    delete?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    connect?: StreamWhereUniqueInput | StreamWhereUniqueInput[]
    update?: StreamUpdateWithWhereUniqueWithoutUserInput | StreamUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StreamUpdateManyWithWhereWithoutUserInput | StreamUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StreamScalarWhereInput | StreamScalarWhereInput[]
  }

  export type RegaloUncheckedUpdateManyWithoutStreamerNestedInput = {
    create?: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput> | RegaloCreateWithoutStreamerInput[] | RegaloUncheckedCreateWithoutStreamerInput[]
    connectOrCreate?: RegaloCreateOrConnectWithoutStreamerInput | RegaloCreateOrConnectWithoutStreamerInput[]
    upsert?: RegaloUpsertWithWhereUniqueWithoutStreamerInput | RegaloUpsertWithWhereUniqueWithoutStreamerInput[]
    createMany?: RegaloCreateManyStreamerInputEnvelope
    set?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    disconnect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    delete?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    connect?: RegaloWhereUniqueInput | RegaloWhereUniqueInput[]
    update?: RegaloUpdateWithWhereUniqueWithoutStreamerInput | RegaloUpdateWithWhereUniqueWithoutStreamerInput[]
    updateMany?: RegaloUpdateManyWithWhereWithoutStreamerInput | RegaloUpdateManyWithWhereWithoutStreamerInput[]
    deleteMany?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCurrentLevelInput = {
    create?: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput> | UserCreateWithoutCurrentLevelInput[] | UserUncheckedCreateWithoutCurrentLevelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentLevelInput | UserCreateOrConnectWithoutCurrentLevelInput[]
    createMany?: UserCreateManyCurrentLevelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCurrentLevelInput = {
    create?: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput> | UserCreateWithoutCurrentLevelInput[] | UserUncheckedCreateWithoutCurrentLevelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentLevelInput | UserCreateOrConnectWithoutCurrentLevelInput[]
    createMany?: UserCreateManyCurrentLevelInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCurrentLevelNestedInput = {
    create?: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput> | UserCreateWithoutCurrentLevelInput[] | UserUncheckedCreateWithoutCurrentLevelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentLevelInput | UserCreateOrConnectWithoutCurrentLevelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCurrentLevelInput | UserUpsertWithWhereUniqueWithoutCurrentLevelInput[]
    createMany?: UserCreateManyCurrentLevelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCurrentLevelInput | UserUpdateWithWhereUniqueWithoutCurrentLevelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCurrentLevelInput | UserUpdateManyWithWhereWithoutCurrentLevelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCurrentLevelNestedInput = {
    create?: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput> | UserCreateWithoutCurrentLevelInput[] | UserUncheckedCreateWithoutCurrentLevelInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCurrentLevelInput | UserCreateOrConnectWithoutCurrentLevelInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCurrentLevelInput | UserUpsertWithWhereUniqueWithoutCurrentLevelInput[]
    createMany?: UserCreateManyCurrentLevelInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCurrentLevelInput | UserUpdateWithWhereUniqueWithoutCurrentLevelInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCurrentLevelInput | UserUpdateManyWithWhereWithoutCurrentLevelInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRegalosCreadosInput = {
    create?: XOR<UserCreateWithoutRegalosCreadosInput, UserUncheckedCreateWithoutRegalosCreadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegalosCreadosInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutRegalosCreadosNestedInput = {
    create?: XOR<UserCreateWithoutRegalosCreadosInput, UserUncheckedCreateWithoutRegalosCreadosInput>
    connectOrCreate?: UserCreateOrConnectWithoutRegalosCreadosInput
    upsert?: UserUpsertWithoutRegalosCreadosInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRegalosCreadosInput, UserUpdateWithoutRegalosCreadosInput>, UserUncheckedUpdateWithoutRegalosCreadosInput>
  }

  export type UserCreateNestedOneWithoutStreamsInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    connect?: UserWhereUniqueInput
  }

  export type StreamTagCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput> | StreamTagCreateWithoutStreamInput[] | StreamTagUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutStreamInput | StreamTagCreateOrConnectWithoutStreamInput[]
    createMany?: StreamTagCreateManyStreamInputEnvelope
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
  }

  export type StreamTagUncheckedCreateNestedManyWithoutStreamInput = {
    create?: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput> | StreamTagCreateWithoutStreamInput[] | StreamTagUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutStreamInput | StreamTagCreateOrConnectWithoutStreamInput[]
    createMany?: StreamTagCreateManyStreamInputEnvelope
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStreamsInput
    upsert?: UserUpsertWithoutStreamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStreamsInput, UserUpdateWithoutStreamsInput>, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type StreamTagUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput> | StreamTagCreateWithoutStreamInput[] | StreamTagUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutStreamInput | StreamTagCreateOrConnectWithoutStreamInput[]
    upsert?: StreamTagUpsertWithWhereUniqueWithoutStreamInput | StreamTagUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamTagCreateManyStreamInputEnvelope
    set?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    disconnect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    delete?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    update?: StreamTagUpdateWithWhereUniqueWithoutStreamInput | StreamTagUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamTagUpdateManyWithWhereWithoutStreamInput | StreamTagUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
  }

  export type StreamTagUncheckedUpdateManyWithoutStreamNestedInput = {
    create?: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput> | StreamTagCreateWithoutStreamInput[] | StreamTagUncheckedCreateWithoutStreamInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutStreamInput | StreamTagCreateOrConnectWithoutStreamInput[]
    upsert?: StreamTagUpsertWithWhereUniqueWithoutStreamInput | StreamTagUpsertWithWhereUniqueWithoutStreamInput[]
    createMany?: StreamTagCreateManyStreamInputEnvelope
    set?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    disconnect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    delete?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    update?: StreamTagUpdateWithWhereUniqueWithoutStreamInput | StreamTagUpdateWithWhereUniqueWithoutStreamInput[]
    updateMany?: StreamTagUpdateManyWithWhereWithoutStreamInput | StreamTagUpdateManyWithWhereWithoutStreamInput[]
    deleteMany?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
  }

  export type StreamTagCreateNestedManyWithoutTagInput = {
    create?: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput> | StreamTagCreateWithoutTagInput[] | StreamTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutTagInput | StreamTagCreateOrConnectWithoutTagInput[]
    createMany?: StreamTagCreateManyTagInputEnvelope
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
  }

  export type StreamTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput> | StreamTagCreateWithoutTagInput[] | StreamTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutTagInput | StreamTagCreateOrConnectWithoutTagInput[]
    createMany?: StreamTagCreateManyTagInputEnvelope
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
  }

  export type StreamTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput> | StreamTagCreateWithoutTagInput[] | StreamTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutTagInput | StreamTagCreateOrConnectWithoutTagInput[]
    upsert?: StreamTagUpsertWithWhereUniqueWithoutTagInput | StreamTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: StreamTagCreateManyTagInputEnvelope
    set?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    disconnect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    delete?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    update?: StreamTagUpdateWithWhereUniqueWithoutTagInput | StreamTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: StreamTagUpdateManyWithWhereWithoutTagInput | StreamTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
  }

  export type StreamTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput> | StreamTagCreateWithoutTagInput[] | StreamTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: StreamTagCreateOrConnectWithoutTagInput | StreamTagCreateOrConnectWithoutTagInput[]
    upsert?: StreamTagUpsertWithWhereUniqueWithoutTagInput | StreamTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: StreamTagCreateManyTagInputEnvelope
    set?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    disconnect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    delete?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    connect?: StreamTagWhereUniqueInput | StreamTagWhereUniqueInput[]
    update?: StreamTagUpdateWithWhereUniqueWithoutTagInput | StreamTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: StreamTagUpdateManyWithWhereWithoutTagInput | StreamTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
  }

  export type StreamCreateNestedOneWithoutTagsInput = {
    create?: XOR<StreamCreateWithoutTagsInput, StreamUncheckedCreateWithoutTagsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutTagsInput
    connect?: StreamWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutStreamsInput = {
    create?: XOR<TagCreateWithoutStreamsInput, TagUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: TagCreateOrConnectWithoutStreamsInput
    connect?: TagWhereUniqueInput
  }

  export type StreamUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<StreamCreateWithoutTagsInput, StreamUncheckedCreateWithoutTagsInput>
    connectOrCreate?: StreamCreateOrConnectWithoutTagsInput
    upsert?: StreamUpsertWithoutTagsInput
    connect?: StreamWhereUniqueInput
    update?: XOR<XOR<StreamUpdateToOneWithWhereWithoutTagsInput, StreamUpdateWithoutTagsInput>, StreamUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutStreamsNestedInput = {
    create?: XOR<TagCreateWithoutStreamsInput, TagUncheckedCreateWithoutStreamsInput>
    connectOrCreate?: TagCreateOrConnectWithoutStreamsInput
    upsert?: TagUpsertWithoutStreamsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutStreamsInput, TagUpdateWithoutStreamsInput>, TagUncheckedUpdateWithoutStreamsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StreamerLevelCreateWithoutUsersInput = {
    id?: string
    nombre: string
    puntosRequeridos: number
    recompensa?: string | null
    image?: string | null
  }

  export type StreamerLevelUncheckedCreateWithoutUsersInput = {
    id?: string
    nombre: string
    puntosRequeridos: number
    recompensa?: string | null
    image?: string | null
  }

  export type StreamerLevelCreateOrConnectWithoutUsersInput = {
    where: StreamerLevelWhereUniqueInput
    create: XOR<StreamerLevelCreateWithoutUsersInput, StreamerLevelUncheckedCreateWithoutUsersInput>
  }

  export type StreamCreateWithoutUserInput = {
    id?: string
    title: string
    isLive?: boolean
    tags?: StreamTagCreateNestedManyWithoutStreamInput
  }

  export type StreamUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    isLive?: boolean
    tags?: StreamTagUncheckedCreateNestedManyWithoutStreamInput
  }

  export type StreamCreateOrConnectWithoutUserInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput>
  }

  export type StreamCreateManyUserInputEnvelope = {
    data: StreamCreateManyUserInput | StreamCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RegaloCreateWithoutStreamerInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
  }

  export type RegaloUncheckedCreateWithoutStreamerInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
  }

  export type RegaloCreateOrConnectWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    create: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput>
  }

  export type RegaloCreateManyStreamerInputEnvelope = {
    data: RegaloCreateManyStreamerInput | RegaloCreateManyStreamerInput[]
    skipDuplicates?: boolean
  }

  export type StreamerLevelUpsertWithoutUsersInput = {
    update: XOR<StreamerLevelUpdateWithoutUsersInput, StreamerLevelUncheckedUpdateWithoutUsersInput>
    create: XOR<StreamerLevelCreateWithoutUsersInput, StreamerLevelUncheckedCreateWithoutUsersInput>
    where?: StreamerLevelWhereInput
  }

  export type StreamerLevelUpdateToOneWithWhereWithoutUsersInput = {
    where?: StreamerLevelWhereInput
    data: XOR<StreamerLevelUpdateWithoutUsersInput, StreamerLevelUncheckedUpdateWithoutUsersInput>
  }

  export type StreamerLevelUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamerLevelUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    puntosRequeridos?: IntFieldUpdateOperationsInput | number
    recompensa?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StreamUpsertWithWhereUniqueWithoutUserInput = {
    where: StreamWhereUniqueInput
    update: XOR<StreamUpdateWithoutUserInput, StreamUncheckedUpdateWithoutUserInput>
    create: XOR<StreamCreateWithoutUserInput, StreamUncheckedCreateWithoutUserInput>
  }

  export type StreamUpdateWithWhereUniqueWithoutUserInput = {
    where: StreamWhereUniqueInput
    data: XOR<StreamUpdateWithoutUserInput, StreamUncheckedUpdateWithoutUserInput>
  }

  export type StreamUpdateManyWithWhereWithoutUserInput = {
    where: StreamScalarWhereInput
    data: XOR<StreamUpdateManyMutationInput, StreamUncheckedUpdateManyWithoutUserInput>
  }

  export type StreamScalarWhereInput = {
    AND?: StreamScalarWhereInput | StreamScalarWhereInput[]
    OR?: StreamScalarWhereInput[]
    NOT?: StreamScalarWhereInput | StreamScalarWhereInput[]
    id?: StringFilter<"Stream"> | string
    title?: StringFilter<"Stream"> | string
    isLive?: BoolFilter<"Stream"> | boolean
    userId?: StringFilter<"Stream"> | string
  }

  export type RegaloUpsertWithWhereUniqueWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    update: XOR<RegaloUpdateWithoutStreamerInput, RegaloUncheckedUpdateWithoutStreamerInput>
    create: XOR<RegaloCreateWithoutStreamerInput, RegaloUncheckedCreateWithoutStreamerInput>
  }

  export type RegaloUpdateWithWhereUniqueWithoutStreamerInput = {
    where: RegaloWhereUniqueInput
    data: XOR<RegaloUpdateWithoutStreamerInput, RegaloUncheckedUpdateWithoutStreamerInput>
  }

  export type RegaloUpdateManyWithWhereWithoutStreamerInput = {
    where: RegaloScalarWhereInput
    data: XOR<RegaloUpdateManyMutationInput, RegaloUncheckedUpdateManyWithoutStreamerInput>
  }

  export type RegaloScalarWhereInput = {
    AND?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
    OR?: RegaloScalarWhereInput[]
    NOT?: RegaloScalarWhereInput | RegaloScalarWhereInput[]
    id?: StringFilter<"Regalo"> | string
    nombre?: StringFilter<"Regalo"> | string
    costo?: IntFilter<"Regalo"> | number
    puntos?: IntFilter<"Regalo"> | number
    icono?: StringFilter<"Regalo"> | string
    activo?: BoolFilter<"Regalo"> | boolean
    streamerId?: StringFilter<"Regalo"> | string
  }

  export type UserCreateWithoutCurrentLevelInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    streams?: StreamCreateNestedManyWithoutUserInput
    regalosCreados?: RegaloCreateNestedManyWithoutStreamerInput
  }

  export type UserUncheckedCreateWithoutCurrentLevelInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    streams?: StreamUncheckedCreateNestedManyWithoutUserInput
    regalosCreados?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type UserCreateOrConnectWithoutCurrentLevelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput>
  }

  export type UserCreateManyCurrentLevelInputEnvelope = {
    data: UserCreateManyCurrentLevelInput | UserCreateManyCurrentLevelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCurrentLevelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCurrentLevelInput, UserUncheckedUpdateWithoutCurrentLevelInput>
    create: XOR<UserCreateWithoutCurrentLevelInput, UserUncheckedCreateWithoutCurrentLevelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCurrentLevelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCurrentLevelInput, UserUncheckedUpdateWithoutCurrentLevelInput>
  }

  export type UserUpdateManyWithWhereWithoutCurrentLevelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCurrentLevelInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    coins?: IntFilter<"User"> | number
    points?: IntFilter<"User"> | number
    streamingHours?: FloatFilter<"User"> | number
    currentLevelId?: StringNullableFilter<"User"> | string | null
  }

  export type UserCreateWithoutRegalosCreadosInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevel?: StreamerLevelCreateNestedOneWithoutUsersInput
    streams?: StreamCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRegalosCreadosInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevelId?: string | null
    streams?: StreamUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRegalosCreadosInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegalosCreadosInput, UserUncheckedCreateWithoutRegalosCreadosInput>
  }

  export type UserUpsertWithoutRegalosCreadosInput = {
    update: XOR<UserUpdateWithoutRegalosCreadosInput, UserUncheckedUpdateWithoutRegalosCreadosInput>
    create: XOR<UserCreateWithoutRegalosCreadosInput, UserUncheckedCreateWithoutRegalosCreadosInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRegalosCreadosInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRegalosCreadosInput, UserUncheckedUpdateWithoutRegalosCreadosInput>
  }

  export type UserUpdateWithoutRegalosCreadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevel?: StreamerLevelUpdateOneWithoutUsersNestedInput
    streams?: StreamUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRegalosCreadosInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevelId?: NullableStringFieldUpdateOperationsInput | string | null
    streams?: StreamUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStreamsInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevel?: StreamerLevelCreateNestedOneWithoutUsersInput
    regalosCreados?: RegaloCreateNestedManyWithoutStreamerInput
  }

  export type UserUncheckedCreateWithoutStreamsInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
    currentLevelId?: string | null
    regalosCreados?: RegaloUncheckedCreateNestedManyWithoutStreamerInput
  }

  export type UserCreateOrConnectWithoutStreamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
  }

  export type StreamTagCreateWithoutStreamInput = {
    tag: TagCreateNestedOneWithoutStreamsInput
  }

  export type StreamTagUncheckedCreateWithoutStreamInput = {
    tagId: string
  }

  export type StreamTagCreateOrConnectWithoutStreamInput = {
    where: StreamTagWhereUniqueInput
    create: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput>
  }

  export type StreamTagCreateManyStreamInputEnvelope = {
    data: StreamTagCreateManyStreamInput | StreamTagCreateManyStreamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStreamsInput = {
    update: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
    create: XOR<UserCreateWithoutStreamsInput, UserUncheckedCreateWithoutStreamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStreamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStreamsInput, UserUncheckedUpdateWithoutStreamsInput>
  }

  export type UserUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevel?: StreamerLevelUpdateOneWithoutUsersNestedInput
    regalosCreados?: RegaloUpdateManyWithoutStreamerNestedInput
  }

  export type UserUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    currentLevelId?: NullableStringFieldUpdateOperationsInput | string | null
    regalosCreados?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type StreamTagUpsertWithWhereUniqueWithoutStreamInput = {
    where: StreamTagWhereUniqueInput
    update: XOR<StreamTagUpdateWithoutStreamInput, StreamTagUncheckedUpdateWithoutStreamInput>
    create: XOR<StreamTagCreateWithoutStreamInput, StreamTagUncheckedCreateWithoutStreamInput>
  }

  export type StreamTagUpdateWithWhereUniqueWithoutStreamInput = {
    where: StreamTagWhereUniqueInput
    data: XOR<StreamTagUpdateWithoutStreamInput, StreamTagUncheckedUpdateWithoutStreamInput>
  }

  export type StreamTagUpdateManyWithWhereWithoutStreamInput = {
    where: StreamTagScalarWhereInput
    data: XOR<StreamTagUpdateManyMutationInput, StreamTagUncheckedUpdateManyWithoutStreamInput>
  }

  export type StreamTagScalarWhereInput = {
    AND?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
    OR?: StreamTagScalarWhereInput[]
    NOT?: StreamTagScalarWhereInput | StreamTagScalarWhereInput[]
    streamId?: StringFilter<"StreamTag"> | string
    tagId?: StringFilter<"StreamTag"> | string
  }

  export type StreamTagCreateWithoutTagInput = {
    stream: StreamCreateNestedOneWithoutTagsInput
  }

  export type StreamTagUncheckedCreateWithoutTagInput = {
    streamId: string
  }

  export type StreamTagCreateOrConnectWithoutTagInput = {
    where: StreamTagWhereUniqueInput
    create: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput>
  }

  export type StreamTagCreateManyTagInputEnvelope = {
    data: StreamTagCreateManyTagInput | StreamTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type StreamTagUpsertWithWhereUniqueWithoutTagInput = {
    where: StreamTagWhereUniqueInput
    update: XOR<StreamTagUpdateWithoutTagInput, StreamTagUncheckedUpdateWithoutTagInput>
    create: XOR<StreamTagCreateWithoutTagInput, StreamTagUncheckedCreateWithoutTagInput>
  }

  export type StreamTagUpdateWithWhereUniqueWithoutTagInput = {
    where: StreamTagWhereUniqueInput
    data: XOR<StreamTagUpdateWithoutTagInput, StreamTagUncheckedUpdateWithoutTagInput>
  }

  export type StreamTagUpdateManyWithWhereWithoutTagInput = {
    where: StreamTagScalarWhereInput
    data: XOR<StreamTagUpdateManyMutationInput, StreamTagUncheckedUpdateManyWithoutTagInput>
  }

  export type StreamCreateWithoutTagsInput = {
    id?: string
    title: string
    isLive?: boolean
    user: UserCreateNestedOneWithoutStreamsInput
  }

  export type StreamUncheckedCreateWithoutTagsInput = {
    id?: string
    title: string
    isLive?: boolean
    userId: string
  }

  export type StreamCreateOrConnectWithoutTagsInput = {
    where: StreamWhereUniqueInput
    create: XOR<StreamCreateWithoutTagsInput, StreamUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutStreamsInput = {
    id?: string
    name: string
  }

  export type TagUncheckedCreateWithoutStreamsInput = {
    id?: string
    name: string
  }

  export type TagCreateOrConnectWithoutStreamsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutStreamsInput, TagUncheckedCreateWithoutStreamsInput>
  }

  export type StreamUpsertWithoutTagsInput = {
    update: XOR<StreamUpdateWithoutTagsInput, StreamUncheckedUpdateWithoutTagsInput>
    create: XOR<StreamCreateWithoutTagsInput, StreamUncheckedCreateWithoutTagsInput>
    where?: StreamWhereInput
  }

  export type StreamUpdateToOneWithWhereWithoutTagsInput = {
    where?: StreamWhereInput
    data: XOR<StreamUpdateWithoutTagsInput, StreamUncheckedUpdateWithoutTagsInput>
  }

  export type StreamUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TagUpsertWithoutStreamsInput = {
    update: XOR<TagUpdateWithoutStreamsInput, TagUncheckedUpdateWithoutStreamsInput>
    create: XOR<TagCreateWithoutStreamsInput, TagUncheckedCreateWithoutStreamsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutStreamsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutStreamsInput, TagUncheckedUpdateWithoutStreamsInput>
  }

  export type TagUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateWithoutStreamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StreamCreateManyUserInput = {
    id?: string
    title: string
    isLive?: boolean
  }

  export type RegaloCreateManyStreamerInput = {
    id?: string
    nombre: string
    costo: number
    puntos: number
    icono: string
    activo?: boolean
  }

  export type StreamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    tags?: StreamTagUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
    tags?: StreamTagUncheckedUpdateManyWithoutStreamNestedInput
  }

  export type StreamUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isLive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegaloUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegaloUncheckedUpdateWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegaloUncheckedUpdateManyWithoutStreamerInput = {
    id?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: IntFieldUpdateOperationsInput | number
    puntos?: IntFieldUpdateOperationsInput | number
    icono?: StringFieldUpdateOperationsInput | string
    activo?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateManyCurrentLevelInput = {
    id?: string
    email: string
    name: string
    password: string
    coins?: number
    points?: number
    streamingHours?: number
  }

  export type UserUpdateWithoutCurrentLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUpdateManyWithoutUserNestedInput
    regalosCreados?: RegaloUpdateManyWithoutStreamerNestedInput
  }

  export type UserUncheckedUpdateWithoutCurrentLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
    streams?: StreamUncheckedUpdateManyWithoutUserNestedInput
    regalosCreados?: RegaloUncheckedUpdateManyWithoutStreamerNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCurrentLevelInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    points?: IntFieldUpdateOperationsInput | number
    streamingHours?: FloatFieldUpdateOperationsInput | number
  }

  export type StreamTagCreateManyStreamInput = {
    tagId: string
  }

  export type StreamTagUpdateWithoutStreamInput = {
    tag?: TagUpdateOneRequiredWithoutStreamsNestedInput
  }

  export type StreamTagUncheckedUpdateWithoutStreamInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamTagUncheckedUpdateManyWithoutStreamInput = {
    tagId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamTagCreateManyTagInput = {
    streamId: string
  }

  export type StreamTagUpdateWithoutTagInput = {
    stream?: StreamUpdateOneRequiredWithoutTagsNestedInput
  }

  export type StreamTagUncheckedUpdateWithoutTagInput = {
    streamId?: StringFieldUpdateOperationsInput | string
  }

  export type StreamTagUncheckedUpdateManyWithoutTagInput = {
    streamId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}