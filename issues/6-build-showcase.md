# Issue #6: Build components showcase page with expanded tabbed sections

**Priority:** Medium (Sequence: 6, Depends on #2, #3, #4)  
**Labels:** ui, showcase, priority:medium, depends-on:#2,#3,#4  
**Assignees:** MuiDemoBot  
**Description:**  
Build the showcase page with tabs for component demos.

**Implementation Details:**  
- `src/pages/ShowcasePage.tsx`: Tabs with TabList/TabPanel (from @mui/lab). Tabs: "Inputs", "Data", "Navigation", "Feedback", "Layout", "Overlays". Each panel renders corresponding demos (e.g., Feedback: AlertDemo, SnackbarDemo).  
- Install @mui/lab if not already.  

**Expected Outcome:** Tabbed showcase with new components. File: src/pages/ShowcasePage.tsx.  
**Acceptance Criteria:** Tabs switch panels, components display.