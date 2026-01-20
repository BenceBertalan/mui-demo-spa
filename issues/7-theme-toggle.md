# Issue #7: Implement dark/light theme toggle in AppBar

**Priority:** Medium (Sequence: 7, Depends on #3, #4)  
**Labels:** theming, toggle, priority:medium, depends-on:#3,#4  
**Assignees:** MuiDemoBot  
**Description:**  
Add theme toggle to header.

**Implementation Details:**  
- `src/components/showcase/ThemeToggle.tsx`: IconButton with Brightness4Icon, onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}. Use localStorage.  
- Integrate into Header.tsx. Use useColorScheme or context for mode.  

**Expected Outcome:** Toggle persists theme. Files: src/components/showcase/ThemeToggle.tsx.  
**Acceptance Criteria:** Clicking toggle switches to dark mode.