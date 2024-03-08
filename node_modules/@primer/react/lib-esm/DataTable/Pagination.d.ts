import React from 'react';
import type { ResponsiveValue } from '../hooks/useResponsiveValue';
export type PaginationProps = Omit<React.ComponentPropsWithoutRef<'nav'>, 'onChange'> & {
    /**
     * Provide a label for the navigation landmark rendered by this component
     */
    'aria-label': string;
    /**
     * Provide an optional index to specify the default selected page
     */
    defaultPageIndex?: number;
    /**
     * Optionally provide an `id` that is placed on the navigation landmark
     * rendered by this component
     */
    id?: string;
    /**
     * Optionally provide a handler that is called whenever the pagination state
     * is updated
     */
    onChange?: (state: PaginationState) => void;
    /**
     * Optionally specify the number of items within a page
     */
    pageSize?: number;
    /**
     * Whether to show the page numbers
     */
    showPages?: boolean | ResponsiveValue<boolean>;
    /**
     * Specify the total number of items within the collection
     */
    totalCount: number;
};
export declare function Pagination({ 'aria-label': label, defaultPageIndex, id, onChange, pageSize, showPages, totalCount, }: PaginationProps): React.JSX.Element;
type PaginationState = {
    /**
     * The index of currently selected page
     */
    pageIndex: number;
};
export {};
//# sourceMappingURL=Pagination.d.ts.map