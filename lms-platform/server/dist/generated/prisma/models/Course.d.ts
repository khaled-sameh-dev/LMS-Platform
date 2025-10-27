import type * as runtime from "@prisma/client/runtime/binary";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Course
 *
 */
export type CourseModel = runtime.Types.Result.DefaultSelection<Prisma.$CoursePayload>;
export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
export type CourseAvgAggregateOutputType = {
    price: number | null;
};
export type CourseSumAggregateOutputType = {
    price: number | null;
};
export type CourseMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    price: number | null;
    level: $Enums.CourseLevel | null;
    isPublished: boolean | null;
    isFree: boolean | null;
    teacherId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    imageUrl: string | null;
    price: number | null;
    level: $Enums.CourseLevel | null;
    isPublished: boolean | null;
    isFree: boolean | null;
    teacherId: string | null;
    categoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CourseCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    imageUrl: number;
    price: number;
    level: number;
    isPublished: number;
    isFree: number;
    teacherId: number;
    categoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CourseAvgAggregateInputType = {
    price?: true;
};
export type CourseSumAggregateInputType = {
    price?: true;
};
export type CourseMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    price?: true;
    level?: true;
    isPublished?: true;
    isFree?: true;
    teacherId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    price?: true;
    level?: true;
    isPublished?: true;
    isFree?: true;
    teacherId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CourseCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    imageUrl?: true;
    price?: true;
    level?: true;
    isPublished?: true;
    isFree?: true;
    teacherId?: true;
    categoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CourseAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType;
};
export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCourse[P]> : Prisma.GetScalarType<T[P], AggregateCourse[P]>;
};
export type CourseGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CourseWhereInput;
    orderBy?: Prisma.CourseOrderByWithAggregationInput | Prisma.CourseOrderByWithAggregationInput[];
    by: Prisma.CourseScalarFieldEnum[] | Prisma.CourseScalarFieldEnum;
    having?: Prisma.CourseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
};
export type CourseGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level: $Enums.CourseLevel;
    isPublished: boolean;
    isFree: boolean;
    teacherId: string | null;
    categoryId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
};
type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CourseGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CourseGroupByOutputType[P]>;
}>>;
export type CourseWhereInput = {
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    id?: Prisma.StringFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringFilter<"Course"> | string;
    imageUrl?: Prisma.StringFilter<"Course"> | string;
    price?: Prisma.FloatFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFilter<"Course"> | boolean;
    isFree?: Prisma.BoolFilter<"Course"> | boolean;
    teacherId?: Prisma.StringNullableFilter<"Course"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Course"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    sections?: Prisma.SectionListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
};
export type CourseOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    teacher?: Prisma.TeacherOrderByWithRelationInput;
    category?: Prisma.CategoryOrderByWithRelationInput;
    sections?: Prisma.SectionOrderByRelationAggregateInput;
    enrollments?: Prisma.EnrollmentOrderByRelationAggregateInput;
};
export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    OR?: Prisma.CourseWhereInput[];
    NOT?: Prisma.CourseWhereInput | Prisma.CourseWhereInput[];
    title?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringFilter<"Course"> | string;
    imageUrl?: Prisma.StringFilter<"Course"> | string;
    price?: Prisma.FloatFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFilter<"Course"> | boolean;
    isFree?: Prisma.BoolFilter<"Course"> | boolean;
    teacherId?: Prisma.StringNullableFilter<"Course"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Course"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    teacher?: Prisma.XOR<Prisma.TeacherNullableScalarRelationFilter, Prisma.TeacherWhereInput> | null;
    category?: Prisma.XOR<Prisma.CategoryNullableScalarRelationFilter, Prisma.CategoryWhereInput> | null;
    sections?: Prisma.SectionListRelationFilter;
    enrollments?: Prisma.EnrollmentListRelationFilter;
}, "id">;
export type CourseOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CourseCountOrderByAggregateInput;
    _avg?: Prisma.CourseAvgOrderByAggregateInput;
    _max?: Prisma.CourseMaxOrderByAggregateInput;
    _min?: Prisma.CourseMinOrderByAggregateInput;
    _sum?: Prisma.CourseSumOrderByAggregateInput;
};
export type CourseScalarWhereWithAggregatesInput = {
    AND?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    OR?: Prisma.CourseScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CourseScalarWhereWithAggregatesInput | Prisma.CourseScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    imageUrl?: Prisma.StringWithAggregatesFilter<"Course"> | string;
    price?: Prisma.FloatWithAggregatesFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelWithAggregatesFilter<"Course"> | $Enums.CourseLevel;
    isPublished?: Prisma.BoolWithAggregatesFilter<"Course"> | boolean;
    isFree?: Prisma.BoolWithAggregatesFilter<"Course"> | boolean;
    teacherId?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    categoryId?: Prisma.StringNullableWithAggregatesFilter<"Course"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Course"> | Date | string;
};
export type CourseCreateInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    category?: Prisma.CategoryCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type CourseMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    imageUrl?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    level?: Prisma.SortOrder;
    isPublished?: Prisma.SortOrder;
    isFree?: Prisma.SortOrder;
    teacherId?: Prisma.SortOrder;
    categoryId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CourseSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
};
export type CourseListRelationFilter = {
    every?: Prisma.CourseWhereInput;
    some?: Prisma.CourseWhereInput;
    none?: Prisma.CourseWhereInput;
};
export type CourseOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CourseScalarRelationFilter = {
    is?: Prisma.CourseWhereInput;
    isNot?: Prisma.CourseWhereInput;
};
export type CourseNullableScalarRelationFilter = {
    is?: Prisma.CourseWhereInput | null;
    isNot?: Prisma.CourseWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumCourseLevelFieldUpdateOperationsInput = {
    set?: $Enums.CourseLevel;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
    unset?: boolean;
};
export type CourseCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput> | Prisma.CourseCreateWithoutCategoryInput[] | Prisma.CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCategoryInput | Prisma.CourseCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CourseCreateManyCategoryInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput> | Prisma.CourseCreateWithoutCategoryInput[] | Prisma.CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCategoryInput | Prisma.CourseCreateOrConnectWithoutCategoryInput[];
    createMany?: Prisma.CourseCreateManyCategoryInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput> | Prisma.CourseCreateWithoutCategoryInput[] | Prisma.CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCategoryInput | Prisma.CourseCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CourseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CourseCreateManyCategoryInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CourseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutCategoryInput | Prisma.CourseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput> | Prisma.CourseCreateWithoutCategoryInput[] | Prisma.CourseUncheckedCreateWithoutCategoryInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutCategoryInput | Prisma.CourseCreateOrConnectWithoutCategoryInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutCategoryInput | Prisma.CourseUpsertWithWhereUniqueWithoutCategoryInput[];
    createMany?: Prisma.CourseCreateManyCategoryInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutCategoryInput | Prisma.CourseUpdateWithWhereUniqueWithoutCategoryInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutCategoryInput | Prisma.CourseUpdateManyWithWhereWithoutCategoryInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
};
export type CourseUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutTeacherInput | Prisma.CourseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput> | Prisma.CourseCreateWithoutTeacherInput[] | Prisma.CourseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutTeacherInput | Prisma.CourseCreateOrConnectWithoutTeacherInput[];
    upsert?: Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: Prisma.CourseCreateManyTeacherInputEnvelope;
    set?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    disconnect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    delete?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    connect?: Prisma.CourseWhereUniqueInput | Prisma.CourseWhereUniqueInput[];
    update?: Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput | Prisma.CourseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: Prisma.CourseUpdateManyWithWhereWithoutTeacherInput | Prisma.CourseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
};
export type CourseCreateNestedOneWithoutSectionsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSectionsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutSectionsInput;
    upsert?: Prisma.CourseUpsertWithoutSectionsInput;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutSectionsInput, Prisma.CourseUpdateWithoutSectionsInput>, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
};
export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    connect?: Prisma.CourseWhereUniqueInput;
};
export type CourseUpdateOneWithoutEnrollmentsNestedInput = {
    create?: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    connectOrCreate?: Prisma.CourseCreateOrConnectWithoutEnrollmentsInput;
    upsert?: Prisma.CourseUpsertWithoutEnrollmentsInput;
    disconnect?: boolean;
    delete?: Prisma.CourseWhereInput | boolean;
    connect?: Prisma.CourseWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CourseUpdateToOneWithWhereWithoutEnrollmentsInput, Prisma.CourseUpdateWithoutEnrollmentsInput>, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutCategoryInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutCategoryInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput>;
};
export type CourseCreateManyCategoryInputEnvelope = {
    data: Prisma.CourseCreateManyCategoryInput | Prisma.CourseCreateManyCategoryInput[];
};
export type CourseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseUpdateWithoutCategoryInput, Prisma.CourseUncheckedUpdateWithoutCategoryInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutCategoryInput, Prisma.CourseUncheckedCreateWithoutCategoryInput>;
};
export type CourseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutCategoryInput, Prisma.CourseUncheckedUpdateWithoutCategoryInput>;
};
export type CourseUpdateManyWithWhereWithoutCategoryInput = {
    where: Prisma.CourseScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyWithoutCategoryInput>;
};
export type CourseScalarWhereInput = {
    AND?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    OR?: Prisma.CourseScalarWhereInput[];
    NOT?: Prisma.CourseScalarWhereInput | Prisma.CourseScalarWhereInput[];
    id?: Prisma.StringFilter<"Course"> | string;
    title?: Prisma.StringFilter<"Course"> | string;
    description?: Prisma.StringFilter<"Course"> | string;
    imageUrl?: Prisma.StringFilter<"Course"> | string;
    price?: Prisma.FloatFilter<"Course"> | number;
    level?: Prisma.EnumCourseLevelFilter<"Course"> | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFilter<"Course"> | boolean;
    isFree?: Prisma.BoolFilter<"Course"> | boolean;
    teacherId?: Prisma.StringNullableFilter<"Course"> | string | null;
    categoryId?: Prisma.StringNullableFilter<"Course"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Course"> | Date | string;
};
export type CourseCreateWithoutTeacherInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    category?: Prisma.CategoryCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutTeacherInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput>;
};
export type CourseCreateManyTeacherInputEnvelope = {
    data: Prisma.CourseCreateManyTeacherInput | Prisma.CourseCreateManyTeacherInput[];
};
export type CourseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    update: Prisma.XOR<Prisma.CourseUpdateWithoutTeacherInput, Prisma.CourseUncheckedUpdateWithoutTeacherInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutTeacherInput, Prisma.CourseUncheckedCreateWithoutTeacherInput>;
};
export type CourseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: Prisma.CourseWhereUniqueInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutTeacherInput, Prisma.CourseUncheckedUpdateWithoutTeacherInput>;
};
export type CourseUpdateManyWithWhereWithoutTeacherInput = {
    where: Prisma.CourseScalarWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyWithoutTeacherInput>;
};
export type CourseCreateWithoutSectionsInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    category?: Prisma.CategoryCreateNestedOneWithoutCoursesInput;
    enrollments?: Prisma.EnrollmentCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutSectionsInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    enrollments?: Prisma.EnrollmentUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutSectionsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
};
export type CourseUpsertWithoutSectionsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutSectionsInput, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutSectionsInput, Prisma.CourseUncheckedCreateWithoutSectionsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutSectionsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutSectionsInput, Prisma.CourseUncheckedUpdateWithoutSectionsInput>;
};
export type CourseUpdateWithoutSectionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutCoursesNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutSectionsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateWithoutEnrollmentsInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    teacher?: Prisma.TeacherCreateNestedOneWithoutCoursesInput;
    category?: Prisma.CategoryCreateNestedOneWithoutCoursesInput;
    sections?: Prisma.SectionCreateNestedManyWithoutCourseInput;
};
export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    sections?: Prisma.SectionUncheckedCreateNestedManyWithoutCourseInput;
};
export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: Prisma.CourseWhereUniqueInput;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
};
export type CourseUpsertWithoutEnrollmentsInput = {
    update: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
    create: Prisma.XOR<Prisma.CourseCreateWithoutEnrollmentsInput, Prisma.CourseUncheckedCreateWithoutEnrollmentsInput>;
    where?: Prisma.CourseWhereInput;
};
export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: Prisma.CourseWhereInput;
    data: Prisma.XOR<Prisma.CourseUpdateWithoutEnrollmentsInput, Prisma.CourseUncheckedUpdateWithoutEnrollmentsInput>;
};
export type CourseUpdateWithoutEnrollmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    category?: Prisma.CategoryUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseCreateManyCategoryInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: Prisma.TeacherUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateManyWithoutCategoryInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    teacherId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CourseCreateManyTeacherInput = {
    id?: string;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    level?: $Enums.CourseLevel;
    isPublished?: boolean;
    isFree?: boolean;
    categoryId?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CourseUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    category?: Prisma.CategoryUpdateOneWithoutCoursesNestedInput;
    sections?: Prisma.SectionUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sections?: Prisma.SectionUncheckedUpdateManyWithoutCourseNestedInput;
    enrollments?: Prisma.EnrollmentUncheckedUpdateManyWithoutCourseNestedInput;
};
export type CourseUncheckedUpdateManyWithoutTeacherInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    imageUrl?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.FloatFieldUpdateOperationsInput | number;
    level?: Prisma.EnumCourseLevelFieldUpdateOperationsInput | $Enums.CourseLevel;
    isPublished?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isFree?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    categoryId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type CourseCountOutputType
 */
