import './App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.profileURL
        }));
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="app">
     <Header />
     {!user ? <Login /> : <div className="app-body">
                            <SideBar />
                            <Feed />
                          </div>}
    </div>
  );
}

export default App;
