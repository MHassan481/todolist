import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './app/components/login';
import RegisterForm from './app/components/register';
import FormikForm from './app/components/formikForm';
import HomePage from './app/homepage';
import FormikFormData from './app/components/formikFormData';
import TodoList from './app/components/to-doList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/formikForm" element={<FormikForm />} />
        <Route path="/formikFormData" element={<FormikFormData />} />
        <Route path="/to-doList" element={<TodoList />} />
      </Routes>
    </Router>
  );
}

export default App;

