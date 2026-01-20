# Issue #2: Configure React Router with routes for pages

**Priority:** High (Sequence: 2, Depends on #1)  
**Labels:** routing, priority:high, depends-on:#1  
**Assignees:** MuiDemoBot  
**Description:**  
Implement routing for SPA navigation.

**Implementation Details:**  
- In `src/routes/AppRoutes.tsx`: Import BrowserRouter, Routes, Route from 'react-router-dom'; export function AppRoutes() { return (<BrowserRouter><Routes><Route path="/" element={<LandingPage />} /><Route path="/showcase" element={<ShowcasePage />} /><Route path="*" element={<NotFoundPage />} /></Routes></BrowserRouter>); }.  
- In `src/App.tsx`: Import AppRoutes; function App() { return <ThemeProvider theme={theme}><CssBaseline /><AppRoutes /></ThemeProvider>; }.  
- Update Drawer to use Link from 'react-router-dom' for navigation.  

**Expected Outcome:** SPA routing works, URL changes on nav. Files: src/routes/AppRoutes.tsx, src/App.tsx.  
**Acceptance Criteria:** Clicking links updates URL and renders correct page without reload.