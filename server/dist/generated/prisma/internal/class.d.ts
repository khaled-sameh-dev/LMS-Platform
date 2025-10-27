import * as runtime from "@prisma/client/runtime/binary";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options?: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = Prisma.PrismaClientOptions['omit'], in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends (LogOpts | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => runtime.Types.Utils.JsPromise<void> : Prisma.LogEvent) => void): PrismaClient;
    /**
     * Connect with the database
     */
    $connect(): runtime.Types.Utils.JsPromise<void>;
    /**
     * Disconnect from the database
     */
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
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
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
    }): runtime.Types.Utils.JsPromise<R>;
    /**
     * Executes a raw MongoDB command and returns the result of it.
     * @example
     * ```
     * const user = await prisma.$runCommandRaw({
     *   aggregate: 'User',
     *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
     *   explain: false,
     * })
     * ```
     *
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
     */
    $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    /**
 * `prisma.course`: Exposes CRUD operations for the **Course** model.
  * Example usage:
  * ```ts
  * // Fetch zero or more Courses
  * const courses = await prisma.course.findMany()
  * ```
  */
    get course(): Prisma.CourseDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.category`: Exposes CRUD operations for the **Category** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Categories
      * const categories = await prisma.category.findMany()
      * ```
      */
    get category(): Prisma.CategoryDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Teachers
      * const teachers = await prisma.teacher.findMany()
      * ```
      */
    get teacher(): Prisma.TeacherDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.student`: Exposes CRUD operations for the **Student** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Students
      * const students = await prisma.student.findMany()
      * ```
      */
    get student(): Prisma.StudentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.section`: Exposes CRUD operations for the **Section** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Sections
      * const sections = await prisma.section.findMany()
      * ```
      */
    get section(): Prisma.SectionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.chapter`: Exposes CRUD operations for the **Chapter** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Chapters
      * const chapters = await prisma.chapter.findMany()
      * ```
      */
    get chapter(): Prisma.ChapterDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Attachments
      * const attachments = await prisma.attachment.findMany()
      * ```
      */
    get attachment(): Prisma.AttachmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    /**
     * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
      * Example usage:
      * ```ts
      * // Fetch zero or more Enrollments
      * const enrollments = await prisma.enrollment.findMany()
      * ```
      */
    get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(dirname: string): PrismaClientConstructor;
//# sourceMappingURL=class.d.ts.map