export type CourseCountOutputType = {
    sections: number;
    enrollments: number;
};
export type CourseCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sections?: boolean | CourseCountOutputTypeCountSectionsArgs;
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: Prisma.CourseCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountSectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
};
/**
 * CourseCountOutputType without action
 */
export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EnrollmentWhereInput;
};
export type CourseSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    price?: boolean;
    level?: boolean;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    teacher?: boolean | Prisma.Course$teacherArgs<ExtArgs>;
    category?: boolean | Prisma.Course$categoryArgs<ExtArgs>;
    sections?: boolean | Prisma.Course$sectionsArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["course"]>;
export type CourseSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    imageUrl?: boolean;
    price?: boolean;
    level?: boolean;
    isPublished?: boolean;
    isFree?: boolean;
    teacherId?: boolean;
    categoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CourseOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "imageUrl" | "price" | "level" | "isPublished" | "isFree" | "teacherId" | "categoryId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>;
export type CourseInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    teacher?: boolean | Prisma.Course$teacherArgs<ExtArgs>;
    category?: boolean | Prisma.Course$categoryArgs<ExtArgs>;
    sections?: boolean | Prisma.Course$sectionsArgs<ExtArgs>;
    enrollments?: boolean | Prisma.Course$enrollmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.CourseCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $CoursePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Course";
    objects: {
        teacher: Prisma.$TeacherPayload<ExtArgs> | null;
        category: Prisma.$CategoryPayload<ExtArgs> | null;
        sections: Prisma.$SectionPayload<ExtArgs>[];
        enrollments: Prisma.$EnrollmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        imageUrl: string;
        price: number;
        level: $Enums.CourseLevel;
        isPublished: boolean;
        isFree: boolean;
        teacherId: string | null;
        categoryId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["course"]>;
    composites: {};
};
export type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CoursePayload, S>;
export type CourseCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CourseCountAggregateInputType | true;
};
export interface CourseDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Course'];
        meta: {
            name: 'Course';
        };
    };
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     */
    findMany<T extends CourseFindManyArgs>(args?: Prisma.SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     */
    create<T extends CourseCreateArgs>(args: Prisma.SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends CourseCreateManyArgs>(args?: Prisma.SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     */
    delete<T extends CourseDeleteArgs>(args: Prisma.SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends CourseUpdateArgs>(args: Prisma.SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: Prisma.SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends CourseUpdateManyArgs>(args: Prisma.SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: Prisma.SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Courses that matches the filter.
     * @param {CourseFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const course = await prisma.course.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.CourseFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Course.
     * @param {CourseAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const course = await prisma.course.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.CourseAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(args?: Prisma.Subset<T, CourseCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CourseCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Prisma.Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>;
    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
    groupBy<T extends CourseGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CourseGroupByArgs['orderBy'];
    } : {
        orderBy?: CourseGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Course model
     */
    readonly fields: CourseFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Course.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__CourseClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    teacher<T extends Prisma.Course$teacherArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$teacherArgs<ExtArgs>>): Prisma.Prisma__TeacherClient<runtime.Types.Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    category<T extends Prisma.Course$categoryArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$categoryArgs<ExtArgs>>): Prisma.Prisma__CategoryClient<runtime.Types.Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sections<T extends Prisma.Course$sectionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    enrollments<T extends Prisma.Course$enrollmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Course model
 */
export interface CourseFieldRefs {
    readonly id: Prisma.FieldRef<"Course", 'String'>;
    readonly title: Prisma.FieldRef<"Course", 'String'>;
    readonly description: Prisma.FieldRef<"Course", 'String'>;
    readonly imageUrl: Prisma.FieldRef<"Course", 'String'>;
    readonly price: Prisma.FieldRef<"Course", 'Float'>;
    readonly level: Prisma.FieldRef<"Course", 'CourseLevel'>;
    readonly isPublished: Prisma.FieldRef<"Course", 'Boolean'>;
    readonly isFree: Prisma.FieldRef<"Course", 'Boolean'>;
    readonly teacherId: Prisma.FieldRef<"Course", 'String'>;
    readonly categoryId: Prisma.FieldRef<"Course", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Course", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Course", 'DateTime'>;
}
/**
 * Course findUnique
 */
export type CourseFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Course to fetch.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course findUniqueOrThrow
 */
export type CourseFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Course to fetch.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course findFirst
 */
export type CourseFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Course to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course findFirstOrThrow
 */
export type CourseFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Course to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Courses.
     */
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course findMany
 */
export type CourseFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Courses to fetch.
     */
    where?: Prisma.CourseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Courses to fetch.
     */
    orderBy?: Prisma.CourseOrderByWithRelationInput | Prisma.CourseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Courses.
     */
    cursor?: Prisma.CourseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Courses.
     */
    skip?: number;
    distinct?: Prisma.CourseScalarFieldEnum | Prisma.CourseScalarFieldEnum[];
};
/**
 * Course create
 */
export type CourseCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Course.
     */
    data: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
};
/**
 * Course createMany
 */
export type CourseCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: Prisma.CourseCreateManyInput | Prisma.CourseCreateManyInput[];
};
/**
 * Course update
 */
export type CourseUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Course.
     */
    data: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
    /**
     * Choose, which Course to update.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course updateMany
 */
export type CourseUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: Prisma.XOR<Prisma.CourseUpdateManyMutationInput, Prisma.CourseUncheckedUpdateManyInput>;
    /**
     * Filter which Courses to update
     */
    where?: Prisma.CourseWhereInput;
    /**
     * Limit how many Courses to update.
     */
    limit?: number;
};
/**
 * Course upsert
 */
export type CourseUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: Prisma.CourseWhereUniqueInput;
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: Prisma.XOR<Prisma.CourseCreateInput, Prisma.CourseUncheckedCreateInput>;
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.CourseUpdateInput, Prisma.CourseUncheckedUpdateInput>;
};
/**
 * Course delete
 */
export type CourseDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Course to delete.
     */
    where: Prisma.CourseWhereUniqueInput;
};
/**
 * Course deleteMany
 */
export type CourseDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: Prisma.CourseWhereInput;
    /**
     * Limit how many Courses to delete.
     */
    limit?: number;
};
/**
 * Course findRaw
 */
export type CourseFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Course aggregateRaw
 */
export type CourseAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Course.teacher
 */
export type Course$teacherArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.TeacherWhereInput;
};
/**
 * Course.category
 */
export type Course$categoryArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: Prisma.CategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Category
     */
    omit?: Prisma.CategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.CategoryInclude<ExtArgs> | null;
    where?: Prisma.CategoryWhereInput;
};
/**
 * Course.sections
 */
export type Course$sectionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: Prisma.SectionSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Section
     */
    omit?: Prisma.SectionOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.SectionInclude<ExtArgs> | null;
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    cursor?: Prisma.SectionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
/**
 * Course.enrollments
 */
export type Course$enrollmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: Prisma.EnrollmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: Prisma.EnrollmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EnrollmentInclude<ExtArgs> | null;
    where?: Prisma.EnrollmentWhereInput;
    orderBy?: Prisma.EnrollmentOrderByWithRelationInput | Prisma.EnrollmentOrderByWithRelationInput[];
    cursor?: Prisma.EnrollmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EnrollmentScalarFieldEnum | Prisma.EnrollmentScalarFieldEnum[];
};
/**
 * Course without action
 */
export type CourseDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Course.d.ts.map