import React from 'react'
import { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';
import { Link } from 'react-router';

export default function RegisterForm() {
    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        password:""
    });

    const useRegisterMutation = useRegister();
  
    const handleRegister = (e) => {
      e.preventDefault();
      useRegisterMutation.mutate(newUser);
    };
  
    return (
    <>
      <form  onSubmit={handleRegister}>
         <label>
          Name:
          <input
            type="text"
            placeholder="Joe Doe"
            value={newUser.name}
            onChange={(e) =>
              setNewUser((prevState) => ({ ...prevState, name: e.target.value }))
            }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            placeholder="john@example.com"
            value={newUser.email}
            onChange={(e) =>
              setNewUser((prevState) => ({ ...prevState, email: e.target.value }))
            }
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="12345678"
            value={newUser.password}
            onChange={(e) =>
              setNewUser((prevState) => ({
                ...prevState,
                password: e.target.value,
              }))
            }
          />
        </label>
        {useRegisterMutation.isError && <p >Error: {useLoginMutation.error.message}</p>}
        <hr />
        <button>Register</button>
      </form>
      <p>Already have an account ? <Link to={"/login"}> Log in</Link></p>
      </>
    );
}
