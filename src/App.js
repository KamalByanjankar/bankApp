import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './components/Util/PrivateRoute';
import { FormProvider } from './context/FormProvider';
import Transfer from './components/Transfer/Transfer';
import Profile from './components/Profile/Profile';
import Card from './components/Card/Card';
import { UserProvider } from './context/UserProvider';

function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <FormProvider>
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
              <Route path="/transfer" element={
                <PrivateRoute>
                  <Transfer />
                </PrivateRoute>
                }
              />
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
                }
              />
              <Route path="/card-information" element={
                <PrivateRoute>
                  <Card />
                </PrivateRoute>
                }
              />
            </Routes>
          </Router>
        </FormProvider>
      </UserProvider>
    </div>
  );
}

export default App;