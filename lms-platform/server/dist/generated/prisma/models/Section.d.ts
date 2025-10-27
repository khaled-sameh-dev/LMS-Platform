import type * as runtime from "@prisma/client/runtime/binary";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Section
 *
 */
export type SectionModel = runtime.Types.Result.DefaultSelection<Prisma.$SectionPayload>;
export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null;
    _avg: SectionAvgAggregateOutputType | null;
    _sum: SectionSumAggregateOutputType | null;
    _min: SectionMinAggregateOutputType | null;
    _max: SectionMaxAggregateOutputType | null;
};
export type SectionAvgAggregateOutputType = {
    order: number | null;
};
export type SectionSumAggregateOutputType = {
    order: number | null;
};
export type SectionMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    courseId: string | null;
    ceatedAt: Date | null;
    updatedAt: Date | null;
};
export type SectionMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    courseId: string | null;
    ceatedAt: Date | null;
    updatedAt: Date | null;
};
export type SectionCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    order: number;
    courseId: number;
    ceatedAt: number;
    updatedAt: number;
    _all: number;
};
export type SectionAvgAggregateInputType = {
    order?: true;
};
export type SectionSumAggregateInputType = {
    order?: true;
};
export type SectionMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    courseId?: true;
    ceatedAt?: true;
    updatedAt?: true;
};
export type SectionMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    courseId?: true;
    ceatedAt?: true;
    updatedAt?: true;
};
export type SectionCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    courseId?: true;
    ceatedAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SectionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: Prisma.SectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sections to fetch.
     */
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.SectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType;
};
export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
    [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSection[P]> : Prisma.GetScalarType<T[P], AggregateSection[P]>;
};
export type SectionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SectionWhereInput;
    orderBy?: Prisma.SectionOrderByWithAggregationInput | Prisma.SectionOrderByWithAggregationInput[];
    by: Prisma.SectionScalarFieldEnum[] | Prisma.SectionScalarFieldEnum;
    having?: Prisma.SectionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SectionCountAggregateInputType | true;
    _avg?: SectionAvgAggregateInputType;
    _sum?: SectionSumAggregateInputType;
    _min?: SectionMinAggregateInputType;
    _max?: SectionMaxAggregateInputType;
};
export type SectionGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    order: number;
    courseId: string;
    ceatedAt: Date;
    updatedAt: Date;
    _count: SectionCountAggregateOutputType | null;
    _avg: SectionAvgAggregateOutputType | null;
    _sum: SectionSumAggregateOutputType | null;
    _min: SectionMinAggregateOutputType | null;
    _max: SectionMaxAggregateOutputType | null;
};
type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SectionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SectionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SectionGroupByOutputType[P]>;
}>>;
export type SectionWhereInput = {
    AND?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    OR?: Prisma.SectionWhereInput[];
    NOT?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    id?: Prisma.StringFilter<"Section"> | string;
    title?: Prisma.StringFilter<"Section"> | string;
    description?: Prisma.StringFilter<"Section"> | string;
    order?: Prisma.IntFilter<"Section"> | number;
    courseId?: Prisma.StringFilter<"Section"> | string;
    ceatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    chapters?: Prisma.ChapterListRelationFilter;
};
export type SectionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    ceatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    course?: Prisma.CourseOrderByWithRelationInput;
    chapters?: Prisma.ChapterOrderByRelationAggregateInput;
};
export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    OR?: Prisma.SectionWhereInput[];
    NOT?: Prisma.SectionWhereInput | Prisma.SectionWhereInput[];
    title?: Prisma.StringFilter<"Section"> | string;
    description?: Prisma.StringFilter<"Section"> | string;
    order?: Prisma.IntFilter<"Section"> | number;
    courseId?: Prisma.StringFilter<"Section"> | string;
    ceatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    course?: Prisma.XOR<Prisma.CourseScalarRelationFilter, Prisma.CourseWhereInput>;
    chapters?: Prisma.ChapterListRelationFilter;
}, "id">;
export type SectionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    ceatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SectionCountOrderByAggregateInput;
    _avg?: Prisma.SectionAvgOrderByAggregateInput;
    _max?: Prisma.SectionMaxOrderByAggregateInput;
    _min?: Prisma.SectionMinOrderByAggregateInput;
    _sum?: Prisma.SectionSumOrderByAggregateInput;
};
export type SectionScalarWhereWithAggregatesInput = {
    AND?: Prisma.SectionScalarWhereWithAggregatesInput | Prisma.SectionScalarWhereWithAggregatesInput[];
    OR?: Prisma.SectionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SectionScalarWhereWithAggregatesInput | Prisma.SectionScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Section"> | number;
    courseId?: Prisma.StringWithAggregatesFilter<"Section"> | string;
    ceatedAt?: Prisma.DateTimeWithAggregatesFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Section"> | Date | string;
};
export type SectionCreateInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutSectionsInput;
    chapters?: Prisma.ChapterCreateNestedManyWithoutSectionInput;
};
export type SectionUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    courseId: string;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterUncheckedCreateNestedManyWithoutSectionInput;
};
export type SectionUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutSectionsNestedInput;
    chapters?: Prisma.ChapterUpdateManyWithoutSectionNestedInput;
};
export type SectionUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUncheckedUpdateManyWithoutSectionNestedInput;
};
export type SectionCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    courseId: string;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectionUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionListRelationFilter = {
    every?: Prisma.SectionWhereInput;
    some?: Prisma.SectionWhereInput;
    none?: Prisma.SectionWhereInput;
};
export type SectionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SectionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    ceatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type SectionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    ceatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    courseId?: Prisma.SortOrder;
    ceatedAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SectionSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type SectionScalarRelationFilter = {
    is?: Prisma.SectionWhereInput;
    isNot?: Prisma.SectionWhereInput;
};
export type SectionCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput> | Prisma.SectionCreateWithoutCourseInput[] | Prisma.SectionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutCourseInput | Prisma.SectionCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.SectionCreateManyCourseInputEnvelope;
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
};
export type SectionUncheckedCreateNestedManyWithoutCourseInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput> | Prisma.SectionCreateWithoutCourseInput[] | Prisma.SectionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutCourseInput | Prisma.SectionCreateOrConnectWithoutCourseInput[];
    createMany?: Prisma.SectionCreateManyCourseInputEnvelope;
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
};
export type SectionUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput> | Prisma.SectionCreateWithoutCourseInput[] | Prisma.SectionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutCourseInput | Prisma.SectionCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.SectionUpsertWithWhereUniqueWithoutCourseInput | Prisma.SectionUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.SectionCreateManyCourseInputEnvelope;
    set?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    disconnect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    delete?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    update?: Prisma.SectionUpdateWithWhereUniqueWithoutCourseInput | Prisma.SectionUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.SectionUpdateManyWithWhereWithoutCourseInput | Prisma.SectionUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
};
export type SectionUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput> | Prisma.SectionCreateWithoutCourseInput[] | Prisma.SectionUncheckedCreateWithoutCourseInput[];
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutCourseInput | Prisma.SectionCreateOrConnectWithoutCourseInput[];
    upsert?: Prisma.SectionUpsertWithWhereUniqueWithoutCourseInput | Prisma.SectionUpsertWithWhereUniqueWithoutCourseInput[];
    createMany?: Prisma.SectionCreateManyCourseInputEnvelope;
    set?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    disconnect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    delete?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    connect?: Prisma.SectionWhereUniqueInput | Prisma.SectionWhereUniqueInput[];
    update?: Prisma.SectionUpdateWithWhereUniqueWithoutCourseInput | Prisma.SectionUpdateWithWhereUniqueWithoutCourseInput[];
    updateMany?: Prisma.SectionUpdateManyWithWhereWithoutCourseInput | Prisma.SectionUpdateManyWithWhereWithoutCourseInput[];
    deleteMany?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type SectionCreateNestedOneWithoutChaptersInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutChaptersInput, Prisma.SectionUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutChaptersInput;
    connect?: Prisma.SectionWhereUniqueInput;
};
export type SectionUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: Prisma.XOR<Prisma.SectionCreateWithoutChaptersInput, Prisma.SectionUncheckedCreateWithoutChaptersInput>;
    connectOrCreate?: Prisma.SectionCreateOrConnectWithoutChaptersInput;
    upsert?: Prisma.SectionUpsertWithoutChaptersInput;
    connect?: Prisma.SectionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.SectionUpdateToOneWithWhereWithoutChaptersInput, Prisma.SectionUpdateWithoutChaptersInput>, Prisma.SectionUncheckedUpdateWithoutChaptersInput>;
};
export type SectionCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterCreateNestedManyWithoutSectionInput;
};
export type SectionUncheckedCreateWithoutCourseInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
    chapters?: Prisma.ChapterUncheckedCreateNestedManyWithoutSectionInput;
};
export type SectionCreateOrConnectWithoutCourseInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput>;
};
export type SectionCreateManyCourseInputEnvelope = {
    data: Prisma.SectionCreateManyCourseInput | Prisma.SectionCreateManyCourseInput[];
};
export type SectionUpsertWithWhereUniqueWithoutCourseInput = {
    where: Prisma.SectionWhereUniqueInput;
    update: Prisma.XOR<Prisma.SectionUpdateWithoutCourseInput, Prisma.SectionUncheckedUpdateWithoutCourseInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutCourseInput, Prisma.SectionUncheckedCreateWithoutCourseInput>;
};
export type SectionUpdateWithWhereUniqueWithoutCourseInput = {
    where: Prisma.SectionWhereUniqueInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutCourseInput, Prisma.SectionUncheckedUpdateWithoutCourseInput>;
};
export type SectionUpdateManyWithWhereWithoutCourseInput = {
    where: Prisma.SectionScalarWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateManyMutationInput, Prisma.SectionUncheckedUpdateManyWithoutCourseInput>;
};
export type SectionScalarWhereInput = {
    AND?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
    OR?: Prisma.SectionScalarWhereInput[];
    NOT?: Prisma.SectionScalarWhereInput | Prisma.SectionScalarWhereInput[];
    id?: Prisma.StringFilter<"Section"> | string;
    title?: Prisma.StringFilter<"Section"> | string;
    description?: Prisma.StringFilter<"Section"> | string;
    order?: Prisma.IntFilter<"Section"> | number;
    courseId?: Prisma.StringFilter<"Section"> | string;
    ceatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Section"> | Date | string;
};
export type SectionCreateWithoutChaptersInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
    course: Prisma.CourseCreateNestedOneWithoutSectionsInput;
};
export type SectionUncheckedCreateWithoutChaptersInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    courseId: string;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectionCreateOrConnectWithoutChaptersInput = {
    where: Prisma.SectionWhereUniqueInput;
    create: Prisma.XOR<Prisma.SectionCreateWithoutChaptersInput, Prisma.SectionUncheckedCreateWithoutChaptersInput>;
};
export type SectionUpsertWithoutChaptersInput = {
    update: Prisma.XOR<Prisma.SectionUpdateWithoutChaptersInput, Prisma.SectionUncheckedUpdateWithoutChaptersInput>;
    create: Prisma.XOR<Prisma.SectionCreateWithoutChaptersInput, Prisma.SectionUncheckedCreateWithoutChaptersInput>;
    where?: Prisma.SectionWhereInput;
};
export type SectionUpdateToOneWithWhereWithoutChaptersInput = {
    where?: Prisma.SectionWhereInput;
    data: Prisma.XOR<Prisma.SectionUpdateWithoutChaptersInput, Prisma.SectionUncheckedUpdateWithoutChaptersInput>;
};
export type SectionUpdateWithoutChaptersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    course?: Prisma.CourseUpdateOneRequiredWithoutSectionsNestedInput;
};
export type SectionUncheckedUpdateWithoutChaptersInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    courseId?: Prisma.StringFieldUpdateOperationsInput | string;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SectionCreateManyCourseInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    ceatedAt?: Date | string;
    updatedAt?: Date | string;
};
export type SectionUpdateWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUpdateManyWithoutSectionNestedInput;
};
export type SectionUncheckedUpdateWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    chapters?: Prisma.ChapterUncheckedUpdateManyWithoutSectionNestedInput;
};
export type SectionUncheckedUpdateManyWithoutCourseInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    ceatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type SectionCountOutputType
 */
