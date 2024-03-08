interface Repo {
    id: number;
    name: string;
    type: 'public' | 'internal';
    updatedAt: number;
    securityFeatures: {
        dependabot: Array<string>;
        codeScanning: Array<string>;
    };
}
export declare const repos: Array<Repo>;
type SortOptions = {
    sort: 'name' | 'updatedAt';
    direction: 'asc' | 'desc';
};
type PaginationOptions = {
    page: number;
    perPage: number;
};
type ListRepoOptions = Partial<SortOptions> & Partial<PaginationOptions>;
export declare function fetchRepos({ sort, direction, page, perPage }?: ListRepoOptions): Promise<Array<Repo>>;
export declare function fetchRepoPageInfo(perPage: number): Promise<{
    totalCount: number;
    totalPages: number;
}>;
type Result<T> = {
    loading: boolean;
    error: Error | null;
    data: T | null;
};
export declare function useQuery<T>(queryKey: string | Array<string | number>, queryFn: ({ signal }: {
    signal: AbortSignal;
}) => Promise<T>): Result<T>;
export declare function useFlakeyQuery<T>({ queryKey, queryFn, }: {
    queryKey: string | Array<string | number>;
    queryFn: ({ signal }: {
        signal: AbortSignal;
    }) => Promise<T>;
}): Result<T>;
export {};
//# sourceMappingURL=data.d.ts.map