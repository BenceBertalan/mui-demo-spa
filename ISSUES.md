# MUI Demo SPA

This repository contains a modern, responsive demo app showcasing Material-UI framework features.

## Master Issue: Design and Implement Modern, Responsive MUI Demo SPA with React Router

**Title:** Design and Implement Modern, Responsive MUI Demo SPA with React Router  
**Description:**  
Build a Single Page Application (SPA) demo using Create React App to showcase Material-UI (MUI) framework features, emphasizing modern design, mobile-friendliness, and responsiveness. Integrate React Router for navigation between pages. Use a blue-themed palette (primary: deep blue #1976d2, secondary: light blue #42a5f5). Include a landing page, an expanded components showcase with tabbed sections and additional components (Alert, Dialog, Snackbar, Chip, List), theme switching, forms, data tables, and responsive grids. Use Docker Compose for infrastructure, exposing port 3001. Expected outcome: A fully functional SPA demo app with routing, demonstrating MUI's versatility in a touch-friendly, responsive interface. Implementation will use TypeScript, functional components with hooks, and MUI's sx prop for styling.

**Labels:** enhancement, demo, mui, spa, router  
**Assignees:** MuiDemoBot  
**Milestones:** v1.0 Demo Release  
**Estimated Effort:** 18-22 hours  

### Linked Sub-Issues (with Dependencies and Sequence)

1. **Issue #1: Set up Create React App project with MUI, React Router, and Docker infra**  
   **Priority:** High (Sequence: 1, No dependencies)  
   **Labels:** setup, infra, priority:high  
   **Implementation Details:**  
   - Run `npx create-react-app mui-demo-spa --template typescript` in `/root`.  
   - `cd mui-demo-spa` and `npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom`.  
   - `Dockerfile`: FROM node:18-alpine, WORKDIR /app, COPY package*.json ./, RUN npm install, COPY . ., EXPOSE 3000, CMD ["npm", "start"].  
   - `docker-compose.yml`: version: '3.8', services: app: build: ., ports: - "3001:3000", volumes: - .:/app - /app/node_modules.  
   - Test: `docker-compose up --build` starts at localhost:3001.  
   **Expected Outcome:** Project scaffolded with dependencies. Files: Dockerfile, docker-compose.yml, package.json.

2. **Issue #2: Configure React Router with routes for pages**  
   **Priority:** High (Sequence: 2, Depends on #1)  
   **Labels:** routing, priority:high, depends-on:#1  
   **Implementation Details:**  
   - In `src/routes/AppRoutes.tsx`: Import BrowserRouter, Routes, Route from 'react-router-dom'; export function AppRoutes() { return (<BrowserRouter><Routes><Route path="/" element={<LandingPage />} /><Route path="/showcase" element={<ShowcasePage />} /><Route path="*" element={<NotFoundPage />} /></Routes></BrowserRouter>); }.  
   - In `src/App.tsx`: Import AppRoutes; function App() { return <ThemeProvider theme={theme}><CssBaseline /><AppRoutes /></ThemeProvider>; }.  
   - Update Drawer to use Link from 'react-router-dom' for navigation.  
   **Expected Outcome:** SPA routing works, URL changes on nav. Files: src/routes/AppRoutes.tsx, src/App.tsx.

3. **Issue #3: Configure custom MUI theme with blue palette, typography, and dark mode**  
   **Priority:** High (Sequence: 3, Depends on #1)  
   **Labels:** theming, priority:high, depends-on:#1  
   **Implementation Details:**  
   - `src/theme/palette.ts`: export const palette = { primary: { main: '#1976d2' }, secondary: { main: '#42a5f5' }, mode: 'light' as const }.  
   - `src/theme/index.ts`: import { createTheme } from '@mui/material/styles'; export const theme = createTheme({ cssVariables: true, palette, typography: { fontFamily: 'Roboto, sans-serif' }, breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } } }).  
   - Use useColorScheme for mode toggle.  
   **Expected Outcome:** Blue theme applied globally. Files: src/theme/*.ts.

4. **Issue #4: Create responsive layout components (AppBar, Drawer) with mobile-friendly behavior**  
   **Priority:** High (Sequence: 4, Depends on #1, #3)  
   **Labels:** layout, responsive, priority:high, depends-on:#1,#3  
   **Implementation Details:**  
   - `src/components/layout/AppBar.tsx`: Import AppBar, IconButton, Toolbar; function Header() { const [open, setOpen] = useState(false); return <AppBar position="fixed"><Toolbar><IconButton onClick={() => setOpen(true)}><MenuIcon /></IconButton><Typography>MUI Demo</Typography></Toolbar></AppBar>; }.  
   - `src/components/layout/Drawer.tsx`: Use SwipeableDrawer, open prop, onClose/onOpen. List with ListItem and Link. useMediaQuery for variant.  
   **Expected Outcome:** Responsive layout, Drawer temporary on xs. Files: src/components/layout/*.tsx.

5. **Issue #5: Build landing page with blue-themed hero section and MUI features overview**  
   **Priority:** Medium (Sequence: 5, Depends on #2, #3, #4)  
   **Labels:** ui, landing, priority:medium, depends-on:#2,#3,#4  
   **Implementation Details:**  
   - `src/pages/LandingPage.tsx`: Grid container, Grid size={{ xs: 12, md: 6 }}, Typography variant="h1", Button variant="contained" color="primary". Use sx={{ bgcolor: 'primary.main' }} for blue accents.  
   **Expected Outcome:** Hero with blue theme, links to /showcase. File: src/pages/LandingPage.tsx.

6. **Issue #6: Build components showcase page with expanded tabbed sections**  
   **Priority:** Medium (Sequence: 6, Depends on #2, #3, #4)  
   **Labels:** ui, showcase, priority:medium, depends-on:#2,#3,#4  
   **Implementation Details:**  
   - `src/pages/ShowcasePage.tsx`: Tabs with TabList/TabPanel (from @mui/lab). Tabs: "Inputs", "Data", "Navigation", "Feedback", "Layout", "Overlays". Each panel renders corresponding demos (e.g., Feedback: AlertDemo, SnackbarDemo).  
   **Expected Outcome:** Tabbed showcase with new components. File: src/pages/ShowcasePage.tsx.

7. **Issue #7: Implement dark/light theme toggle in AppBar**  
   **Priority:** Medium (Sequence: 7, Depends on #3, #4)  
   **Labels:** theming, toggle, priority:medium, depends-on:#3,#4  
   **Implementation Details:**  
   - `src/components/showcase/ThemeToggle.tsx`: IconButton with Brightness4Icon, onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}. Use localStorage.  
   - Integrate into Header.tsx.  
   **Expected Outcome:** Toggle persists theme. Files: src/components/showcase/ThemeToggle.tsx.

8. **Issue #8: Add forms demo with TextField, Select, validation**  
   **Priority:** Medium (Sequence: 8, Depends on #6)  
   **Labels:** forms, validation, priority:medium, depends-on:#6  
   **Implementation Details:**  
   - `src/components/showcase/FormsDemo.tsx`: useState for form data. TextField with error prop, Select with MenuItem. onSubmit: validate and set errors.  
   **Expected Outcome:** Validated form with blue focus. File: src/components/showcase/FormsDemo.tsx.

9. **Issue #9: Add data table demo with sorting and pagination**  
   **Priority:** Medium (Sequence: 9, Depends on #6)  
   **Labels:** table, sorting, priority:medium, depends-on:#6  
   **Implementation Details:**  
   - `src/components/showcase/TableDemo.tsx`: Table with TableHead, sortable columns using useState for order. TablePagination with page/size. Mock data array.  
   **Expected Outcome:** Interactive table. File: src/components/showcase/TableDemo.tsx.

10. **Issue #10: Add responsive grid examples**  
    **Priority:** Medium (Sequence: 10, Depends on #6)  
    **Labels:** grid, responsive, priority:medium, depends-on:#6  
    **Implementation Details:**  
    - `src/components/showcase/GridDemo.tsx`: Grid container with size={{ xs: 12, md: 6 }}, spacing={2}. Include auto-layout with size="grow".  
    **Expected Outcome:** Responsive grid demos. File: src/components/showcase/GridDemo.tsx.

11. **Issue #11: Add new component demos (Alert, Dialog, etc.)**  
    **Priority:** Medium (Sequence: 11, Depends on #6)  
    **Labels:** components, demos, priority:medium, depends-on:#6  
    **Implementation Details:**  
    - `src/components/common/AlertDemo.tsx`: Alert with severity variants, action buttons.  
    - `src/components/common/DialogDemo.tsx`: useState for open, Dialog with DialogTitle, DialogContent, DialogActions.  
    - Similar for ChipDemo (Chip with icons), ListDemo (List with ListItem), SnackbarDemo (useSnackbar hook).  
    **Expected Outcome:** Expanded showcase with interactive demos. Files: src/components/common/*.tsx.

12. **Issue #12: Test and optimize for mobile responsiveness**  
    **Priority:** Low (Sequence: 12, Depends on all previous)  
    **Labels:** testing, mobile, priority:low, depends-on:all  
    **Implementation Details:**  
    - Use Chrome DevTools: Emulate mobile, check Drawer swipe, touch targets. Add viewport meta in public/index.html.  
    **Expected Outcome:** Mobile-optimized app. Infra: Docker test.