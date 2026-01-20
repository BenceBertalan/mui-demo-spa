# Issue #1: Set up Create React App project with MUI, React Router, and Docker infra

**Priority:** High (Sequence: 1, No dependencies)  
**Labels:** setup, infra, priority:high  
**Assignees:** MuiDemoBot  
**Description:**  
Set up the foundational project structure for the MUI Demo SPA.

**Implementation Details:**  
- Run `npx create-react-app mui-demo-spa --template typescript` in `/root`.  
- `cd mui-demo-spa` and `npm install @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom @mui/lab`. (Added @mui/lab for Tabs if needed)  
- `Dockerfile`: FROM node:18-alpine, WORKDIR /app, COPY package*.json ./, RUN npm install, COPY . ., EXPOSE 3000, CMD ["npm", "start"].  
- `docker-compose.yml`: version: '3.8', services: app: build: ., ports: - "3001:3000", volumes: - .:/app - /app/node_modules.  
- Test: `docker-compose up --build` starts at localhost:3001 without port conflicts.  

**Expected Outcome:** Project scaffolded with dependencies. Files: Dockerfile, docker-compose.yml, package.json.  
**Acceptance Criteria:** App runs in Docker, MUI components importable.