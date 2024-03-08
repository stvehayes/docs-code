import React from 'react';
export declare const defaultColorMode = "day";
export type Theme = {
    [key: string]: any;
};
type ColorMode = 'day' | 'night' | 'light' | 'dark';
export type ColorModeWithAuto = ColorMode | 'auto';
export type ThemeProviderProps = {
    theme?: Theme;
    colorMode?: ColorModeWithAuto;
    dayScheme?: string;
    nightScheme?: string;
    preventSSRMismatch?: boolean;
};
export declare const ThemeProvider: React.FC<React.PropsWithChildren<ThemeProviderProps>>;
export declare function useTheme(): {
    theme?: Theme | undefined;
    colorScheme?: string | undefined;
    colorMode?: ColorModeWithAuto | undefined;
    resolvedColorMode?: ColorMode | undefined;
    resolvedColorScheme?: string | undefined;
    dayScheme?: string | undefined;
    nightScheme?: string | undefined;
    setColorMode: React.Dispatch<React.SetStateAction<ColorModeWithAuto>>;
    setDayScheme: React.Dispatch<React.SetStateAction<string>>;
    setNightScheme: React.Dispatch<React.SetStateAction<string>>;
};
export declare function useColorSchemeVar(values: Partial<Record<string, string>>, fallback: string): string;
export default ThemeProvider;
//# sourceMappingURL=ThemeProvider.d.ts.map