export type SectionCountOutputType = {
    chapters: number;
};
export type SectionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapters?: boolean | SectionCountOutputTypeCountChaptersArgs;
};
/**
 * SectionCountOutputType without action
 */
export type SectionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionCountOutputType
     */
    select?: Prisma.SectionCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * SectionCountOutputType without action
 */
export type SectionCountOutputTypeCountChaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
};
export type SectionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    courseId?: boolean;
    ceatedAt?: boolean;
    updatedAt?: boolean;
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chapters?: boolean | Prisma.Section$chaptersArgs<ExtArgs>;
    _count?: boolean | Prisma.SectionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["section"]>;
export type SectionSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    courseId?: boolean;
    ceatedAt?: boolean;
    updatedAt?: boolean;
};
export type SectionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "order" | "courseId" | "ceatedAt" | "updatedAt", ExtArgs["result"]["section"]>;
export type SectionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    course?: boolean | Prisma.CourseDefaultArgs<ExtArgs>;
    chapters?: boolean | Prisma.Section$chaptersArgs<ExtArgs>;
    _count?: boolean | Prisma.SectionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $SectionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Section";
    objects: {
        course: Prisma.$CoursePayload<ExtArgs>;
        chapters: Prisma.$ChapterPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        order: number;
        courseId: string;
        ceatedAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["section"]>;
    composites: {};
};
export type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SectionPayload, S>;
export type SectionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SectionCountAggregateInputType | true;
};
export interface SectionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Section'];
        meta: {
            name: 'Section';
        };
    };
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: Prisma.SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: Prisma.SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     *
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     *
     */
    findMany<T extends SectionFindManyArgs>(args?: Prisma.SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     *
     */
    create<T extends SectionCreateArgs>(args: Prisma.SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends SectionCreateManyArgs>(args?: Prisma.SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     *
     */
    delete<T extends SectionDeleteArgs>(args: Prisma.SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends SectionUpdateArgs>(args: Prisma.SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: Prisma.SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends SectionUpdateManyArgs>(args: Prisma.SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: Prisma.SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Sections that matches the filter.
     * @param {SectionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const section = await prisma.section.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.SectionFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Section.
     * @param {SectionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const section = await prisma.section.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.SectionAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(args?: Prisma.Subset<T, SectionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SectionCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Prisma.Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>;
    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
    groupBy<T extends SectionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SectionGroupByArgs['orderBy'];
    } : {
        orderBy?: SectionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Section model
     */
    readonly fields: SectionFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Section.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__SectionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    course<T extends Prisma.CourseDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CourseDefaultArgs<ExtArgs>>): Prisma.Prisma__CourseClient<runtime.Types.Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    chapters<T extends Prisma.Section$chaptersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Section$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Section model
 */
export interface SectionFieldRefs {
    readonly id: Prisma.FieldRef<"Section", 'String'>;
    readonly title: Prisma.FieldRef<"Section", 'String'>;
    readonly description: Prisma.FieldRef<"Section", 'String'>;
    readonly order: Prisma.FieldRef<"Section", 'Int'>;
    readonly courseId: Prisma.FieldRef<"Section", 'String'>;
    readonly ceatedAt: Prisma.FieldRef<"Section", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Section", 'DateTime'>;
}
/**
 * Section findUnique
 */
export type SectionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Section to fetch.
     */
    where: Prisma.SectionWhereUniqueInput;
};
/**
 * Section findUniqueOrThrow
 */
export type SectionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Section to fetch.
     */
    where: Prisma.SectionWhereUniqueInput;
};
/**
 * Section findFirst
 */
export type SectionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Section to fetch.
     */
    where?: Prisma.SectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sections to fetch.
     */
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sections.
     */
    cursor?: Prisma.SectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sections.
     */
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
/**
 * Section findFirstOrThrow
 */
export type SectionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Section to fetch.
     */
    where?: Prisma.SectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sections to fetch.
     */
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Sections.
     */
    cursor?: Prisma.SectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sections.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Sections.
     */
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
/**
 * Section findMany
 */
export type SectionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Sections to fetch.
     */
    where?: Prisma.SectionWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Sections to fetch.
     */
    orderBy?: Prisma.SectionOrderByWithRelationInput | Prisma.SectionOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Sections.
     */
    cursor?: Prisma.SectionWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Sections.
     */
    skip?: number;
    distinct?: Prisma.SectionScalarFieldEnum | Prisma.SectionScalarFieldEnum[];
};
/**
 * Section create
 */
export type SectionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Section.
     */
    data: Prisma.XOR<Prisma.SectionCreateInput, Prisma.SectionUncheckedCreateInput>;
};
/**
 * Section createMany
 */
export type SectionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: Prisma.SectionCreateManyInput | Prisma.SectionCreateManyInput[];
};
/**
 * Section update
 */
export type SectionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Section.
     */
    data: Prisma.XOR<Prisma.SectionUpdateInput, Prisma.SectionUncheckedUpdateInput>;
    /**
     * Choose, which Section to update.
     */
    where: Prisma.SectionWhereUniqueInput;
};
/**
 * Section updateMany
 */
export type SectionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: Prisma.XOR<Prisma.SectionUpdateManyMutationInput, Prisma.SectionUncheckedUpdateManyInput>;
    /**
     * Filter which Sections to update
     */
    where?: Prisma.SectionWhereInput;
    /**
     * Limit how many Sections to update.
     */
    limit?: number;
};
/**
 * Section upsert
 */
export type SectionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: Prisma.SectionWhereUniqueInput;
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: Prisma.XOR<Prisma.SectionCreateInput, Prisma.SectionUncheckedCreateInput>;
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.SectionUpdateInput, Prisma.SectionUncheckedUpdateInput>;
};
/**
 * Section delete
 */
export type SectionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Section to delete.
     */
    where: Prisma.SectionWhereUniqueInput;
};
/**
 * Section deleteMany
 */
export type SectionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: Prisma.SectionWhereInput;
    /**
     * Limit how many Sections to delete.
     */
    limit?: number;
};
/**
 * Section findRaw
 */
export type SectionFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Section aggregateRaw
 */
export type SectionAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Section.chapters
 */
export type Section$chaptersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chapter
     */
    select?: Prisma.ChapterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Chapter
     */
    omit?: Prisma.ChapterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.ChapterInclude<ExtArgs> | null;
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    cursor?: Prisma.ChapterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Section without action
 */
export type SectionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Section.d.ts.map