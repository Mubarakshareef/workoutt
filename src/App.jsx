import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

// Layout Components
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import WorkoutPlanner from './pages/WorkoutPlanner';
import ExerciseLibrary from './pages/ExerciseLibrary';
import Progress from './pages/Progress';
import Profile from './pages/Profile';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <div className="main-container">
            <Sidebar />
            <main className="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workout-planner" element={<WorkoutPlanner />} />
                <Route path="/exercise-library" element={<ExerciseLibrary />} />
                <Route path="/progress" element={<Progress />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;