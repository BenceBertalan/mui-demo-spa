# Issue #5: Build landing page with blue-themed hero section and MUI features overview

**Priority:** Medium (Sequence: 5, Depends on #2, #3, #4)  
**Labels:** ui, landing, priority:medium, depends-on:#2,#3,#4  
**Assignees:** MuiDemoBot  
**Description:**  
Create the home page with hero and overview.

**Implementation Details:**  
- `src/pages/LandingPage.tsx`: Grid container, Grid size={{ xs: 12, md: 6 }}, Typography variant="h1", Button variant="contained" color="primary". Use sx={{ bgcolor: 'primary.main' }} for blue accents. Include feature cards with Card, CardContent.  
- Add Link to /showcase.  

**Expected Outcome:** Hero with blue theme, links to /showcase. File: src/pages/LandingPage.tsx.  
**Acceptance Criteria:** Page renders at /, responsive grid.