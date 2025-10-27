import type * as runtime from "@prisma/client/runtime/binary";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model Attachment
 *
 */
export type AttachmentModel = runtime.Types.Result.DefaultSelection<Prisma.$AttachmentPayload>;
export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
export type AttachmentMinAggregateOutputType = {
    id: string | null;
    filename: string | null;
    url: string | null;
    type: string | null;
    chapterId: string | null;
};
export type AttachmentMaxAggregateOutputType = {
    id: string | null;
    filename: string | null;
    url: string | null;
    type: string | null;
    chapterId: string | null;
};
export type AttachmentCountAggregateOutputType = {
    id: number;
    filename: number;
    url: number;
    type: number;
    chapterId: number;
    _all: number;
};
export type AttachmentMinAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    type?: true;
    chapterId?: true;
};
export type AttachmentMaxAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    type?: true;
    chapterId?: true;
};
export type AttachmentCountAggregateInputType = {
    id?: true;
    filename?: true;
    url?: true;
    type?: true;
    chapterId?: true;
    _all?: true;
};
export type AttachmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Attachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType;
};
export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAttachment[P]> : Prisma.GetScalarType<T[P], AggregateAttachment[P]>;
};
export type AttachmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AttachmentWhereInput;
    orderBy?: Prisma.AttachmentOrderByWithAggregationInput | Prisma.AttachmentOrderByWithAggregationInput[];
    by: Prisma.AttachmentScalarFieldEnum[] | Prisma.AttachmentScalarFieldEnum;
    having?: Prisma.AttachmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AttachmentCountAggregateInputType | true;
    _min?: AttachmentMinAggregateInputType;
    _max?: AttachmentMaxAggregateInputType;
};
export type AttachmentGroupByOutputType = {
    id: string;
    filename: string;
    url: string;
    type: string;
    chapterId: string | null;
    _count: AttachmentCountAggregateOutputType | null;
    _min: AttachmentMinAggregateOutputType | null;
    _max: AttachmentMaxAggregateOutputType | null;
};
type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AttachmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AttachmentGroupByOutputType[P]>;
}>>;
export type AttachmentWhereInput = {
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    filename?: Prisma.StringFilter<"Attachment"> | string;
    url?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.StringFilter<"Attachment"> | string;
    chapterId?: Prisma.StringNullableFilter<"Attachment"> | string | null;
    chapter?: Prisma.XOR<Prisma.ChapterNullableScalarRelationFilter, Prisma.ChapterWhereInput> | null;
};
export type AttachmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    chapter?: Prisma.ChapterOrderByWithRelationInput;
};
export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    OR?: Prisma.AttachmentWhereInput[];
    NOT?: Prisma.AttachmentWhereInput | Prisma.AttachmentWhereInput[];
    filename?: Prisma.StringFilter<"Attachment"> | string;
    url?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.StringFilter<"Attachment"> | string;
    chapterId?: Prisma.StringNullableFilter<"Attachment"> | string | null;
    chapter?: Prisma.XOR<Prisma.ChapterNullableScalarRelationFilter, Prisma.ChapterWhereInput> | null;
}, "id">;
export type AttachmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
    _count?: Prisma.AttachmentCountOrderByAggregateInput;
    _max?: Prisma.AttachmentMaxOrderByAggregateInput;
    _min?: Prisma.AttachmentMinOrderByAggregateInput;
};
export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.AttachmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AttachmentScalarWhereWithAggregatesInput | Prisma.AttachmentScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    filename?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    url?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Attachment"> | string;
    chapterId?: Prisma.StringNullableWithAggregatesFilter<"Attachment"> | string | null;
};
export type AttachmentCreateInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
    chapter?: Prisma.ChapterCreateNestedOneWithoutAttachmentsInput;
};
export type AttachmentUncheckedCreateInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
    chapterId?: string | null;
};
export type AttachmentUpdateInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    chapter?: Prisma.ChapterUpdateOneWithoutAttachmentsNestedInput;
};
export type AttachmentUncheckedUpdateInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AttachmentCreateManyInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
    chapterId?: string | null;
};
export type AttachmentUpdateManyMutationInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttachmentUncheckedUpdateManyInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    chapterId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AttachmentListRelationFilter = {
    every?: Prisma.AttachmentWhereInput;
    some?: Prisma.AttachmentWhereInput;
    none?: Prisma.AttachmentWhereInput;
};
export type AttachmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AttachmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
};
export type AttachmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
};
export type AttachmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    filename?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    chapterId?: Prisma.SortOrder;
};
export type AttachmentCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput> | Prisma.AttachmentCreateWithoutChapterInput[] | Prisma.AttachmentUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutChapterInput | Prisma.AttachmentCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.AttachmentCreateManyChapterInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUncheckedCreateNestedManyWithoutChapterInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput> | Prisma.AttachmentCreateWithoutChapterInput[] | Prisma.AttachmentUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutChapterInput | Prisma.AttachmentCreateOrConnectWithoutChapterInput[];
    createMany?: Prisma.AttachmentCreateManyChapterInputEnvelope;
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
};
export type AttachmentUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput> | Prisma.AttachmentCreateWithoutChapterInput[] | Prisma.AttachmentUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutChapterInput | Prisma.AttachmentCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutChapterInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.AttachmentCreateManyChapterInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutChapterInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutChapterInput | Prisma.AttachmentUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentUncheckedUpdateManyWithoutChapterNestedInput = {
    create?: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput> | Prisma.AttachmentCreateWithoutChapterInput[] | Prisma.AttachmentUncheckedCreateWithoutChapterInput[];
    connectOrCreate?: Prisma.AttachmentCreateOrConnectWithoutChapterInput | Prisma.AttachmentCreateOrConnectWithoutChapterInput[];
    upsert?: Prisma.AttachmentUpsertWithWhereUniqueWithoutChapterInput | Prisma.AttachmentUpsertWithWhereUniqueWithoutChapterInput[];
    createMany?: Prisma.AttachmentCreateManyChapterInputEnvelope;
    set?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    disconnect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    delete?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    connect?: Prisma.AttachmentWhereUniqueInput | Prisma.AttachmentWhereUniqueInput[];
    update?: Prisma.AttachmentUpdateWithWhereUniqueWithoutChapterInput | Prisma.AttachmentUpdateWithWhereUniqueWithoutChapterInput[];
    updateMany?: Prisma.AttachmentUpdateManyWithWhereWithoutChapterInput | Prisma.AttachmentUpdateManyWithWhereWithoutChapterInput[];
    deleteMany?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
};
export type AttachmentCreateWithoutChapterInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
};
export type AttachmentUncheckedCreateWithoutChapterInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
};
export type AttachmentCreateOrConnectWithoutChapterInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput>;
};
export type AttachmentCreateManyChapterInputEnvelope = {
    data: Prisma.AttachmentCreateManyChapterInput | Prisma.AttachmentCreateManyChapterInput[];
};
export type AttachmentUpsertWithWhereUniqueWithoutChapterInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.AttachmentUpdateWithoutChapterInput, Prisma.AttachmentUncheckedUpdateWithoutChapterInput>;
    create: Prisma.XOR<Prisma.AttachmentCreateWithoutChapterInput, Prisma.AttachmentUncheckedCreateWithoutChapterInput>;
};
export type AttachmentUpdateWithWhereUniqueWithoutChapterInput = {
    where: Prisma.AttachmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateWithoutChapterInput, Prisma.AttachmentUncheckedUpdateWithoutChapterInput>;
};
export type AttachmentUpdateManyWithWhereWithoutChapterInput = {
    where: Prisma.AttachmentScalarWhereInput;
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyWithoutChapterInput>;
};
export type AttachmentScalarWhereInput = {
    AND?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    OR?: Prisma.AttachmentScalarWhereInput[];
    NOT?: Prisma.AttachmentScalarWhereInput | Prisma.AttachmentScalarWhereInput[];
    id?: Prisma.StringFilter<"Attachment"> | string;
    filename?: Prisma.StringFilter<"Attachment"> | string;
    url?: Prisma.StringFilter<"Attachment"> | string;
    type?: Prisma.StringFilter<"Attachment"> | string;
    chapterId?: Prisma.StringNullableFilter<"Attachment"> | string | null;
};
export type AttachmentCreateManyChapterInput = {
    id?: string;
    filename: string;
    url: string;
    type: string;
};
export type AttachmentUpdateWithoutChapterInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttachmentUncheckedUpdateWithoutChapterInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttachmentUncheckedUpdateManyWithoutChapterInput = {
    filename?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AttachmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    type?: boolean;
    chapterId?: boolean;
    chapter?: boolean | Prisma.Attachment$chapterArgs<ExtArgs>;
}, ExtArgs["result"]["attachment"]>;
export type AttachmentSelectScalar = {
    id?: boolean;
    filename?: boolean;
    url?: boolean;
    type?: boolean;
    chapterId?: boolean;
};
export type AttachmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "filename" | "url" | "type" | "chapterId", ExtArgs["result"]["attachment"]>;
export type AttachmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    chapter?: boolean | Prisma.Attachment$chapterArgs<ExtArgs>;
};
export type $AttachmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Attachment";
    objects: {
        chapter: Prisma.$ChapterPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        filename: string;
        url: string;
        type: string;
        chapterId: string | null;
    }, ExtArgs["result"]["attachment"]>;
    composites: {};
};
export type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AttachmentPayload, S>;
export type AttachmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AttachmentCountAggregateInputType | true;
};
export interface AttachmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Attachment'];
        meta: {
            name: 'Attachment';
        };
    };
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     *
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AttachmentFindManyArgs>(args?: Prisma.SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     *
     */
    create<T extends AttachmentCreateArgs>(args: Prisma.SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: Prisma.SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     *
     */
    delete<T extends AttachmentDeleteArgs>(args: Prisma.SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AttachmentUpdateArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: Prisma.SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: Prisma.SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma.Prisma__AttachmentClient<runtime.Types.Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Attachments that matches the filter.
     * @param {AttachmentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attachment = await prisma.attachment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: Prisma.AttachmentFindRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Perform aggregation operations on a Attachment.
     * @param {AttachmentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attachment = await prisma.attachment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: Prisma.AttachmentAggregateRawArgs): Prisma.PrismaPromise<Prisma.JsonObject>;
    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(args?: Prisma.Subset<T, AttachmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AttachmentCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttachmentAggregateArgs>(args: Prisma.Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>;
    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AttachmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AttachmentGroupByArgs['orderBy'];
    } : {
        orderBy?: AttachmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Attachment model
     */
    readonly fields: AttachmentFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Attachment.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    chapter<T extends Prisma.Attachment$chapterArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Attachment$chapterArgs<ExtArgs>>): Prisma.Prisma__ChapterClient<runtime.Types.Result.GetResult<Prisma.$ChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the Attachment model
 */
export interface AttachmentFieldRefs {
    readonly id: Prisma.FieldRef<"Attachment", 'String'>;
    readonly filename: Prisma.FieldRef<"Attachment", 'String'>;
    readonly url: Prisma.FieldRef<"Attachment", 'String'>;
    readonly type: Prisma.FieldRef<"Attachment", 'String'>;
    readonly chapterId: Prisma.FieldRef<"Attachment", 'String'>;
}
/**
 * Attachment findUnique
 */
export type AttachmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Attachment to fetch.
     */
    where: Prisma.AttachmentWhereUniqueInput;
};
/**
 * Attachment findUniqueOrThrow
 */
export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Attachment to fetch.
     */
    where: Prisma.AttachmentWhereUniqueInput;
};
/**
 * Attachment findFirst
 */
export type AttachmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Attachment to fetch.
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Attachments.
     */
    cursor?: Prisma.AttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Attachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Attachments.
     */
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
/**
 * Attachment findFirstOrThrow
 */
export type AttachmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Attachment to fetch.
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Attachments.
     */
    cursor?: Prisma.AttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Attachments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Attachments.
     */
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
/**
 * Attachment findMany
 */
export type AttachmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Attachments to fetch.
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Attachments to fetch.
     */
    orderBy?: Prisma.AttachmentOrderByWithRelationInput | Prisma.AttachmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Attachments.
     */
    cursor?: Prisma.AttachmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Attachments.
     */
    skip?: number;
    distinct?: Prisma.AttachmentScalarFieldEnum | Prisma.AttachmentScalarFieldEnum[];
};
/**
 * Attachment create
 */
export type AttachmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Attachment.
     */
    data: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
};
/**
 * Attachment createMany
 */
export type AttachmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: Prisma.AttachmentCreateManyInput | Prisma.AttachmentCreateManyInput[];
};
/**
 * Attachment update
 */
