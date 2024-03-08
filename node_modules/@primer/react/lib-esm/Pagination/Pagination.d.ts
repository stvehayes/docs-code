import React from 'react';
import type { ResponsiveValue } from '../hooks/useResponsiveValue';
export type PaginationProps = {
    theme?: Record<string, unknown>;
    pageCount: number;
    currentPage: number;
    onPageChange?: (e: React.MouseEvent, n: number) => void;
    hrefBuilder?: (n: number) => string;
    marginPageCount?: number;
    showPages?: boolean | ResponsiveValue<boolean>;
    surroundingPageCount?: number;
};
declare function Pagination({ theme, pageCount, currentPage, onPageChange, hrefBuilder, marginPageCount, showPages, surroundingPageCount, ...rest }: PaginationProps): React.JSX.Element;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map