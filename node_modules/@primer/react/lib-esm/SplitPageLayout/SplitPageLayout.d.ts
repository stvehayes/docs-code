import React from 'react';
import type { SxProp } from '..';
import type { PageLayoutContentProps, PageLayoutFooterProps, PageLayoutHeaderProps, PageLayoutPaneProps } from '../PageLayout';
export type SplitPageLayoutProps = SxProp;
export declare const Root: React.FC<React.PropsWithChildren<SplitPageLayoutProps>>;
export type SplitPageLayoutHeaderProps = PageLayoutHeaderProps;
export declare const Header: React.FC<React.PropsWithChildren<SplitPageLayoutHeaderProps>>;
export type SplitPageLayoutContentProps = PageLayoutContentProps;
export declare const Content: React.FC<React.PropsWithChildren<SplitPageLayoutContentProps>>;
export type SplitPageLayoutPaneProps = PageLayoutPaneProps;
export declare const Pane: React.FC<React.PropsWithChildren<SplitPageLayoutPaneProps>>;
export type SplitPageLayoutFooterProps = PageLayoutFooterProps;
export declare const Footer: React.FC<React.PropsWithChildren<SplitPageLayoutFooterProps>>;
export declare const SplitPageLayout: React.FC<React.PropsWithChildren<SxProp>> & {
    Header: React.FC<React.PropsWithChildren<PageLayoutHeaderProps>>;
    Content: React.FC<React.PropsWithChildren<PageLayoutContentProps>>;
    Pane: React.FC<React.PropsWithChildren<PageLayoutPaneProps>>;
    Footer: React.FC<React.PropsWithChildren<PageLayoutFooterProps>>;
};
//# sourceMappingURL=SplitPageLayout.d.ts.map