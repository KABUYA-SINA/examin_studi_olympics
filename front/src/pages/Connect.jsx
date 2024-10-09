import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import '../sass/pages/_connect.scss';

function connect() {
    return (
        <motion.main
            className='connect'
            initial={{ translateY: -50, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{
                duration: .5, delay: .2, ease: "easeInOut", translateY: {
                    type: "spring",
                    damping: 9,
                    stiffness: 50,
                    restSpeed: 0.5,
                    restDelta: 0.001
                }
            }
            }
        >
            <Link to={'/login'}>
                <button type='submit' className='btn-connect' data-testid="btn-connect">Login</button>
            </Link>
            <br />
            <br />
            <Link to={'/signup'}>
                <button type="submit" className='btn-connect' data-testid="btn-connect">Signup</button>
            </Link>
        </motion.main>
    );
};

export default connect;