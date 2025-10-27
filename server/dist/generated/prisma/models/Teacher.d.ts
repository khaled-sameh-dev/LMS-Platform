import type * as runtime from "@prisma/client/runtime/binary";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Teacher
 *
 */
export type TeacherModel = runtime.Types.Result.DefaultSelection<Prisma.$TeacherPayload>;
export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
};
export type TeacherMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
    avatarUrl: string | null;
};
export type TeacherMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
    avatarUrl: string | null;
};
export type TeacherCountAggregateOutputType = {
    id: number;
    name: number;
    bio: number;
    avatarUrl: number;
    _all: number;
};
export type TeacherMinAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    avatarUrl?: true;
};
export type TeacherMaxAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    avatarUrl?: true;
};
export type TeacherCountAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    avatarUrl?: true;
    _all?: true;
};
export type TeacherAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.TeacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType;
};
export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTeacher[P]> : Prisma.GetScalarType<T[P], AggregateTeacher[P]>;
};
export type TeacherGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TeacherWhereInput;
    orderBy?: Prisma.TeacherOrderByWithAggregationInput | Prisma.TeacherOrderByWithAggregationInput[];
    by: Prisma.TeacherScalarFieldEnum[] | Prisma.TeacherScalarFieldEnum;
    having?: Prisma.TeacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
};
export type TeacherGroupByOutputType = {
    id: string;
    name: string;
    bio: string;
    avatarUrl: string;
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
};
type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TeacherGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TeacherGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TeacherGroupByOutputType[P]>;
}>>;
export type TeacherWhereInput = {
    AND?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    OR?: Prisma.TeacherWhereInput[];
    NOT?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    id?: Prisma.StringFilter<"Teacher"> | string;
    name?: Prisma.StringFilter<"Teacher"> | string;
    bio?: Prisma.StringFilter<"Teacher"> | string;
    avatarUrl?: Prisma.StringFilter<"Teacher"> | string;
    courses?: Prisma.CourseListRelationFilter;
};
export type TeacherOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    courses?: Prisma.CourseOrderByRelationAggregateInput;
};
export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    OR?: Prisma.TeacherWhereInput[];
    NOT?: Prisma.TeacherWhereInput | Prisma.TeacherWhereInput[];
    name?: Prisma.StringFilter<"Teacher"> | string;
    bio?: Prisma.StringFilter<"Teacher"> | string;
    avatarUrl?: Prisma.StringFilter<"Teacher"> | string;
    courses?: Prisma.CourseListRelationFilter;
}, "id">;
export type TeacherOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
    _count?: Prisma.TeacherCountOrderByAggregateInput;
    _max?: Prisma.TeacherMaxOrderByAggregateInput;
    _min?: Prisma.TeacherMinOrderByAggregateInput;
};
export type TeacherScalarWhereWithAggregatesInput = {
    AND?: Prisma.TeacherScalarWhereWithAggregatesInput | Prisma.TeacherScalarWhereWithAggregatesInput[];
    OR?: Prisma.TeacherScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TeacherScalarWhereWithAggregatesInput | Prisma.TeacherScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    bio?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
    avatarUrl?: Prisma.StringWithAggregatesFilter<"Teacher"> | string;
};
export type TeacherCreateInput = {
    id?: string;
    name: string;
    bio: string;
    avatarUrl: string;
    courses?: Prisma.CourseCreateNestedManyWithoutTeacherInput;
};
export type TeacherUncheckedCreateInput = {
    id?: string;
    name: string;
    bio: string;
    avatarUrl: string;
    courses?: Prisma.CourseUncheckedCreateNestedManyWithoutTeacherInput;
};
export type TeacherUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUpdateManyWithoutTeacherNestedInput;
};
export type TeacherUncheckedUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    courses?: Prisma.CourseUncheckedUpdateManyWithoutTeacherNestedInput;
};
export type TeacherCreateManyInput = {
    id?: string;
    name: string;
    bio: string;
    avatarUrl: string;
};
export type TeacherUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeacherUncheckedUpdateManyInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeacherNullableScalarRelationFilter = {
    is?: Prisma.TeacherWhereInput | null;
    isNot?: Prisma.TeacherWhereInput | null;
};
export type TeacherCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
};
export type TeacherMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
};
export type TeacherMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    avatarUrl?: Prisma.SortOrder;
};
export type TeacherCreateNestedOneWithoutCoursesInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutCoursesInput, Prisma.TeacherUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutCoursesInput;
    connect?: Prisma.TeacherWhereUniqueInput;
};
export type TeacherUpdateOneWithoutCoursesNestedInput = {
    create?: Prisma.XOR<Prisma.TeacherCreateWithoutCoursesInput, Prisma.TeacherUncheckedCreateWithoutCoursesInput>;
    connectOrCreate?: Prisma.TeacherCreateOrConnectWithoutCoursesInput;
    upsert?: Prisma.TeacherUpsertWithoutCoursesInput;
    disconnect?: boolean;
    delete?: Prisma.TeacherWhereInput | boolean;
    connect?: Prisma.TeacherWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TeacherUpdateToOneWithWhereWithoutCoursesInput, Prisma.TeacherUpdateWithoutCoursesInput>, Prisma.TeacherUncheckedUpdateWithoutCoursesInput>;
};
export type TeacherCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    bio: string;
    avatarUrl: string;
};
export type TeacherUncheckedCreateWithoutCoursesInput = {
    id?: string;
    name: string;
    bio: string;
    avatarUrl: string;
};
export type TeacherCreateOrConnectWithoutCoursesInput = {
    where: Prisma.TeacherWhereUniqueInput;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutCoursesInput, Prisma.TeacherUncheckedCreateWithoutCoursesInput>;
};
export type TeacherUpsertWithoutCoursesInput = {
    update: Prisma.XOR<Prisma.TeacherUpdateWithoutCoursesInput, Prisma.TeacherUncheckedUpdateWithoutCoursesInput>;
    create: Prisma.XOR<Prisma.TeacherCreateWithoutCoursesInput, Prisma.TeacherUncheckedCreateWithoutCoursesInput>;
    where?: Prisma.TeacherWhereInput;
};
export type TeacherUpdateToOneWithWhereWithoutCoursesInput = {
    where?: Prisma.TeacherWhereInput;
    data: Prisma.XOR<Prisma.TeacherUpdateWithoutCoursesInput, Prisma.TeacherUncheckedUpdateWithoutCoursesInput>;
};
export type TeacherUpdateWithoutCoursesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TeacherUncheckedUpdateWithoutCoursesInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.StringFieldUpdateOperationsInput | string;
    avatarUrl?: Prisma.StringFieldUpdateOperationsInput | string;
};
/**
 * Count Type TeacherCountOutputType
 */
