import type * as runtime from "@prisma/client/runtime/binary";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Chapter
 *
 */
export type ChapterModel = runtime.Types.Result.DefaultSelection<Prisma.$ChapterPayload>;
export type AggregateChapter = {
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
export type ChapterAvgAggregateOutputType = {
    order: number | null;
    duration: number | null;
};
export type ChapterSumAggregateOutputType = {
    order: number | null;
    duration: number | null;
};
export type ChapterMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    videoUrl: string | null;
    duration: number | null;
    content: string | null;
    sectionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChapterMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    order: number | null;
    videoUrl: string | null;
    duration: number | null;
    content: string | null;
    sectionId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ChapterCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    order: number;
    videoUrl: number;
    duration: number;
    content: number;
    sectionId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ChapterAvgAggregateInputType = {
    order?: true;
    duration?: true;
};
export type ChapterSumAggregateInputType = {
    order?: true;
    duration?: true;
};
export type ChapterMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    videoUrl?: true;
    duration?: true;
    content?: true;
    sectionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChapterMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    videoUrl?: true;
    duration?: true;
    content?: true;
    sectionId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ChapterCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    order?: true;
    videoUrl?: true;
    duration?: true;
    content?: true;
    sectionId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ChapterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chapter to aggregate.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Chapters
    **/
    _count?: true | ChapterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: ChapterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: ChapterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: ChapterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: ChapterMaxAggregateInputType;
};
export type GetChapterAggregateType<T extends ChapterAggregateArgs> = {
    [P in keyof T & keyof AggregateChapter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChapter[P]> : Prisma.GetScalarType<T[P], AggregateChapter[P]>;
};
export type ChapterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChapterWhereInput;
    orderBy?: Prisma.ChapterOrderByWithAggregationInput | Prisma.ChapterOrderByWithAggregationInput[];
    by: Prisma.ChapterScalarFieldEnum[] | Prisma.ChapterScalarFieldEnum;
    having?: Prisma.ChapterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChapterCountAggregateInputType | true;
    _avg?: ChapterAvgAggregateInputType;
    _sum?: ChapterSumAggregateInputType;
    _min?: ChapterMinAggregateInputType;
    _max?: ChapterMaxAggregateInputType;
};
export type ChapterGroupByOutputType = {
    id: string;
    title: string;
    description: string;
    order: number;
    videoUrl: string | null;
    duration: number | null;
    content: string | null;
    sectionId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ChapterCountAggregateOutputType | null;
    _avg: ChapterAvgAggregateOutputType | null;
    _sum: ChapterSumAggregateOutputType | null;
    _min: ChapterMinAggregateOutputType | null;
    _max: ChapterMaxAggregateOutputType | null;
};
type GetChapterGroupByPayload<T extends ChapterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChapterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChapterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChapterGroupByOutputType[P]>;
}>>;
export type ChapterWhereInput = {
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    id?: Prisma.StringFilter<"Chapter"> | string;
    title?: Prisma.StringFilter<"Chapter"> | string;
    description?: Prisma.StringFilter<"Chapter"> | string;
    order?: Prisma.IntFilter<"Chapter"> | number;
    videoUrl?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Chapter"> | number | null;
    content?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    sectionId?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    attachments?: Prisma.AttachmentListRelationFilter;
};
export type ChapterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    section?: Prisma.SectionOrderByWithRelationInput;
    attachments?: Prisma.AttachmentOrderByRelationAggregateInput;
};
export type ChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    OR?: Prisma.ChapterWhereInput[];
    NOT?: Prisma.ChapterWhereInput | Prisma.ChapterWhereInput[];
    title?: Prisma.StringFilter<"Chapter"> | string;
    description?: Prisma.StringFilter<"Chapter"> | string;
    order?: Prisma.IntFilter<"Chapter"> | number;
    videoUrl?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Chapter"> | number | null;
    content?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    sectionId?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    section?: Prisma.XOR<Prisma.SectionScalarRelationFilter, Prisma.SectionWhereInput>;
    attachments?: Prisma.AttachmentListRelationFilter;
}, "id">;
export type ChapterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ChapterCountOrderByAggregateInput;
    _avg?: Prisma.ChapterAvgOrderByAggregateInput;
    _max?: Prisma.ChapterMaxOrderByAggregateInput;
    _min?: Prisma.ChapterMinOrderByAggregateInput;
    _sum?: Prisma.ChapterSumOrderByAggregateInput;
};
export type ChapterScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChapterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChapterScalarWhereWithAggregatesInput | Prisma.ChapterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    order?: Prisma.IntWithAggregatesFilter<"Chapter"> | number;
    videoUrl?: Prisma.StringNullableWithAggregatesFilter<"Chapter"> | string | null;
    duration?: Prisma.FloatNullableWithAggregatesFilter<"Chapter"> | number | null;
    content?: Prisma.StringNullableWithAggregatesFilter<"Chapter"> | string | null;
    sectionId?: Prisma.StringWithAggregatesFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Chapter"> | Date | string;
};
export type ChapterCreateInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutChaptersInput;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutChapterInput;
};
export type ChapterUncheckedCreateInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    sectionId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutChapterInput;
};
export type ChapterUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutChaptersNestedInput;
    attachments?: Prisma.AttachmentUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutChapterNestedInput;
};
export type ChapterCreateManyInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    sectionId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterUpdateManyMutationInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterUncheckedUpdateManyInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterListRelationFilter = {
    every?: Prisma.ChapterWhereInput;
    some?: Prisma.ChapterWhereInput;
    none?: Prisma.ChapterWhereInput;
};
export type ChapterOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ChapterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ChapterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    videoUrl?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    sectionId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ChapterSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
    duration?: Prisma.SortOrder;
};
export type ChapterNullableScalarRelationFilter = {
    is?: Prisma.ChapterWhereInput | null;
    isNot?: Prisma.ChapterWhereInput | null;
};
export type ChapterCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput> | Prisma.ChapterCreateWithoutSectionInput[] | Prisma.ChapterUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutSectionInput | Prisma.ChapterCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.ChapterCreateManySectionInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUncheckedCreateNestedManyWithoutSectionInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput> | Prisma.ChapterCreateWithoutSectionInput[] | Prisma.ChapterUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutSectionInput | Prisma.ChapterCreateOrConnectWithoutSectionInput[];
    createMany?: Prisma.ChapterCreateManySectionInputEnvelope;
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
};
export type ChapterUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput> | Prisma.ChapterCreateWithoutSectionInput[] | Prisma.ChapterUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutSectionInput | Prisma.ChapterCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutSectionInput | Prisma.ChapterUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.ChapterCreateManySectionInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutSectionInput | Prisma.ChapterUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutSectionInput | Prisma.ChapterUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type ChapterUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput> | Prisma.ChapterCreateWithoutSectionInput[] | Prisma.ChapterUncheckedCreateWithoutSectionInput[];
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutSectionInput | Prisma.ChapterCreateOrConnectWithoutSectionInput[];
    upsert?: Prisma.ChapterUpsertWithWhereUniqueWithoutSectionInput | Prisma.ChapterUpsertWithWhereUniqueWithoutSectionInput[];
    createMany?: Prisma.ChapterCreateManySectionInputEnvelope;
    set?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    disconnect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    delete?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    connect?: Prisma.ChapterWhereUniqueInput | Prisma.ChapterWhereUniqueInput[];
    update?: Prisma.ChapterUpdateWithWhereUniqueWithoutSectionInput | Prisma.ChapterUpdateWithWhereUniqueWithoutSectionInput[];
    updateMany?: Prisma.ChapterUpdateManyWithWhereWithoutSectionInput | Prisma.ChapterUpdateManyWithWhereWithoutSectionInput[];
    deleteMany?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
    unset?: boolean;
};
export type ChapterCreateNestedOneWithoutAttachmentsInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutAttachmentsInput, Prisma.ChapterUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutAttachmentsInput;
    connect?: Prisma.ChapterWhereUniqueInput;
};
export type ChapterUpdateOneWithoutAttachmentsNestedInput = {
    create?: Prisma.XOR<Prisma.ChapterCreateWithoutAttachmentsInput, Prisma.ChapterUncheckedCreateWithoutAttachmentsInput>;
    connectOrCreate?: Prisma.ChapterCreateOrConnectWithoutAttachmentsInput;
    upsert?: Prisma.ChapterUpsertWithoutAttachmentsInput;
    disconnect?: boolean;
    delete?: Prisma.ChapterWhereInput | boolean;
    connect?: Prisma.ChapterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChapterUpdateToOneWithWhereWithoutAttachmentsInput, Prisma.ChapterUpdateWithoutAttachmentsInput>, Prisma.ChapterUncheckedUpdateWithoutAttachmentsInput>;
};
export type ChapterCreateWithoutSectionInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.AttachmentCreateNestedManyWithoutChapterInput;
};
export type ChapterUncheckedCreateWithoutSectionInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    attachments?: Prisma.AttachmentUncheckedCreateNestedManyWithoutChapterInput;
};
export type ChapterCreateOrConnectWithoutSectionInput = {
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput>;
};
export type ChapterCreateManySectionInputEnvelope = {
    data: Prisma.ChapterCreateManySectionInput | Prisma.ChapterCreateManySectionInput[];
};
export type ChapterUpsertWithWhereUniqueWithoutSectionInput = {
    where: Prisma.ChapterWhereUniqueInput;
    update: Prisma.XOR<Prisma.ChapterUpdateWithoutSectionInput, Prisma.ChapterUncheckedUpdateWithoutSectionInput>;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutSectionInput, Prisma.ChapterUncheckedCreateWithoutSectionInput>;
};
export type ChapterUpdateWithWhereUniqueWithoutSectionInput = {
    where: Prisma.ChapterWhereUniqueInput;
    data: Prisma.XOR<Prisma.ChapterUpdateWithoutSectionInput, Prisma.ChapterUncheckedUpdateWithoutSectionInput>;
};
export type ChapterUpdateManyWithWhereWithoutSectionInput = {
    where: Prisma.ChapterScalarWhereInput;
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyWithoutSectionInput>;
};
export type ChapterScalarWhereInput = {
    AND?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    OR?: Prisma.ChapterScalarWhereInput[];
    NOT?: Prisma.ChapterScalarWhereInput | Prisma.ChapterScalarWhereInput[];
    id?: Prisma.StringFilter<"Chapter"> | string;
    title?: Prisma.StringFilter<"Chapter"> | string;
    description?: Prisma.StringFilter<"Chapter"> | string;
    order?: Prisma.IntFilter<"Chapter"> | number;
    videoUrl?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    duration?: Prisma.FloatNullableFilter<"Chapter"> | number | null;
    content?: Prisma.StringNullableFilter<"Chapter"> | string | null;
    sectionId?: Prisma.StringFilter<"Chapter"> | string;
    createdAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Chapter"> | Date | string;
};
export type ChapterCreateWithoutAttachmentsInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    section: Prisma.SectionCreateNestedOneWithoutChaptersInput;
};
export type ChapterUncheckedCreateWithoutAttachmentsInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    sectionId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterCreateOrConnectWithoutAttachmentsInput = {
    where: Prisma.ChapterWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutAttachmentsInput, Prisma.ChapterUncheckedCreateWithoutAttachmentsInput>;
};
export type ChapterUpsertWithoutAttachmentsInput = {
    update: Prisma.XOR<Prisma.ChapterUpdateWithoutAttachmentsInput, Prisma.ChapterUncheckedUpdateWithoutAttachmentsInput>;
    create: Prisma.XOR<Prisma.ChapterCreateWithoutAttachmentsInput, Prisma.ChapterUncheckedCreateWithoutAttachmentsInput>;
    where?: Prisma.ChapterWhereInput;
};
export type ChapterUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: Prisma.ChapterWhereInput;
    data: Prisma.XOR<Prisma.ChapterUpdateWithoutAttachmentsInput, Prisma.ChapterUncheckedUpdateWithoutAttachmentsInput>;
};
export type ChapterUpdateWithoutAttachmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    section?: Prisma.SectionUpdateOneRequiredWithoutChaptersNestedInput;
};
export type ChapterUncheckedUpdateWithoutAttachmentsInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sectionId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ChapterCreateManySectionInput = {
    id?: string;
    title: string;
    description: string;
    order: number;
    videoUrl?: string | null;
    duration?: number | null;
    content?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ChapterUpdateWithoutSectionInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateWithoutSectionInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    attachments?: Prisma.AttachmentUncheckedUpdateManyWithoutChapterNestedInput;
};
export type ChapterUncheckedUpdateManyWithoutSectionInput = {
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    videoUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    content?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type ChapterCountOutputType
 */
export type ChapterCountOutputType = {
    attachments: number;
};
export type ChapterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    attachments?: boolean | ChapterCountOutputTypeCountAttachmentsArgs;
};
/**
 * ChapterCountOutputType without action
 */
