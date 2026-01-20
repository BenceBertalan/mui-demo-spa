# Issue #4: Create responsive layout components (AppBar, Drawer) with mobile-friendly behavior

**Priority:** High (Sequence: 4, Depends on #1, #3)  
**Labels:** layout, responsive, priority:high, depends-on:#1,#3  
**Assignees:** MuiDemoBot  
**Description:**  
Build responsive layout with AppBar and Drawer.

**Implementation Details:**  
- `src/components/layout/AppBar.tsx`: Import AppBar, IconButton, Toolbar; function Header() { const [open, setOpen] = useState(false); return <AppBar position="fixed"><Toolbar><IconButton onClick={() => setOpen(true)}><MenuIcon /></IconButton><Typography>MUI Demo</Typography></Toolbar></AppBar>; }.  
- `src/components/layout/Drawer.tsx`: Use SwipeableDrawer, open prop, onClose/onOpen. List with ListItem and Link. useMediaQuery((theme) => theme.breakpoints.up('md')) for variant (permanent vs temporary).  
- `src/components/layout/Container.tsx`: Export function ContainerWrapper({ children }) { return <Container maxWidth="lg">{children}</Container>; }.  

**Expected Outcome:** Responsive layout, Drawer temporary on xs. Files: src/components/layout/*.tsx.  
**Acceptance Criteria:** Drawer opens on mobile tap, closes on overlay click.