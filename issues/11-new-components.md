# Issue #11: Add new component demos (Alert, Dialog, etc.)

**Priority:** Medium (Sequence: 11, Depends on #6)  
**Labels:** components, demos, priority:medium, depends-on:#6  
**Assignees:** MuiDemoBot  
**Description:**  
Expand showcase with additional MUI components.

**Implementation Details:**  
- `src/components/common/AlertDemo.tsx`: Alert with severity variants (success, error, warning, info), action buttons.  
- `src/components/common/DialogDemo.tsx`: useState for open, Dialog with DialogTitle, DialogContent, DialogActions. Button to open.  
- `src/components/common/ChipDemo.tsx`: Chip with icons, variants.  
- `src/components/common/ListDemo.tsx`: List with ListItem, avatars.  
- `src/components/common/SnackbarDemo.tsx`: useSnackbar hook, Button to trigger.  

**Expected Outcome:** Expanded showcase with interactive demos. Files: src/components/common/*.tsx.  
**Acceptance Criteria:** Components render and interact correctly.