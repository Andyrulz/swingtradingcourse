import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CourseDashboard from './components/CourseDashboard';
import LessonView from './components/LessonView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/course" element={<CourseDashboard />} />
          <Route path="/lesson/:moduleId/:lessonId" element={<LessonView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;