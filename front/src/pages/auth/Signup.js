import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { signup } from '../../services/auth';
import '../../sass/pages/auth/_login.scss';

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useNavigate()
    async function submit(e) {
        e.preventDefault();
        try {
            await signup(email, name, password).then(
                res => {
                    if (res.data) {
                        history('/login')
                    } else if (!res.data) {
                        alert('Please try again')
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
            className='singup'
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
            <div className='connect-boxes' data-testid="connect-boxes">
                <form action='/signup' method='POST' className='form-group'>
                    <h2>SIGNUP</h2>
                    <input type="text" name="username" placeholder="Pseudo" minLength="2" maxLength="8" size="10" required onChange={(e) => { setName(e.target.value) }} className="form-input" />
                    <input type="email" id="email" pattern=".+@globex\.com" size="30" placeholder="Email" required onChange={(e) => { setEmail(e.target.value) }} className="form-input" />
                    <input type="password" name="password" placeholder="Password" required onChange={(e) => { setPassword(e.target.value) }} className="form-input" />
                    <button type="submit" className='btn-login' onClick={submit} >Signup</button>
                </form>
            </div>
        </motion.main>
    );
};

export default Signup;