export type TeacherCountOutputType = {
    courses: number;
};
export type TeacherCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | TeacherCountOutputTypeCountCoursesArgs;
};
/**
 * TeacherCountOutputType without action
 */
export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: Prisma.TeacherCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * TeacherCountOutputType without action
 */
export type TeacherCountOutputTypeCountCoursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
};
export type TeacherSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
    courses?: boolean | Prisma.Teacher$coursesArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["teacher"]>;
export type TeacherSelectScalar = {
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    avatarUrl?: boolean;
};
export type TeacherOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "bio" | "avatarUrl", ExtArgs["result"]["teacher"]>;
export type TeacherInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    courses?: boolean | Prisma.Teacher$coursesArgs<ExtArgs>;
    _count?: boolean | Prisma.TeacherCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $TeacherPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Teacher";
    objects: {
        courses: Prisma.$CoursePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        bio: string;
        avatarUrl: string;
    }, ExtArgs["result"]["teacher"]>;
    composites: {};
};
export type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TeacherPayload, S>;
export type TeacherCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TeacherCountAggregateInputType | true;
};
export interface TeacherDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Teacher'];
        meta: {
            name: 'Teacher';
        };
    };
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: Prisma.SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: Prisma.SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     *
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TeacherFindManyArgs>(args?: Prisma.SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     *
     */
    create<T extends TeacherCreateArgs>(args: Prisma.SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TeacherCreateManyArgs>(args?: Prisma.SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     *
     */
    delete<T extends TeacherDeleteArgs>(args: Prisma.SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TeacherUpdateArgs>(args: Prisma.SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: Prisma.SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: Prisma.SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: Prisma.SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Teachers that matches the filter.
     * @param {TeacherFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const teacher = await prisma.teacher.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.TeacherFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Teacher.
     * @param {TeacherAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const teacher = await prisma.teacher.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.TeacherAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(args?: Prisma.Subset<T, TeacherCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TeacherCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(args: Prisma.Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;
    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
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
    groupBy<T extends TeacherGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TeacherGroupByArgs['orderBy'];
    } : {
        orderBy?: TeacherGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Teacher model
     */
    readonly fields: TeacherFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Teacher.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    courses<T extends Prisma.Teacher$coursesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Teacher$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the Teacher model
 */
export interface TeacherFieldRefs {
    readonly id: Prisma.FieldRef<"Teacher", 'String'>;
    readonly name: Prisma.FieldRef<"Teacher", 'String'>;
    readonly bio: Prisma.FieldRef<"Teacher", 'String'>;
    readonly avatarUrl: Prisma.FieldRef<"Teacher", 'String'>;
}
/**
 * Teacher findUnique
 */
export type TeacherFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter, which Teacher to fetch.
     */
    where: Prisma.TeacherWhereUniqueInput;
};
/**
 * Teacher findUniqueOrThrow
 */
export type TeacherFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter, which Teacher to fetch.
     */
    where: Prisma.TeacherWhereUniqueInput;
};
/**
 * Teacher findFirst
 */
export type TeacherFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter, which Teacher to fetch.
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teachers.
     */
    cursor?: Prisma.TeacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teachers.
     */
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
/**
 * Teacher findFirstOrThrow
 */
export type TeacherFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter, which Teacher to fetch.
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Teachers.
     */
    cursor?: Prisma.TeacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Teachers.
     */
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
/**
 * Teacher findMany
 */
export type TeacherFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter, which Teachers to fetch.
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Teachers to fetch.
     */
    orderBy?: Prisma.TeacherOrderByWithRelationInput | Prisma.TeacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Teachers.
     */
    cursor?: Prisma.TeacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Teachers.
     */
    skip?: number;
    distinct?: Prisma.TeacherScalarFieldEnum | Prisma.TeacherScalarFieldEnum[];
};
/**
 * Teacher create
 */
export type TeacherCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * The data needed to create a Teacher.
     */
    data: Prisma.XOR<Prisma.TeacherCreateInput, Prisma.TeacherUncheckedCreateInput>;
};
/**
 * Teacher createMany
 */
export type TeacherCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: Prisma.TeacherCreateManyInput | Prisma.TeacherCreateManyInput[];
};
/**
 * Teacher update
 */
export type TeacherUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * The data needed to update a Teacher.
     */
    data: Prisma.XOR<Prisma.TeacherUpdateInput, Prisma.TeacherUncheckedUpdateInput>;
    /**
     * Choose, which Teacher to update.
     */
    where: Prisma.TeacherWhereUniqueInput;
};
/**
 * Teacher updateMany
 */
export type TeacherUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: Prisma.XOR<Prisma.TeacherUpdateManyMutationInput, Prisma.TeacherUncheckedUpdateManyInput>;
    /**
     * Filter which Teachers to update
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * Limit how many Teachers to update.
     */
    limit?: number;
};
/**
 * Teacher upsert
 */
export type TeacherUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: Prisma.TeacherWhereUniqueInput;
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: Prisma.XOR<Prisma.TeacherCreateInput, Prisma.TeacherUncheckedCreateInput>;
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.TeacherUpdateInput, Prisma.TeacherUncheckedUpdateInput>;
};
/**
 * Teacher delete
 */
export type TeacherDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
    /**
     * Filter which Teacher to delete.
     */
    where: Prisma.TeacherWhereUniqueInput;
};
/**
 * Teacher deleteMany
 */
export type TeacherDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: Prisma.TeacherWhereInput;
    /**
     * Limit how many Teachers to delete.
     */
    limit?: number;
};
/**
 * Teacher findRaw
 */
export type TeacherFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: runtime.InputJsonValue;
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * Teacher aggregateRaw
 */
export type TeacherAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: runtime.InputJsonValue[];
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: runtime.InputJsonValue;
};
/**
 * Teacher.courses
 */
export type Teacher$coursesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: Prisma.CourseSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Course
     */
    omit?: Prisma.CourseOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CourseInclude<ExtArgs> | null;
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    cursor?: Prisma.CourseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Teacher without action
 */
export type TeacherDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: Prisma.TeacherSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Teacher
     */
    omit?: Prisma.TeacherOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TeacherInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Teacher.d.ts.map