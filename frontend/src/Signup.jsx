import {useState} from 'react';
import { supabase } from './supabaseClient';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="signup-page">
            <form className="signup-form">
                <h1>Sign Up</h1>
                    <input
                        type = "email"
                        id = "email"
                        value = {email} // { means we are using javascript expression } so we are using the email state variable as the value of the input field
                        onChange = {(e) => { 
                            setEmail(e.target.value);
                        }
                    }
                    />

                    <input
                        type = "password"
                        id = "password"
                        value = {password}
                        onChange = {(e) => {
                            setPassword(e.target.value);
                        }
                    }
                    />
                    <button type ="submit">Sign Up</button> 
            </form>
        </div>
)
}

export default SignUp;