export type AttachmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Attachment.
     */
    data: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
    /**
     * Choose, which Attachment to update.
     */
    where: Prisma.AttachmentWhereUniqueInput;
};
/**
 * Attachment updateMany
 */
export type AttachmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: Prisma.XOR<Prisma.AttachmentUpdateManyMutationInput, Prisma.AttachmentUncheckedUpdateManyInput>;
    /**
     * Filter which Attachments to update
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * Limit how many Attachments to update.
     */
    limit?: number;
};
/**
 * Attachment upsert
 */
export type AttachmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: Prisma.AttachmentWhereUniqueInput;
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: Prisma.XOR<Prisma.AttachmentCreateInput, Prisma.AttachmentUncheckedCreateInput>;
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AttachmentUpdateInput, Prisma.AttachmentUncheckedUpdateInput>;
};
/**
 * Attachment delete
 */
export type AttachmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Attachment to delete.
     */
    where: Prisma.AttachmentWhereUniqueInput;
};
/**
 * Attachment deleteMany
 */
export type AttachmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: Prisma.AttachmentWhereInput;
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number;
};
/**
 * Attachment findRaw
 */
export type AttachmentFindRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Attachment aggregateRaw
 */
export type AttachmentAggregateRawArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Attachment.chapter
 */
export type Attachment$chapterArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
/**
 * Attachment without action
 */
export type AttachmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
export {};
//# sourceMappingURL=Attachment.d.ts.map