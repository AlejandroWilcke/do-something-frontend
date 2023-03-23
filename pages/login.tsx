import Head from "next/head";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/userSlice';
import { loginUser } from "./api/user";
import Form from "@/components/shared/form";
import ErrorScreen from "@/components/shared/errorScreen";

export default function SignUp(){
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginSucceed, setLoginSucceed] = useState(true);
  const [completingForm, setCompletingForm] = useState(true);

  const handleLogin = (data: any) => {
    setCompletingForm(false);
    let user = loginUser(data.email, data.password);
    if( user ){
      dispatch(login(user));
      setLoginSucceed(true);
    }else{
      setLoginSucceed(false);
    }
  }

  const inputs = [
    { type: 'email', placeholder: 'Email', required: true },
    { type: 'password', placeholder: 'Password', required: true },
  ];

  const SuccessScreen = () => <h1>Congratulations! you are now logged in.</h1>

  return(
    <>
      <Head>
        <title>Login</title>
        <meta name='description' content="Do something login" />
      </Head>
      <div className='container mx-auto mt-4'>
        {completingForm && (
          <h1 className='flex text-center justify-center text-2xl'>
          Welcome back!
        </h1>)
        }
        <div className='flex justify-center'>
          {completingForm && <Form inputs={inputs} onSubmit={handleLogin} />}
          {!completingForm && !loginSucceed && <ErrorScreen text="Email or password are incorrect." onClick={() => setCompletingForm(true)} />}
          {!completingForm && loginSucceed && <SuccessScreen />}
        </div>
      </div>
    </>
  )
}