export type ChapterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChapterCountOutputType
     */
    select?: Prisma.ChapterCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * ChapterCountOutputType without action
 */
export type ChapterCountOutputTypeCountAttachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
};
export type ChapterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    videoUrl?: boolean;
    duration?: boolean;
    content?: boolean;
    sectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    attachments?: boolean | Prisma.Chapter$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChapterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chapter"]>;
export type ChapterSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    order?: boolean;
    videoUrl?: boolean;
    duration?: boolean;
    content?: boolean;
    sectionId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ChapterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "order" | "videoUrl" | "duration" | "content" | "sectionId" | "createdAt" | "updatedAt", ExtArgs["result"]["chapter"]>;
export type ChapterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    section?: boolean | Prisma.SectionDefaultArgs<ExtArgs>;
    attachments?: boolean | Prisma.Chapter$attachmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChapterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $ChapterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chapter";
    objects: {
        section: Prisma.$SectionPayload<ExtArgs>;
        attachments: Prisma.$AttachmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string;
        order: number;
        videoUrl: string | null;
        duration: number | null;
        content: string | null;
        sectionId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["chapter"]>;
    composites: {};
};
export type ChapterGetPayload<S extends boolean | null | undefined | ChapterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChapterPayload, S>;
export type ChapterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChapterCountAggregateInputType | true;
};
export interface ChapterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chapter'];
        meta: {
            name: 'Chapter';
        };
    };
    /**
     * Find zero or one Chapter that matches the filter.
     * @param {ChapterFindUniqueArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChapterFindUniqueArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Chapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChapterFindUniqueOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChapterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChapterFindFirstArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Chapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindFirstOrThrowArgs} args - Arguments to find a Chapter
     * @example
     * // Get one Chapter
     * const chapter = await prisma.chapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChapterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Chapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chapters
     * const chapters = await prisma.chapter.findMany()
     *
     * // Get first 10 Chapters
     * const chapters = await prisma.chapter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const chapterWithIdOnly = await prisma.chapter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ChapterFindManyArgs>(args?: Prisma.SelectSubset<T, ChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Chapter.
     * @param {ChapterCreateArgs} args - Arguments to create a Chapter.
     * @example
     * // Create one Chapter
     * const Chapter = await prisma.chapter.create({
     *   data: {
     *     // ... data to create a Chapter
     *   }
     * })
     *
     */
    create<T extends ChapterCreateArgs>(args: Prisma.SelectSubset<T, ChapterCreateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Chapters.
     * @param {ChapterCreateManyArgs} args - Arguments to create many Chapters.
     * @example
     * // Create many Chapters
     * const chapter = await prisma.chapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ChapterCreateManyArgs>(args?: Prisma.SelectSubset<T, ChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Chapter.
     * @param {ChapterDeleteArgs} args - Arguments to delete one Chapter.
     * @example
     * // Delete one Chapter
     * const Chapter = await prisma.chapter.delete({
     *   where: {
     *     // ... filter to delete one Chapter
     *   }
     * })
     *
     */
    delete<T extends ChapterDeleteArgs>(args: Prisma.SelectSubset<T, ChapterDeleteArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Chapter.
     * @param {ChapterUpdateArgs} args - Arguments to update one Chapter.
     * @example
     * // Update one Chapter
     * const chapter = await prisma.chapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ChapterUpdateArgs>(args: Prisma.SelectSubset<T, ChapterUpdateArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Chapters.
     * @param {ChapterDeleteManyArgs} args - Arguments to filter Chapters to delete.
     * @example
     * // Delete a few Chapters
     * const { count } = await prisma.chapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ChapterDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chapters
     * const chapter = await prisma.chapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ChapterUpdateManyArgs>(args: Prisma.SelectSubset<T, ChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Chapter.
     * @param {ChapterUpsertArgs} args - Arguments to update or create a Chapter.
     * @example
     * // Update or create a Chapter
     * const chapter = await prisma.chapter.upsert({
     *   create: {
     *     // ... data to create a Chapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chapter we want to update
     *   }
     * })
     */
    upsert<T extends ChapterUpsertArgs>(args: Prisma.SelectSubset<T, ChapterUpsertArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Chapters that matches the filter.
     * @param {ChapterFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const chapter = await prisma.chapter.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.ChapterFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Chapter.
     * @param {ChapterAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const chapter = await prisma.chapter.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.ChapterAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Chapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterCountArgs} args - Arguments to filter Chapters to count.
     * @example
     * // Count the number of Chapters
     * const count = await prisma.chapter.count({
     *   where: {
     *     // ... the filter for the Chapters we want to count
     *   }
     * })
    **/
    count<T extends ChapterCountArgs>(args?: Prisma.Subset<T, ChapterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChapterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChapterAggregateArgs>(args: Prisma.Subset<T, ChapterAggregateArgs>): Prisma.PrismaPromise<GetChapterAggregateType<T>>;
    /**
     * Group by Chapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChapterGroupByArgs} args - Group by arguments.
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
    groupBy<T extends ChapterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChapterGroupByArgs['orderBy'];
    } : {
        orderBy?: ChapterGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Chapter model
     */
    readonly fields: ChapterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Chapter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__ChapterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    section<T extends Prisma.SectionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.SectionDefaultArgs<ExtArgs>>): Prisma.Prisma__SectionClient<runtime.Types.Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    attachments<T extends Prisma.Chapter$attachmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chapter$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Chapter model
 */
export interface ChapterFieldRefs {
    readonly id: Prisma.FieldRef<"Chapter", 'String'>;
    readonly title: Prisma.FieldRef<"Chapter", 'String'>;
    readonly description: Prisma.FieldRef<"Chapter", 'String'>;
    readonly order: Prisma.FieldRef<"Chapter", 'Int'>;
    readonly videoUrl: Prisma.FieldRef<"Chapter", 'String'>;
    readonly duration: Prisma.FieldRef<"Chapter", 'Float'>;
    readonly content: Prisma.FieldRef<"Chapter", 'String'>;
    readonly sectionId: Prisma.FieldRef<"Chapter", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Chapter", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Chapter", 'DateTime'>;
}
/**
 * Chapter findUnique
 */
export type ChapterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chapter to fetch.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter findUniqueOrThrow
 */
export type ChapterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chapter to fetch.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter findFirst
 */
export type ChapterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chapter to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chapters.
     */
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter findFirstOrThrow
 */
export type ChapterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chapter to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Chapters.
     */
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter findMany
 */
export type ChapterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Chapters to fetch.
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Chapters to fetch.
     */
    orderBy?: Prisma.ChapterOrderByWithRelationInput | Prisma.ChapterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Chapters.
     */
    cursor?: Prisma.ChapterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Chapters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Chapters.
     */
    skip?: number;
    distinct?: Prisma.ChapterScalarFieldEnum | Prisma.ChapterScalarFieldEnum[];
};
/**
 * Chapter create
 */
export type ChapterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Chapter.
     */
    data: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
};
/**
 * Chapter createMany
 */
export type ChapterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chapters.
     */
    data: Prisma.ChapterCreateManyInput | Prisma.ChapterCreateManyInput[];
};
/**
 * Chapter update
 */
export type ChapterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Chapter.
     */
    data: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
    /**
     * Choose, which Chapter to update.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter updateMany
 */
export type ChapterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Chapters.
     */
    data: Prisma.XOR<Prisma.ChapterUpdateManyMutationInput, Prisma.ChapterUncheckedUpdateManyInput>;
    /**
     * Filter which Chapters to update
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * Limit how many Chapters to update.
     */
    limit?: number;
};
/**
 * Chapter upsert
 */
export type ChapterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Chapter to update in case it exists.
     */
    where: Prisma.ChapterWhereUniqueInput;
    /**
     * In case the Chapter found by the `where` argument doesn't exist, create a new Chapter with this data.
     */
    create: Prisma.XOR<Prisma.ChapterCreateInput, Prisma.ChapterUncheckedCreateInput>;
    /**
     * In case the Chapter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.ChapterUpdateInput, Prisma.ChapterUncheckedUpdateInput>;
};
/**
 * Chapter delete
 */
export type ChapterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Chapter to delete.
     */
    where: Prisma.ChapterWhereUniqueInput;
};
/**
 * Chapter deleteMany
 */
export type ChapterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Chapters to delete
     */
    where?: Prisma.ChapterWhereInput;
    /**
     * Limit how many Chapters to delete.
     */
    limit?: number;
};
/**
 * Chapter findRaw
 */
export type ChapterFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Chapter aggregateRaw
 */
export type ChapterAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Chapter.attachments
 */
export type Chapter$attachmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: Prisma.AttachmentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Attachment
     */
    omit?: Prisma.AttachmentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AttachmentInclude<ExtArgs> | null;
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    cursor?: Prisma.AttachmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
/**
 * Chapter without action
 */
export type ChapterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Chapter.d.ts.map