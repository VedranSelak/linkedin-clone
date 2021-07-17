import '../css/login.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase.js';

const Login = () => {
    const [name, setName] = useState('');
    const [pic, setPic] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [register, setRegister] = useState(false);

    const [alert, setAlert] = useState(false);

    const dispatch = useDispatch();

    const doLogin = (e) => {
        e.preventDefault();
        
    };

    const doRegister = (e) => {
        e.preventDefault();
        if(!name) {
            setAlert(true);
            return;
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: pic,
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: pic
                }));
            });
        }).catch(error => {
            setAlert(true);
        });
    };
    return (
        <div className='login'>
            <img src="./Linkedin-Logo.png" alt="" />
            <form>
                {register ? <input value={name} placeholder='Full name..' onChange={(e) => setName(e.target.value)} type="text" /> : ''}
                {register ? <input value={pic} placeholder='Profile pic URL' onChange={(e) => setPic(e.target.value)} type="text" /> : ''}
                <input value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} type="email" />
                <input value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} type="password" />
                {alert ? <label className='alert'>Invalid entry!</label> : '' }
                <button type='submit' onClick={register ? doRegister : doLogin}>{register ? 'Register' : 'Login'}</button>
            </form>
            {!register ? <p>Don't have an account? <span className='toggle-register' onClick={() => setRegister(true)}>Register</span></p> : ''}
            {register ? <p>Go back to login? <span className='toggle-register' onClick={() => setRegister(false)}>Go to login</span></p> : ''}
        </div>
    )
}

export default Login
