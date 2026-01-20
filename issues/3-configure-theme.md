# Issue #3: Configure custom MUI theme with blue palette, typography, and dark mode

**Priority:** High (Sequence: 3, Depends on #1)  
**Labels:** theming, priority:high, depends-on:#1  
**Assignees:** MuiDemoBot  
**Description:**  
Set up global MUI theme with blue colors and dark mode support.

**Implementation Details:**  
- `src/theme/palette.ts`: export const lightPalette = { primary: { main: '#1976d2' }, secondary: { main: '#42a5f5' } }; export const darkPalette = { ...lightPalette, mode: 'dark' as const }.  
- `src/theme/index.ts`: import { createTheme } from '@mui/material/styles'; export const theme = createTheme({ cssVariables: true, palette: lightPalette, typography: { fontFamily: 'Roboto, sans-serif' }, breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } } }); export const darkTheme = createTheme({ ...theme, palette: darkPalette }).  
- Use useColorScheme for mode toggle if needed.  

**Expected Outcome:** Blue theme applied globally. Files: src/theme/*.ts.  
**Acceptance Criteria:** Components use blue primary color.