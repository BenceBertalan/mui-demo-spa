# Issue #8: Add forms demo with TextField, Select, validation

**Priority:** Medium (Sequence: 8, Depends on #6)  
**Labels:** forms, validation, priority:medium, depends-on:#6  
**Assignees:** MuiDemoBot  
**Description:**  
Add forms section to showcase.

**Implementation Details:**  
- `src/components/showcase/FormsDemo.tsx`: useState for form data. TextField with error prop, Select with MenuItem. onSubmit: validate and set errors.  
- Form with required fields, submit button.  

**Expected Outcome:** Validated form with blue focus. File: src/components/showcase/FormsDemo.tsx.  
**Acceptance Criteria:** Form validates on submit, shows errors.