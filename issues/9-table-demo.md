# Issue #9: Add data table demo with sorting and pagination

**Priority:** Medium (Sequence: 9, Depends on #6)  
**Labels:** table, sorting, priority:medium, depends-on:#6  
**Assignees:** MuiDemoBot  
**Description:**  
Add table demo to showcase.

**Implementation Details:**  
- `src/components/showcase/TableDemo.tsx`: Table with TableHead, sortable columns using useState for order. TablePagination with page/size. Mock data array in src/utils/mockData.ts.  
- TableRow with data mapping.  

**Expected Outcome:** Interactive table. File: src/components/showcase/TableDemo.tsx.  
**Acceptance Criteria:** Sorting works, pagination changes rows.