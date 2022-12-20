import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor />} />
          <Route path='mentorview/:id' element={<MentorView />} />
          <Route path="student" element={<Student mentorVisible={mentorVisible} />} />
          <Route path='studentview/:roll_no' element={<StudentView />} />
          <Route path='admissionform' element={<AdmissionForm />} />
          <Route path='editstudent/:roll_no' element={<EditStudent />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
