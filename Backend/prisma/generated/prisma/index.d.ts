
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Academy
 * 
 */
export type Academy = $Result.DefaultSelection<Prisma.$AcademyPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Academies
 * const academies = await prisma.academy.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Academies
   * const academies = await prisma.academy.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.academy`: Exposes CRUD operations for the **Academy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Academies
    * const academies = await prisma.academy.findMany()
    * ```
    */
  get academy(): Prisma.AcademyDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Academy: 'Academy',
    User: 'User',
    Student: 'Student',
    Plan: 'Plan',
    Subscription: 'Subscription'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "academy" | "user" | "student" | "plan" | "subscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Academy: {
        payload: Prisma.$AcademyPayload<ExtArgs>
        fields: Prisma.AcademyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          findFirst: {
            args: Prisma.AcademyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          findMany: {
            args: Prisma.AcademyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>[]
          }
          create: {
            args: Prisma.AcademyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          createMany: {
            args: Prisma.AcademyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>[]
          }
          delete: {
            args: Prisma.AcademyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          update: {
            args: Prisma.AcademyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          deleteMany: {
            args: Prisma.AcademyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AcademyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>[]
          }
          upsert: {
            args: Prisma.AcademyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademyPayload>
          }
          aggregate: {
            args: Prisma.AcademyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademy>
          }
          groupBy: {
            args: Prisma.AcademyGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademyGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademyCountArgs<ExtArgs>
            result: $Utils.Optional<AcademyCountAggregateOutputType> | number
          }
        }
      }
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
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    academy?: AcademyOmit
    user?: UserOmit
    student?: StudentOmit
    plan?: PlanOmit
    subscription?: SubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AcademyCountOutputType
   */

  export type AcademyCountOutputType = {
    users: number
    students: number
    plans: number
    subscriptions: number
  }

  export type AcademyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AcademyCountOutputTypeCountUsersArgs
    students?: boolean | AcademyCountOutputTypeCountStudentsArgs
    plans?: boolean | AcademyCountOutputTypeCountPlansArgs
    subscriptions?: boolean | AcademyCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * AcademyCountOutputType without action
   */
  export type AcademyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademyCountOutputType
     */
    select?: AcademyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AcademyCountOutputType without action
   */
  export type AcademyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * AcademyCountOutputType without action
   */
  export type AcademyCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * AcademyCountOutputType without action
   */
  export type AcademyCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
  }

  /**
   * AcademyCountOutputType without action
   */
  export type AcademyCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    academies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academies?: boolean | UserCountOutputTypeCountAcademiesArgs
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
  export type UserCountOutputTypeCountAcademiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademyWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    academies: number
    subscriptions: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academies?: boolean | StudentCountOutputTypeCountAcademiesArgs
    subscriptions?: boolean | StudentCountOutputTypeCountSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAcademiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademyWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    students: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | PlanCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Academy
   */

  export type AggregateAcademy = {
    _count: AcademyCountAggregateOutputType | null
    _min: AcademyMinAggregateOutputType | null
    _max: AcademyMaxAggregateOutputType | null
  }

  export type AcademyMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademyCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademyMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademyMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademyCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Academy to aggregate.
     */
    where?: AcademyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academies to fetch.
     */
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Academies
    **/
    _count?: true | AcademyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademyMaxAggregateInputType
  }

  export type GetAcademyAggregateType<T extends AcademyAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademy[P]>
      : GetScalarType<T[P], AggregateAcademy[P]>
  }




  export type AcademyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademyWhereInput
    orderBy?: AcademyOrderByWithAggregationInput | AcademyOrderByWithAggregationInput[]
    by: AcademyScalarFieldEnum[] | AcademyScalarFieldEnum
    having?: AcademyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademyCountAggregateInputType | true
    _min?: AcademyMinAggregateInputType
    _max?: AcademyMaxAggregateInputType
  }

  export type AcademyGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AcademyCountAggregateOutputType | null
    _min: AcademyMinAggregateOutputType | null
    _max: AcademyMaxAggregateOutputType | null
  }

  type GetAcademyGroupByPayload<T extends AcademyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademyGroupByOutputType[P]>
            : GetScalarType<T[P], AcademyGroupByOutputType[P]>
        }
      >
    >


  export type AcademySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Academy$usersArgs<ExtArgs>
    students?: boolean | Academy$studentsArgs<ExtArgs>
    plans?: boolean | Academy$plansArgs<ExtArgs>
    subscriptions?: boolean | Academy$subscriptionsArgs<ExtArgs>
    _count?: boolean | AcademyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["academy"]>

  export type AcademySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academy"]>

  export type AcademySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academy"]>

  export type AcademySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AcademyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["academy"]>
  export type AcademyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Academy$usersArgs<ExtArgs>
    students?: boolean | Academy$studentsArgs<ExtArgs>
    plans?: boolean | Academy$plansArgs<ExtArgs>
    subscriptions?: boolean | Academy$subscriptionsArgs<ExtArgs>
    _count?: boolean | AcademyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AcademyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AcademyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AcademyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Academy"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      students: Prisma.$StudentPayload<ExtArgs>[]
      plans: Prisma.$PlanPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academy"]>
    composites: {}
  }

  type AcademyGetPayload<S extends boolean | null | undefined | AcademyDefaultArgs> = $Result.GetResult<Prisma.$AcademyPayload, S>

  type AcademyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AcademyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AcademyCountAggregateInputType | true
    }

  export interface AcademyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Academy'], meta: { name: 'Academy' } }
    /**
     * Find zero or one Academy that matches the filter.
     * @param {AcademyFindUniqueArgs} args - Arguments to find a Academy
     * @example
     * // Get one Academy
     * const academy = await prisma.academy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademyFindUniqueArgs>(args: SelectSubset<T, AcademyFindUniqueArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Academy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AcademyFindUniqueOrThrowArgs} args - Arguments to find a Academy
     * @example
     * // Get one Academy
     * const academy = await prisma.academy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademyFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyFindFirstArgs} args - Arguments to find a Academy
     * @example
     * // Get one Academy
     * const academy = await prisma.academy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademyFindFirstArgs>(args?: SelectSubset<T, AcademyFindFirstArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Academy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyFindFirstOrThrowArgs} args - Arguments to find a Academy
     * @example
     * // Get one Academy
     * const academy = await prisma.academy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademyFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademyFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Academies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Academies
     * const academies = await prisma.academy.findMany()
     * 
     * // Get first 10 Academies
     * const academies = await prisma.academy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academyWithIdOnly = await prisma.academy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademyFindManyArgs>(args?: SelectSubset<T, AcademyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Academy.
     * @param {AcademyCreateArgs} args - Arguments to create a Academy.
     * @example
     * // Create one Academy
     * const Academy = await prisma.academy.create({
     *   data: {
     *     // ... data to create a Academy
     *   }
     * })
     * 
     */
    create<T extends AcademyCreateArgs>(args: SelectSubset<T, AcademyCreateArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Academies.
     * @param {AcademyCreateManyArgs} args - Arguments to create many Academies.
     * @example
     * // Create many Academies
     * const academy = await prisma.academy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademyCreateManyArgs>(args?: SelectSubset<T, AcademyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Academies and returns the data saved in the database.
     * @param {AcademyCreateManyAndReturnArgs} args - Arguments to create many Academies.
     * @example
     * // Create many Academies
     * const academy = await prisma.academy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Academies and only return the `id`
     * const academyWithIdOnly = await prisma.academy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademyCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Academy.
     * @param {AcademyDeleteArgs} args - Arguments to delete one Academy.
     * @example
     * // Delete one Academy
     * const Academy = await prisma.academy.delete({
     *   where: {
     *     // ... filter to delete one Academy
     *   }
     * })
     * 
     */
    delete<T extends AcademyDeleteArgs>(args: SelectSubset<T, AcademyDeleteArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Academy.
     * @param {AcademyUpdateArgs} args - Arguments to update one Academy.
     * @example
     * // Update one Academy
     * const academy = await prisma.academy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademyUpdateArgs>(args: SelectSubset<T, AcademyUpdateArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Academies.
     * @param {AcademyDeleteManyArgs} args - Arguments to filter Academies to delete.
     * @example
     * // Delete a few Academies
     * const { count } = await prisma.academy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademyDeleteManyArgs>(args?: SelectSubset<T, AcademyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Academies
     * const academy = await prisma.academy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademyUpdateManyArgs>(args: SelectSubset<T, AcademyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Academies and returns the data updated in the database.
     * @param {AcademyUpdateManyAndReturnArgs} args - Arguments to update many Academies.
     * @example
     * // Update many Academies
     * const academy = await prisma.academy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Academies and only return the `id`
     * const academyWithIdOnly = await prisma.academy.updateManyAndReturn({
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
    updateManyAndReturn<T extends AcademyUpdateManyAndReturnArgs>(args: SelectSubset<T, AcademyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Academy.
     * @param {AcademyUpsertArgs} args - Arguments to update or create a Academy.
     * @example
     * // Update or create a Academy
     * const academy = await prisma.academy.upsert({
     *   create: {
     *     // ... data to create a Academy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Academy we want to update
     *   }
     * })
     */
    upsert<T extends AcademyUpsertArgs>(args: SelectSubset<T, AcademyUpsertArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Academies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyCountArgs} args - Arguments to filter Academies to count.
     * @example
     * // Count the number of Academies
     * const count = await prisma.academy.count({
     *   where: {
     *     // ... the filter for the Academies we want to count
     *   }
     * })
    **/
    count<T extends AcademyCountArgs>(
      args?: Subset<T, AcademyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Academy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademyAggregateArgs>(args: Subset<T, AcademyAggregateArgs>): Prisma.PrismaPromise<GetAcademyAggregateType<T>>

    /**
     * Group by Academy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademyGroupByArgs} args - Group by arguments.
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
      T extends AcademyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademyGroupByArgs['orderBy'] }
        : { orderBy?: AcademyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Academy model
   */
  readonly fields: AcademyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Academy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Academy$usersArgs<ExtArgs> = {}>(args?: Subset<T, Academy$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    students<T extends Academy$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Academy$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends Academy$plansArgs<ExtArgs> = {}>(args?: Subset<T, Academy$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Academy$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Academy$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Academy model
   */
  interface AcademyFieldRefs {
    readonly id: FieldRef<"Academy", 'String'>
    readonly name: FieldRef<"Academy", 'String'>
    readonly createdAt: FieldRef<"Academy", 'DateTime'>
    readonly updatedAt: FieldRef<"Academy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Academy findUnique
   */
  export type AcademyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter, which Academy to fetch.
     */
    where: AcademyWhereUniqueInput
  }

  /**
   * Academy findUniqueOrThrow
   */
  export type AcademyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter, which Academy to fetch.
     */
    where: AcademyWhereUniqueInput
  }

  /**
   * Academy findFirst
   */
  export type AcademyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter, which Academy to fetch.
     */
    where?: AcademyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academies to fetch.
     */
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Academies.
     */
    cursor?: AcademyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Academies.
     */
    distinct?: AcademyScalarFieldEnum | AcademyScalarFieldEnum[]
  }

  /**
   * Academy findFirstOrThrow
   */
  export type AcademyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter, which Academy to fetch.
     */
    where?: AcademyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academies to fetch.
     */
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Academies.
     */
    cursor?: AcademyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Academies.
     */
    distinct?: AcademyScalarFieldEnum | AcademyScalarFieldEnum[]
  }

  /**
   * Academy findMany
   */
  export type AcademyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter, which Academies to fetch.
     */
    where?: AcademyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Academies to fetch.
     */
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Academies.
     */
    cursor?: AcademyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Academies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Academies.
     */
    skip?: number
    distinct?: AcademyScalarFieldEnum | AcademyScalarFieldEnum[]
  }

  /**
   * Academy create
   */
  export type AcademyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * The data needed to create a Academy.
     */
    data: XOR<AcademyCreateInput, AcademyUncheckedCreateInput>
  }

  /**
   * Academy createMany
   */
  export type AcademyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Academies.
     */
    data: AcademyCreateManyInput | AcademyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Academy createManyAndReturn
   */
  export type AcademyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * The data used to create many Academies.
     */
    data: AcademyCreateManyInput | AcademyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Academy update
   */
  export type AcademyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * The data needed to update a Academy.
     */
    data: XOR<AcademyUpdateInput, AcademyUncheckedUpdateInput>
    /**
     * Choose, which Academy to update.
     */
    where: AcademyWhereUniqueInput
  }

  /**
   * Academy updateMany
   */
  export type AcademyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Academies.
     */
    data: XOR<AcademyUpdateManyMutationInput, AcademyUncheckedUpdateManyInput>
    /**
     * Filter which Academies to update
     */
    where?: AcademyWhereInput
    /**
     * Limit how many Academies to update.
     */
    limit?: number
  }

  /**
   * Academy updateManyAndReturn
   */
  export type AcademyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * The data used to update Academies.
     */
    data: XOR<AcademyUpdateManyMutationInput, AcademyUncheckedUpdateManyInput>
    /**
     * Filter which Academies to update
     */
    where?: AcademyWhereInput
    /**
     * Limit how many Academies to update.
     */
    limit?: number
  }

  /**
   * Academy upsert
   */
  export type AcademyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * The filter to search for the Academy to update in case it exists.
     */
    where: AcademyWhereUniqueInput
    /**
     * In case the Academy found by the `where` argument doesn't exist, create a new Academy with this data.
     */
    create: XOR<AcademyCreateInput, AcademyUncheckedCreateInput>
    /**
     * In case the Academy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademyUpdateInput, AcademyUncheckedUpdateInput>
  }

  /**
   * Academy delete
   */
  export type AcademyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    /**
     * Filter which Academy to delete.
     */
    where: AcademyWhereUniqueInput
  }

  /**
   * Academy deleteMany
   */
  export type AcademyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Academies to delete
     */
    where?: AcademyWhereInput
    /**
     * Limit how many Academies to delete.
     */
    limit?: number
  }

  /**
   * Academy.users
   */
  export type Academy$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Academy.students
   */
  export type Academy$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Academy.plans
   */
  export type Academy$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    cursor?: PlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Academy.subscriptions
   */
  export type Academy$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Academy without action
   */
  export type AcademyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
  }


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
    userType: number | null
  }

  export type UserSumAggregateOutputType = {
    userType: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    birth: Date | null
    phone: string | null
    status: boolean | null
    userType: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    birth: Date | null
    phone: string | null
    status: boolean | null
    userType: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    birth: number
    phone: number
    status: number
    userType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userType?: true
  }

  export type UserSumAggregateInputType = {
    userType?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birth?: true
    phone?: true
    status?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birth?: true
    phone?: true
    status?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    birth?: true
    phone?: true
    status?: true
    userType?: true
    createdAt?: true
    updatedAt?: true
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
    name: string
    cpf: string
    birth: Date
    phone: string
    status: boolean
    userType: number
    createdAt: Date
    updatedAt: Date
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
    name?: boolean
    cpf?: boolean
    birth?: boolean
    phone?: boolean
    status?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    academies?: boolean | User$academiesArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    birth?: boolean
    phone?: boolean
    status?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    birth?: boolean
    phone?: boolean
    status?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    birth?: boolean
    phone?: boolean
    status?: boolean
    userType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cpf" | "birth" | "phone" | "status" | "userType" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academies?: boolean | User$academiesArgs<ExtArgs>
    Student?: boolean | User$StudentArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      academies: Prisma.$AcademyPayload<ExtArgs>[]
      Student: Prisma.$StudentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string
      birth: Date
      phone: string
      status: boolean
      userType: number
      createdAt: Date
      updatedAt: Date
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
    academies<T extends User$academiesArgs<ExtArgs> = {}>(args?: Subset<T, User$academiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Student<T extends User$StudentArgs<ExtArgs> = {}>(args?: Subset<T, User$StudentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly cpf: FieldRef<"User", 'String'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly phone: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly userType: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.academies
   */
  export type User$academiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    where?: AcademyWhereInput
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    cursor?: AcademyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademyScalarFieldEnum | AcademyScalarFieldEnum[]
  }

  /**
   * User.Student
   */
  export type User$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
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
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    academies?: boolean | Student$academiesArgs<ExtArgs>
    subscriptions?: boolean | Student$subscriptionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    academies?: boolean | Student$academiesArgs<ExtArgs>
    subscriptions?: boolean | Student$subscriptionsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      academies: Prisma.$AcademyPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    academies<T extends Student$academiesArgs<ExtArgs> = {}>(args?: Subset<T, Student$academiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends Student$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Student$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.academies
   */
  export type Student$academiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Academy
     */
    select?: AcademySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Academy
     */
    omit?: AcademyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AcademyInclude<ExtArgs> | null
    where?: AcademyWhereInput
    orderBy?: AcademyOrderByWithRelationInput | AcademyOrderByWithRelationInput[]
    cursor?: AcademyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AcademyScalarFieldEnum | AcademyScalarFieldEnum[]
  }

  /**
   * Student.subscriptions
   */
  export type Student$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: Decimal | null
    duration: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: Decimal | null
    duration: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration: number | null
    academyId: string | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    duration: number | null
    academyId: string | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    duration: number
    academyId: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    duration?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    duration?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    academyId?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    academyId?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    duration?: true
    academyId?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    duration: number
    academyId: string
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    academyId?: boolean
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
    students?: boolean | Plan$studentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    academyId?: boolean
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    academyId?: boolean
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    duration?: boolean
    academyId?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "duration" | "academyId", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
    students?: boolean | Plan$studentsArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      academy: Prisma.$AcademyPayload<ExtArgs>
      students: Prisma.$SubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      duration: number
      academyId: string
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
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
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    academy<T extends AcademyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademyDefaultArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Plan$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Plan$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly duration: FieldRef<"Plan", 'Int'>
    readonly academyId: FieldRef<"Plan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.students
   */
  export type Plan$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    planId: string | null
    academyId: string | null
    start: Date | null
    end: Date | null
    active: boolean | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    planId: string | null
    academyId: string | null
    start: Date | null
    end: Date | null
    active: boolean | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    studentId: number
    planId: number
    academyId: number
    start: number
    end: number
    active: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    studentId?: true
    planId?: true
    academyId?: true
    start?: true
    end?: true
    active?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    studentId?: true
    planId?: true
    academyId?: true
    start?: true
    end?: true
    active?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    studentId?: true
    planId?: true
    academyId?: true
    start?: true
    end?: true
    active?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    studentId: string
    planId: string
    academyId: string
    start: Date
    end: Date
    active: boolean
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    planId?: boolean
    academyId?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    planId?: boolean
    academyId?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    planId?: boolean
    academyId?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    studentId?: boolean
    planId?: boolean
    academyId?: boolean
    start?: boolean
    end?: boolean
    active?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "planId" | "academyId" | "start" | "end" | "active", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    academy?: boolean | AcademyDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      academy: Prisma.$AcademyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      planId: string
      academyId: string
      start: Date
      end: Date
      active: boolean
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    academy<T extends AcademyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcademyDefaultArgs<ExtArgs>>): Prisma__AcademyClient<$Result.GetResult<Prisma.$AcademyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly studentId: FieldRef<"Subscription", 'String'>
    readonly planId: FieldRef<"Subscription", 'String'>
    readonly academyId: FieldRef<"Subscription", 'String'>
    readonly start: FieldRef<"Subscription", 'DateTime'>
    readonly end: FieldRef<"Subscription", 'DateTime'>
    readonly active: FieldRef<"Subscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
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


  export const AcademyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademyScalarFieldEnum = (typeof AcademyScalarFieldEnum)[keyof typeof AcademyScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    birth: 'birth',
    phone: 'phone',
    status: 'status',
    userType: 'userType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    duration: 'duration',
    academyId: 'academyId'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    planId: 'planId',
    academyId: 'academyId',
    start: 'start',
    end: 'end',
    active: 'active'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AcademyWhereInput = {
    AND?: AcademyWhereInput | AcademyWhereInput[]
    OR?: AcademyWhereInput[]
    NOT?: AcademyWhereInput | AcademyWhereInput[]
    id?: StringFilter<"Academy"> | string
    name?: StringFilter<"Academy"> | string
    createdAt?: DateTimeFilter<"Academy"> | Date | string
    updatedAt?: DateTimeFilter<"Academy"> | Date | string
    users?: UserListRelationFilter
    students?: StudentListRelationFilter
    plans?: PlanListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type AcademyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    students?: StudentOrderByRelationAggregateInput
    plans?: PlanOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type AcademyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AcademyWhereInput | AcademyWhereInput[]
    OR?: AcademyWhereInput[]
    NOT?: AcademyWhereInput | AcademyWhereInput[]
    name?: StringFilter<"Academy"> | string
    createdAt?: DateTimeFilter<"Academy"> | Date | string
    updatedAt?: DateTimeFilter<"Academy"> | Date | string
    users?: UserListRelationFilter
    students?: StudentListRelationFilter
    plans?: PlanListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id">

  export type AcademyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademyCountOrderByAggregateInput
    _max?: AcademyMaxOrderByAggregateInput
    _min?: AcademyMinOrderByAggregateInput
  }

  export type AcademyScalarWhereWithAggregatesInput = {
    AND?: AcademyScalarWhereWithAggregatesInput | AcademyScalarWhereWithAggregatesInput[]
    OR?: AcademyScalarWhereWithAggregatesInput[]
    NOT?: AcademyScalarWhereWithAggregatesInput | AcademyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Academy"> | string
    name?: StringWithAggregatesFilter<"Academy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Academy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Academy"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    phone?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    userType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    academies?: AcademyListRelationFilter
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    academies?: AcademyOrderByRelationAggregateInput
    Student?: StudentOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cpf?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    phone?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    userType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    academies?: AcademyListRelationFilter
    Student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
  }, "id" | "cpf">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    cpf?: StringWithAggregatesFilter<"User"> | string
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    phone?: StringWithAggregatesFilter<"User"> | string
    status?: BoolWithAggregatesFilter<"User"> | boolean
    userType?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    academies?: AcademyListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    academies?: AcademyOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    academies?: AcademyListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
  }, "id" | "userId">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringWithAggregatesFilter<"Student"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Plan"> | number
    academyId?: StringFilter<"Plan"> | string
    academy?: XOR<AcademyScalarRelationFilter, AcademyWhereInput>
    students?: SubscriptionListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    academyId?: SortOrder
    academy?: AcademyOrderByWithRelationInput
    students?: SubscriptionOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Plan"> | number
    academyId?: StringFilter<"Plan"> | string
    academy?: XOR<AcademyScalarRelationFilter, AcademyWhereInput>
    students?: SubscriptionListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    academyId?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duration?: IntWithAggregatesFilter<"Plan"> | number
    academyId?: StringWithAggregatesFilter<"Plan"> | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    studentId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    academyId?: StringFilter<"Subscription"> | string
    start?: DateTimeFilter<"Subscription"> | Date | string
    end?: DateTimeFilter<"Subscription"> | Date | string
    active?: BoolFilter<"Subscription"> | boolean
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    academy?: XOR<AcademyScalarRelationFilter, AcademyWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    planId?: SortOrder
    academyId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
    student?: StudentOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    academy?: AcademyOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    studentId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    academyId?: StringFilter<"Subscription"> | string
    start?: DateTimeFilter<"Subscription"> | Date | string
    end?: DateTimeFilter<"Subscription"> | Date | string
    active?: BoolFilter<"Subscription"> | boolean
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    academy?: XOR<AcademyScalarRelationFilter, AcademyWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    planId?: SortOrder
    academyId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    studentId?: StringWithAggregatesFilter<"Subscription"> | string
    planId?: StringWithAggregatesFilter<"Subscription"> | string
    academyId?: StringWithAggregatesFilter<"Subscription"> | string
    start?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    active?: BoolWithAggregatesFilter<"Subscription"> | boolean
  }

  export type AcademyCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutAcademiesInput
    students?: StudentCreateNestedManyWithoutAcademiesInput
    plans?: PlanCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAcademiesInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademiesInput
    plans?: PlanUncheckedCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAcademiesNestedInput
    students?: StudentUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAcademiesNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUncheckedUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    academies?: AcademyCreateNestedManyWithoutUsersInput
    Student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    academies?: AcademyUncheckedCreateNestedManyWithoutUsersInput
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academies?: AcademyUpdateManyWithoutUsersNestedInput
    Student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academies?: AcademyUncheckedUpdateManyWithoutUsersNestedInput
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    academies?: AcademyCreateNestedManyWithoutStudentsInput
    subscriptions?: SubscriptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId: string
    academies?: AcademyUncheckedCreateNestedManyWithoutStudentsInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    academies?: AcademyUpdateManyWithoutStudentsNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    academies?: AcademyUncheckedUpdateManyWithoutStudentsNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    academy: AcademyCreateNestedOneWithoutPlansInput
    students?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    academyId: string
    students?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    academy?: AcademyUpdateOneRequiredWithoutPlansNestedInput
    students?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    academyId?: StringFieldUpdateOperationsInput | string
    students?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    academyId: string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    academyId?: StringFieldUpdateOperationsInput | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    active?: boolean
    student: StudentCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutStudentsInput
    academy: AcademyCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    studentId: string
    planId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutStudentsNestedInput
    academy?: AcademyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    studentId: string
    planId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type PlanListRelationFilter = {
    every?: PlanWhereInput
    some?: PlanWhereInput
    none?: PlanWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AcademyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type AcademyListRelationFilter = {
    every?: AcademyWhereInput
    some?: AcademyWhereInput
    none?: AcademyWhereInput
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type AcademyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userType?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    birth?: SortOrder
    phone?: SortOrder
    status?: SortOrder
    userType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userType?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type AcademyScalarRelationFilter = {
    is?: AcademyWhereInput
    isNot?: AcademyWhereInput
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    academyId?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    academyId?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    academyId?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    planId?: SortOrder
    academyId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    planId?: SortOrder
    academyId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    planId?: SortOrder
    academyId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    active?: SortOrder
  }

  export type UserCreateNestedManyWithoutAcademiesInput = {
    create?: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput> | UserCreateWithoutAcademiesInput[] | UserUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcademiesInput | UserCreateOrConnectWithoutAcademiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutAcademiesInput = {
    create?: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput> | StudentCreateWithoutAcademiesInput[] | StudentUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademiesInput | StudentCreateOrConnectWithoutAcademiesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PlanCreateNestedManyWithoutAcademyInput = {
    create?: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput> | PlanCreateWithoutAcademyInput[] | PlanUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutAcademyInput | PlanCreateOrConnectWithoutAcademyInput[]
    createMany?: PlanCreateManyAcademyInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutAcademyInput = {
    create?: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput> | SubscriptionCreateWithoutAcademyInput[] | SubscriptionUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAcademyInput | SubscriptionCreateOrConnectWithoutAcademyInput[]
    createMany?: SubscriptionCreateManyAcademyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAcademiesInput = {
    create?: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput> | UserCreateWithoutAcademiesInput[] | UserUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcademiesInput | UserCreateOrConnectWithoutAcademiesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutAcademiesInput = {
    create?: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput> | StudentCreateWithoutAcademiesInput[] | StudentUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademiesInput | StudentCreateOrConnectWithoutAcademiesInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type PlanUncheckedCreateNestedManyWithoutAcademyInput = {
    create?: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput> | PlanCreateWithoutAcademyInput[] | PlanUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutAcademyInput | PlanCreateOrConnectWithoutAcademyInput[]
    createMany?: PlanCreateManyAcademyInputEnvelope
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutAcademyInput = {
    create?: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput> | SubscriptionCreateWithoutAcademyInput[] | SubscriptionUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAcademyInput | SubscriptionCreateOrConnectWithoutAcademyInput[]
    createMany?: SubscriptionCreateManyAcademyInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutAcademiesNestedInput = {
    create?: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput> | UserCreateWithoutAcademiesInput[] | UserUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcademiesInput | UserCreateOrConnectWithoutAcademiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAcademiesInput | UserUpsertWithWhereUniqueWithoutAcademiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAcademiesInput | UserUpdateWithWhereUniqueWithoutAcademiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAcademiesInput | UserUpdateManyWithWhereWithoutAcademiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutAcademiesNestedInput = {
    create?: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput> | StudentCreateWithoutAcademiesInput[] | StudentUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademiesInput | StudentCreateOrConnectWithoutAcademiesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutAcademiesInput | StudentUpsertWithWhereUniqueWithoutAcademiesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutAcademiesInput | StudentUpdateWithWhereUniqueWithoutAcademiesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutAcademiesInput | StudentUpdateManyWithWhereWithoutAcademiesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PlanUpdateManyWithoutAcademyNestedInput = {
    create?: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput> | PlanCreateWithoutAcademyInput[] | PlanUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutAcademyInput | PlanCreateOrConnectWithoutAcademyInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutAcademyInput | PlanUpsertWithWhereUniqueWithoutAcademyInput[]
    createMany?: PlanCreateManyAcademyInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutAcademyInput | PlanUpdateWithWhereUniqueWithoutAcademyInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutAcademyInput | PlanUpdateManyWithWhereWithoutAcademyInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutAcademyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput> | SubscriptionCreateWithoutAcademyInput[] | SubscriptionUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAcademyInput | SubscriptionCreateOrConnectWithoutAcademyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutAcademyInput | SubscriptionUpsertWithWhereUniqueWithoutAcademyInput[]
    createMany?: SubscriptionCreateManyAcademyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutAcademyInput | SubscriptionUpdateWithWhereUniqueWithoutAcademyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutAcademyInput | SubscriptionUpdateManyWithWhereWithoutAcademyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAcademiesNestedInput = {
    create?: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput> | UserCreateWithoutAcademiesInput[] | UserUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAcademiesInput | UserCreateOrConnectWithoutAcademiesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAcademiesInput | UserUpsertWithWhereUniqueWithoutAcademiesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAcademiesInput | UserUpdateWithWhereUniqueWithoutAcademiesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAcademiesInput | UserUpdateManyWithWhereWithoutAcademiesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutAcademiesNestedInput = {
    create?: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput> | StudentCreateWithoutAcademiesInput[] | StudentUncheckedCreateWithoutAcademiesInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutAcademiesInput | StudentCreateOrConnectWithoutAcademiesInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutAcademiesInput | StudentUpsertWithWhereUniqueWithoutAcademiesInput[]
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutAcademiesInput | StudentUpdateWithWhereUniqueWithoutAcademiesInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutAcademiesInput | StudentUpdateManyWithWhereWithoutAcademiesInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type PlanUncheckedUpdateManyWithoutAcademyNestedInput = {
    create?: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput> | PlanCreateWithoutAcademyInput[] | PlanUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: PlanCreateOrConnectWithoutAcademyInput | PlanCreateOrConnectWithoutAcademyInput[]
    upsert?: PlanUpsertWithWhereUniqueWithoutAcademyInput | PlanUpsertWithWhereUniqueWithoutAcademyInput[]
    createMany?: PlanCreateManyAcademyInputEnvelope
    set?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    disconnect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    delete?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    connect?: PlanWhereUniqueInput | PlanWhereUniqueInput[]
    update?: PlanUpdateWithWhereUniqueWithoutAcademyInput | PlanUpdateWithWhereUniqueWithoutAcademyInput[]
    updateMany?: PlanUpdateManyWithWhereWithoutAcademyInput | PlanUpdateManyWithWhereWithoutAcademyInput[]
    deleteMany?: PlanScalarWhereInput | PlanScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutAcademyNestedInput = {
    create?: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput> | SubscriptionCreateWithoutAcademyInput[] | SubscriptionUncheckedCreateWithoutAcademyInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutAcademyInput | SubscriptionCreateOrConnectWithoutAcademyInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutAcademyInput | SubscriptionUpsertWithWhereUniqueWithoutAcademyInput[]
    createMany?: SubscriptionCreateManyAcademyInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutAcademyInput | SubscriptionUpdateWithWhereUniqueWithoutAcademyInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutAcademyInput | SubscriptionUpdateManyWithWhereWithoutAcademyInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AcademyCreateNestedManyWithoutUsersInput = {
    create?: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput> | AcademyCreateWithoutUsersInput[] | AcademyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutUsersInput | AcademyCreateOrConnectWithoutUsersInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type AcademyUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput> | AcademyCreateWithoutUsersInput[] | AcademyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutUsersInput | AcademyCreateOrConnectWithoutUsersInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    connect?: StudentWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AcademyUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput> | AcademyCreateWithoutUsersInput[] | AcademyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutUsersInput | AcademyCreateOrConnectWithoutUsersInput[]
    upsert?: AcademyUpsertWithWhereUniqueWithoutUsersInput | AcademyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    disconnect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    delete?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    update?: AcademyUpdateWithWhereUniqueWithoutUsersInput | AcademyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AcademyUpdateManyWithWhereWithoutUsersInput | AcademyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
  }

  export type StudentUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type AcademyUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput> | AcademyCreateWithoutUsersInput[] | AcademyUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutUsersInput | AcademyCreateOrConnectWithoutUsersInput[]
    upsert?: AcademyUpsertWithWhereUniqueWithoutUsersInput | AcademyUpsertWithWhereUniqueWithoutUsersInput[]
    set?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    disconnect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    delete?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    update?: AcademyUpdateWithWhereUniqueWithoutUsersInput | AcademyUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: AcademyUpdateManyWithWhereWithoutUsersInput | AcademyUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
  }

  export type StudentUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentCreateOrConnectWithoutUserInput
    upsert?: StudentUpsertWithoutUserInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutUserInput, StudentUpdateWithoutUserInput>, StudentUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutStudentInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    connect?: UserWhereUniqueInput
  }

  export type AcademyCreateNestedManyWithoutStudentsInput = {
    create?: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput> | AcademyCreateWithoutStudentsInput[] | AcademyUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutStudentsInput | AcademyCreateOrConnectWithoutStudentsInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput> | SubscriptionCreateWithoutStudentInput[] | SubscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutStudentInput | SubscriptionCreateOrConnectWithoutStudentInput[]
    createMany?: SubscriptionCreateManyStudentInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type AcademyUncheckedCreateNestedManyWithoutStudentsInput = {
    create?: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput> | AcademyCreateWithoutStudentsInput[] | AcademyUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutStudentsInput | AcademyCreateOrConnectWithoutStudentsInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput> | SubscriptionCreateWithoutStudentInput[] | SubscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutStudentInput | SubscriptionCreateOrConnectWithoutStudentInput[]
    createMany?: SubscriptionCreateManyStudentInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentInput
    upsert?: UserUpsertWithoutStudentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentInput, UserUpdateWithoutStudentInput>, UserUncheckedUpdateWithoutStudentInput>
  }

  export type AcademyUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput> | AcademyCreateWithoutStudentsInput[] | AcademyUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutStudentsInput | AcademyCreateOrConnectWithoutStudentsInput[]
    upsert?: AcademyUpsertWithWhereUniqueWithoutStudentsInput | AcademyUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    disconnect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    delete?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    update?: AcademyUpdateWithWhereUniqueWithoutStudentsInput | AcademyUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: AcademyUpdateManyWithWhereWithoutStudentsInput | AcademyUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput> | SubscriptionCreateWithoutStudentInput[] | SubscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutStudentInput | SubscriptionCreateOrConnectWithoutStudentInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutStudentInput | SubscriptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubscriptionCreateManyStudentInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutStudentInput | SubscriptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutStudentInput | SubscriptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AcademyUncheckedUpdateManyWithoutStudentsNestedInput = {
    create?: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput> | AcademyCreateWithoutStudentsInput[] | AcademyUncheckedCreateWithoutStudentsInput[]
    connectOrCreate?: AcademyCreateOrConnectWithoutStudentsInput | AcademyCreateOrConnectWithoutStudentsInput[]
    upsert?: AcademyUpsertWithWhereUniqueWithoutStudentsInput | AcademyUpsertWithWhereUniqueWithoutStudentsInput[]
    set?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    disconnect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    delete?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    connect?: AcademyWhereUniqueInput | AcademyWhereUniqueInput[]
    update?: AcademyUpdateWithWhereUniqueWithoutStudentsInput | AcademyUpdateWithWhereUniqueWithoutStudentsInput[]
    updateMany?: AcademyUpdateManyWithWhereWithoutStudentsInput | AcademyUpdateManyWithWhereWithoutStudentsInput[]
    deleteMany?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput> | SubscriptionCreateWithoutStudentInput[] | SubscriptionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutStudentInput | SubscriptionCreateOrConnectWithoutStudentInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutStudentInput | SubscriptionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubscriptionCreateManyStudentInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutStudentInput | SubscriptionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutStudentInput | SubscriptionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type AcademyCreateNestedOneWithoutPlansInput = {
    create?: XOR<AcademyCreateWithoutPlansInput, AcademyUncheckedCreateWithoutPlansInput>
    connectOrCreate?: AcademyCreateOrConnectWithoutPlansInput
    connect?: AcademyWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AcademyUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<AcademyCreateWithoutPlansInput, AcademyUncheckedCreateWithoutPlansInput>
    connectOrCreate?: AcademyCreateOrConnectWithoutPlansInput
    upsert?: AcademyUpsertWithoutPlansInput
    connect?: AcademyWhereUniqueInput
    update?: XOR<XOR<AcademyUpdateToOneWithWhereWithoutPlansInput, AcademyUpdateWithoutPlansInput>, AcademyUncheckedUpdateWithoutPlansInput>
  }

  export type SubscriptionUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput> | SubscriptionCreateWithoutPlanInput[] | SubscriptionUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutPlanInput | SubscriptionCreateOrConnectWithoutPlanInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutPlanInput | SubscriptionUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: SubscriptionCreateManyPlanInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutPlanInput | SubscriptionUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutPlanInput | SubscriptionUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<StudentCreateWithoutSubscriptionsInput, StudentUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubscriptionsInput
    connect?: StudentWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutStudentsInput = {
    create?: XOR<PlanCreateWithoutStudentsInput, PlanUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutStudentsInput
    connect?: PlanWhereUniqueInput
  }

  export type AcademyCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<AcademyCreateWithoutSubscriptionsInput, AcademyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: AcademyCreateOrConnectWithoutSubscriptionsInput
    connect?: AcademyWhereUniqueInput
  }

  export type StudentUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<StudentCreateWithoutSubscriptionsInput, StudentUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubscriptionsInput
    upsert?: StudentUpsertWithoutSubscriptionsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubscriptionsInput, StudentUpdateWithoutSubscriptionsInput>, StudentUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type PlanUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<PlanCreateWithoutStudentsInput, PlanUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: PlanCreateOrConnectWithoutStudentsInput
    upsert?: PlanUpsertWithoutStudentsInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutStudentsInput, PlanUpdateWithoutStudentsInput>, PlanUncheckedUpdateWithoutStudentsInput>
  }

  export type AcademyUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<AcademyCreateWithoutSubscriptionsInput, AcademyUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: AcademyCreateOrConnectWithoutSubscriptionsInput
    upsert?: AcademyUpsertWithoutSubscriptionsInput
    connect?: AcademyWhereUniqueInput
    update?: XOR<XOR<AcademyUpdateToOneWithWhereWithoutSubscriptionsInput, AcademyUpdateWithoutSubscriptionsInput>, AcademyUncheckedUpdateWithoutSubscriptionsInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateWithoutAcademiesInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAcademiesInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Student?: StudentUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAcademiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput>
  }

  export type StudentCreateWithoutAcademiesInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    subscriptions?: SubscriptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAcademiesInput = {
    id?: string
    userId: string
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAcademiesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput>
  }

  export type PlanCreateWithoutAcademyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    students?: SubscriptionCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateWithoutAcademyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    students?: SubscriptionUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanCreateOrConnectWithoutAcademyInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput>
  }

  export type PlanCreateManyAcademyInputEnvelope = {
    data: PlanCreateManyAcademyInput | PlanCreateManyAcademyInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutAcademyInput = {
    id?: string
    start: Date | string
    end: Date | string
    active?: boolean
    student: StudentCreateNestedOneWithoutSubscriptionsInput
    plan: PlanCreateNestedOneWithoutStudentsInput
  }

  export type SubscriptionUncheckedCreateWithoutAcademyInput = {
    id?: string
    studentId: string
    planId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutAcademyInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput>
  }

  export type SubscriptionCreateManyAcademyInputEnvelope = {
    data: SubscriptionCreateManyAcademyInput | SubscriptionCreateManyAcademyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutAcademiesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAcademiesInput, UserUncheckedUpdateWithoutAcademiesInput>
    create: XOR<UserCreateWithoutAcademiesInput, UserUncheckedCreateWithoutAcademiesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAcademiesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAcademiesInput, UserUncheckedUpdateWithoutAcademiesInput>
  }

  export type UserUpdateManyWithWhereWithoutAcademiesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAcademiesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    cpf?: StringFilter<"User"> | string
    birth?: DateTimeFilter<"User"> | Date | string
    phone?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    userType?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutAcademiesInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutAcademiesInput, StudentUncheckedUpdateWithoutAcademiesInput>
    create: XOR<StudentCreateWithoutAcademiesInput, StudentUncheckedCreateWithoutAcademiesInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutAcademiesInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutAcademiesInput, StudentUncheckedUpdateWithoutAcademiesInput>
  }

  export type StudentUpdateManyWithWhereWithoutAcademiesInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutAcademiesInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringFilter<"Student"> | string
  }

  export type PlanUpsertWithWhereUniqueWithoutAcademyInput = {
    where: PlanWhereUniqueInput
    update: XOR<PlanUpdateWithoutAcademyInput, PlanUncheckedUpdateWithoutAcademyInput>
    create: XOR<PlanCreateWithoutAcademyInput, PlanUncheckedCreateWithoutAcademyInput>
  }

  export type PlanUpdateWithWhereUniqueWithoutAcademyInput = {
    where: PlanWhereUniqueInput
    data: XOR<PlanUpdateWithoutAcademyInput, PlanUncheckedUpdateWithoutAcademyInput>
  }

  export type PlanUpdateManyWithWhereWithoutAcademyInput = {
    where: PlanScalarWhereInput
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyWithoutAcademyInput>
  }

  export type PlanScalarWhereInput = {
    AND?: PlanScalarWhereInput | PlanScalarWhereInput[]
    OR?: PlanScalarWhereInput[]
    NOT?: PlanScalarWhereInput | PlanScalarWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duration?: IntFilter<"Plan"> | number
    academyId?: StringFilter<"Plan"> | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutAcademyInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutAcademyInput, SubscriptionUncheckedUpdateWithoutAcademyInput>
    create: XOR<SubscriptionCreateWithoutAcademyInput, SubscriptionUncheckedCreateWithoutAcademyInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutAcademyInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutAcademyInput, SubscriptionUncheckedUpdateWithoutAcademyInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutAcademyInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutAcademyInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    studentId?: StringFilter<"Subscription"> | string
    planId?: StringFilter<"Subscription"> | string
    academyId?: StringFilter<"Subscription"> | string
    start?: DateTimeFilter<"Subscription"> | Date | string
    end?: DateTimeFilter<"Subscription"> | Date | string
    active?: BoolFilter<"Subscription"> | boolean
  }

  export type AcademyCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutAcademiesInput
    plans?: PlanCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutAcademiesInput
    plans?: PlanUncheckedCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutAcademyInput
  }

  export type AcademyCreateOrConnectWithoutUsersInput = {
    where: AcademyWhereUniqueInput
    create: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput>
  }

  export type StudentCreateWithoutUserInput = {
    id?: string
    academies?: AcademyCreateNestedManyWithoutStudentsInput
    subscriptions?: SubscriptionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutUserInput = {
    id?: string
    academies?: AcademyUncheckedCreateNestedManyWithoutStudentsInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutUserInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
  }

  export type AcademyUpsertWithWhereUniqueWithoutUsersInput = {
    where: AcademyWhereUniqueInput
    update: XOR<AcademyUpdateWithoutUsersInput, AcademyUncheckedUpdateWithoutUsersInput>
    create: XOR<AcademyCreateWithoutUsersInput, AcademyUncheckedCreateWithoutUsersInput>
  }

  export type AcademyUpdateWithWhereUniqueWithoutUsersInput = {
    where: AcademyWhereUniqueInput
    data: XOR<AcademyUpdateWithoutUsersInput, AcademyUncheckedUpdateWithoutUsersInput>
  }

  export type AcademyUpdateManyWithWhereWithoutUsersInput = {
    where: AcademyScalarWhereInput
    data: XOR<AcademyUpdateManyMutationInput, AcademyUncheckedUpdateManyWithoutUsersInput>
  }

  export type AcademyScalarWhereInput = {
    AND?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
    OR?: AcademyScalarWhereInput[]
    NOT?: AcademyScalarWhereInput | AcademyScalarWhereInput[]
    id?: StringFilter<"Academy"> | string
    name?: StringFilter<"Academy"> | string
    createdAt?: DateTimeFilter<"Academy"> | Date | string
    updatedAt?: DateTimeFilter<"Academy"> | Date | string
  }

  export type StudentUpsertWithoutUserInput = {
    update: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
    create: XOR<StudentCreateWithoutUserInput, StudentUncheckedCreateWithoutUserInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutUserInput, StudentUncheckedUpdateWithoutUserInput>
  }

  export type StudentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    academies?: AcademyUpdateManyWithoutStudentsNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    academies?: AcademyUncheckedUpdateManyWithoutStudentsNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutStudentInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    academies?: AcademyCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutStudentInput = {
    id?: string
    name: string
    cpf: string
    birth: Date | string
    phone: string
    status?: boolean
    userType?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    academies?: AcademyUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutStudentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
  }

  export type AcademyCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutAcademiesInput
    plans?: PlanCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAcademiesInput
    plans?: PlanUncheckedCreateNestedManyWithoutAcademyInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutAcademyInput
  }

  export type AcademyCreateOrConnectWithoutStudentsInput = {
    where: AcademyWhereUniqueInput
    create: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput>
  }

  export type SubscriptionCreateWithoutStudentInput = {
    id?: string
    start: Date | string
    end: Date | string
    active?: boolean
    plan: PlanCreateNestedOneWithoutStudentsInput
    academy: AcademyCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutStudentInput = {
    id?: string
    planId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutStudentInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput>
  }

  export type SubscriptionCreateManyStudentInputEnvelope = {
    data: SubscriptionCreateManyStudentInput | SubscriptionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentInput = {
    update: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
    create: XOR<UserCreateWithoutStudentInput, UserUncheckedCreateWithoutStudentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentInput, UserUncheckedUpdateWithoutStudentInput>
  }

  export type UserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academies?: AcademyUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    academies?: AcademyUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type AcademyUpsertWithWhereUniqueWithoutStudentsInput = {
    where: AcademyWhereUniqueInput
    update: XOR<AcademyUpdateWithoutStudentsInput, AcademyUncheckedUpdateWithoutStudentsInput>
    create: XOR<AcademyCreateWithoutStudentsInput, AcademyUncheckedCreateWithoutStudentsInput>
  }

  export type AcademyUpdateWithWhereUniqueWithoutStudentsInput = {
    where: AcademyWhereUniqueInput
    data: XOR<AcademyUpdateWithoutStudentsInput, AcademyUncheckedUpdateWithoutStudentsInput>
  }

  export type AcademyUpdateManyWithWhereWithoutStudentsInput = {
    where: AcademyScalarWhereInput
    data: XOR<AcademyUpdateManyMutationInput, AcademyUncheckedUpdateManyWithoutStudentsInput>
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutStudentInput, SubscriptionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubscriptionCreateWithoutStudentInput, SubscriptionUncheckedCreateWithoutStudentInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutStudentInput, SubscriptionUncheckedUpdateWithoutStudentInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutStudentInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutStudentInput>
  }

  export type AcademyCreateWithoutPlansInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutAcademiesInput
    students?: StudentCreateNestedManyWithoutAcademiesInput
    subscriptions?: SubscriptionCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUncheckedCreateWithoutPlansInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAcademiesInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademiesInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutAcademyInput
  }

  export type AcademyCreateOrConnectWithoutPlansInput = {
    where: AcademyWhereUniqueInput
    create: XOR<AcademyCreateWithoutPlansInput, AcademyUncheckedCreateWithoutPlansInput>
  }

  export type SubscriptionCreateWithoutPlanInput = {
    id?: string
    start: Date | string
    end: Date | string
    active?: boolean
    student: StudentCreateNestedOneWithoutSubscriptionsInput
    academy: AcademyCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutPlanInput = {
    id?: string
    studentId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionCreateOrConnectWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionCreateManyPlanInputEnvelope = {
    data: SubscriptionCreateManyPlanInput | SubscriptionCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type AcademyUpsertWithoutPlansInput = {
    update: XOR<AcademyUpdateWithoutPlansInput, AcademyUncheckedUpdateWithoutPlansInput>
    create: XOR<AcademyCreateWithoutPlansInput, AcademyUncheckedCreateWithoutPlansInput>
    where?: AcademyWhereInput
  }

  export type AcademyUpdateToOneWithWhereWithoutPlansInput = {
    where?: AcademyWhereInput
    data: XOR<AcademyUpdateWithoutPlansInput, AcademyUncheckedUpdateWithoutPlansInput>
  }

  export type AcademyUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAcademiesNestedInput
    students?: StudentUpdateManyWithoutAcademiesNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAcademiesNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademiesNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutAcademyNestedInput
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
    create: XOR<SubscriptionCreateWithoutPlanInput, SubscriptionUncheckedCreateWithoutPlanInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutPlanInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutPlanInput, SubscriptionUncheckedUpdateWithoutPlanInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutPlanInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutPlanInput>
  }

  export type StudentCreateWithoutSubscriptionsInput = {
    id?: string
    user: UserCreateNestedOneWithoutStudentInput
    academies?: AcademyCreateNestedManyWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    userId: string
    academies?: AcademyUncheckedCreateNestedManyWithoutStudentsInput
  }

  export type StudentCreateOrConnectWithoutSubscriptionsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubscriptionsInput, StudentUncheckedCreateWithoutSubscriptionsInput>
  }

  export type PlanCreateWithoutStudentsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    academy: AcademyCreateNestedOneWithoutPlansInput
  }

  export type PlanUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
    academyId: string
  }

  export type PlanCreateOrConnectWithoutStudentsInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutStudentsInput, PlanUncheckedCreateWithoutStudentsInput>
  }

  export type AcademyCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutAcademiesInput
    students?: StudentCreateNestedManyWithoutAcademiesInput
    plans?: PlanCreateNestedManyWithoutAcademyInput
  }

  export type AcademyUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutAcademiesInput
    students?: StudentUncheckedCreateNestedManyWithoutAcademiesInput
    plans?: PlanUncheckedCreateNestedManyWithoutAcademyInput
  }

  export type AcademyCreateOrConnectWithoutSubscriptionsInput = {
    where: AcademyWhereUniqueInput
    create: XOR<AcademyCreateWithoutSubscriptionsInput, AcademyUncheckedCreateWithoutSubscriptionsInput>
  }

  export type StudentUpsertWithoutSubscriptionsInput = {
    update: XOR<StudentUpdateWithoutSubscriptionsInput, StudentUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<StudentCreateWithoutSubscriptionsInput, StudentUncheckedCreateWithoutSubscriptionsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubscriptionsInput, StudentUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type StudentUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    academies?: AcademyUpdateManyWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    academies?: AcademyUncheckedUpdateManyWithoutStudentsNestedInput
  }

  export type PlanUpsertWithoutStudentsInput = {
    update: XOR<PlanUpdateWithoutStudentsInput, PlanUncheckedUpdateWithoutStudentsInput>
    create: XOR<PlanCreateWithoutStudentsInput, PlanUncheckedCreateWithoutStudentsInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutStudentsInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutStudentsInput, PlanUncheckedUpdateWithoutStudentsInput>
  }

  export type PlanUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    academy?: AcademyUpdateOneRequiredWithoutPlansNestedInput
  }

  export type PlanUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    academyId?: StringFieldUpdateOperationsInput | string
  }

  export type AcademyUpsertWithoutSubscriptionsInput = {
    update: XOR<AcademyUpdateWithoutSubscriptionsInput, AcademyUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<AcademyCreateWithoutSubscriptionsInput, AcademyUncheckedCreateWithoutSubscriptionsInput>
    where?: AcademyWhereInput
  }

  export type AcademyUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: AcademyWhereInput
    data: XOR<AcademyUpdateWithoutSubscriptionsInput, AcademyUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type AcademyUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAcademiesNestedInput
    students?: StudentUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAcademiesNestedInput
    students?: StudentUncheckedUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUncheckedUpdateManyWithoutAcademyNestedInput
  }

  export type PlanCreateManyAcademyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    duration: number
  }

  export type SubscriptionCreateManyAcademyInput = {
    id?: string
    studentId: string
    planId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type UserUpdateWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Student?: StudentUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    userType?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpdateWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutStudentNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutAcademiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlanUpdateWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    students?: SubscriptionUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
    students?: SubscriptionUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateManyWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionUpdateWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutSubscriptionsNestedInput
    plan?: PlanUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutAcademyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AcademyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUncheckedUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyStudentInput = {
    id?: string
    planId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type AcademyUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutAcademiesNestedInput
    plans?: PlanUncheckedUpdateManyWithoutAcademyNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutAcademyNestedInput
  }

  export type AcademyUncheckedUpdateManyWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    plan?: PlanUpdateOneRequiredWithoutStudentsNestedInput
    academy?: AcademyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateManyPlanInput = {
    id?: string
    studentId: string
    academyId: string
    start: Date | string
    end: Date | string
    active?: boolean
  }

  export type SubscriptionUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentUpdateOneRequiredWithoutSubscriptionsNestedInput
    academy?: AcademyUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    academyId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
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