import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Util/PrivateRoute';
import { FormProvider } from './context/FormProvider';
import { UserProvider } from './context/UserProvider';

function App() {
  return (
    <div className="App">
      <FormProvider>
        <UserProvider>
          <Header />
          <Router>
            <Routes>
              <Route exact path="/" element={<Signin />} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/dashboard" element={
                <PrivateRoute>
                  <Dashboard/>
                </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </UserProvider>
      </FormProvider>
    </div>
  );
}

export default App;