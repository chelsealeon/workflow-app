import React, { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { AppContext } from './context/AppContext';
import GroupInvite from './components/GroupInvite';

const App = () => {
  const navigate = useNavigate();
  const { loadUserData, setChatUser, setMessagesId } = useContext(AppContext);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        loadUserData(user.uid);
      } else {
        setChatUser(null);
        setMessagesId(null);
        navigate('/');
      }
    });
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/chat"
          element={
            <>
              <GroupInvite />
              <Chat />
            </>
          }
        />
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </>
  );
};

export default App;
