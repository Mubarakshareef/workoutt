import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

// Layout Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import WorkoutPlanner from './pages/WorkoutPlanner';
import ExerciseLibrary from './pages/ExerciseLibrary';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Box sx={{ display: 'flex' }}>
            <Header toggleSidebar={handleSidebarToggle} />
            <Sidebar 
              open={sidebarOpen} 
              onClose={() => setSidebarOpen(false)} 
            />
            <Box
              component="main"
              className={`content ${!sidebarOpen ? 'sidebar-closed' : ''}`}
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workout-planner" element={<WorkoutPlanner />} />
                <Route path="/exercise-library" element={<ExerciseLibrary />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;