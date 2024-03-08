/// <reference types="react" />
export declare function buildPaginationModel(pageCount: number, currentPage: number, showPages: boolean, marginPageCount: number, surroundingPageCount: number): ({
    type: string;
    num: number;
    disabled: boolean;
} | {
    type: string;
    num: number;
    selected?: undefined;
    precedesBreak?: undefined;
} | {
    type: string;
    num: number;
    selected: boolean;
    precedesBreak: boolean;
})[];
type PageType = {
    type: string;
    num: number;
    disabled?: boolean;
    selected?: boolean;
    precedesBreak?: boolean;
};
export declare function buildComponentData(page: PageType, hrefBuilder: (n: number) => string, onClick: (e: React.MouseEvent) => void): {
    props: {};
    key: string;
    content: string;
};
export {};
//# sourceMappingURL=model.d.ts.map