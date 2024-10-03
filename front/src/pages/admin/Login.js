import React, { useContext } from 'react';
import { loginAdmin } from '../../services/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../AuthContext";
import { motion } from 'framer-motion';
import '../../sass/pages/auth/_login.scss';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    const { login: setLogin } = useContext(AuthContext);
    async function submit(e) {
        e.preventDefault();
        try {
            await loginAdmin(email, password).then(
                res => {
                    if (res.data.token) {
                        localStorage.setItem('TOKEN', res.data.token)
                        localStorage.setItem('Name', res.data.name)
                        localStorage.setItem('Adm', res.data.userId)
                        setLogin();
                        history(process.env.REACT_APP_ADM_BASE)
                    } else if (!res.data.token) {
                        alert('Please try to sign up')
                    }
                }
            ).catch(e => {
                alert('Please check the details somthing went wrong')
                console.log(e)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <motion.main
            className='login-content'
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: .3, ease: "easeInOut", translateY: {
                    type: "spring",
                    damping: 9,
                    stiffness: 50,
                    restSpeed: 0.5,
                    restDelta: 0.001
                }
            }
            }
        >
            <div className='connect-boxes'>
                <form action='/login-adm' method='POST' className='form-group'>
                    <h2>LOGIN - ADM</h2>
                    <input type="email" id="email" size="30" pattern=".+@globex\.com" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required className="form-input" />
                    <input type="password" name="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required className="form-input" />
                    <button type="submit" className='btn-login' onClick={submit} >login</button>

                </form>
            </div>
        </motion.main>
    );
};

export default Login;