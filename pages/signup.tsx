import Head from "next/head";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { registerNewUser } from './api/user';
import Form from "@/components/shared/form";
import ErrorScreen from "@/components/shared/errorScreen";

export default function SignUp(){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [registrationSucceed, setRegistrationSucceed] = useState(true);
  const [completingForm, setCompletingForm] = useState(true);

  const handleRegistration = (data: any) => {
    setCompletingForm(false);
    setRegistrationSucceed(registerNewUser(data));
  }

  const inputs = [
    { type: 'email', placeholder: 'Email', required: true },
    { type: 'password', placeholder: 'Password', required: true },
    { type: 'text', placeholder: 'Name', required: true },
    { type: 'text', placeholder: 'Lastname', required: true },
    { type: 'number', placeholder: 'Age', required: true },
  ];

  // const Form = () => {
  //   return(
  //     <form className='mt-6 px-12 py-8 bg-slate-600/30 rounded-lg w-min' onSubmit={handleSubmit(handleRegistration)}>
  //       {inputs.map( ({ type, placeholder, required }, i) => {
  //         return(
  //           <input
  //             className='p-2 my-4 rounded-lg block'
  //             key={i}
  //             type={type}
  //             placeholder={placeholder}
  //             {...register(placeholder.toLocaleLowerCase(), { required })}
  //           />
  //         )
  //       })}
  //       {errors.email && <p>Email is required.</p>}
  //       {errors.password && <p>Password is required.</p>}
  //       {errors.name && <p>Name is required.</p>}
  //       <div className='flex justify-center'>
  //         <button className='bg-sky-300/20 p-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white' type="submit">Register</button>
  //       </div>
  //     </form>
  //   )
  // }

  // const ErrorScreen = () => {
  //   return(
  //     <h1>It seems that the email is already registered.</h1>
  //   )
  // }

  const SuccessScreen = () => {
    return(
      <h1>
        Congratulations! your email was successfully registered! <br />
        you can now login to the application.
      </h1>
    )
  }

  return(
    <>
      <Head>
        <title>Sign up!</title>
        <meta name='description' content="Do Something Sign Up" />
      </Head>
      <div className='container mx-auto mt-4'>
        {completingForm && (
          <h1 className='text-center text-2xl'>
          Welcome to Do Something! <br />
          Please complete your information to sign up
        </h1>)
        }
        <div className='flex justify-center'>
          {completingForm && <Form inputs={inputs} onSubmit={handleRegistration} />}
          {!completingForm && !registrationSucceed && <ErrorScreen text="It seems that the email is already registered." onClick={() => setCompletingForm(true)} />}
          {!completingForm && registrationSucceed && <SuccessScreen />}
        </div>
      </div>
    </>
  )
}