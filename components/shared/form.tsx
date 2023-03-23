import { useForm } from 'react-hook-form';

type InputType = {
  type: string;
  placeholder: string;
  required: boolean;
}

interface FormProps {
  inputs: InputType[];
  onSubmit(data: any): any;
}

export default function Form({ inputs, onSubmit }: FormProps){
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return(
    <form className='mt-6 px-12 py-8 bg-slate-600/30 rounded-lg w-min' onSubmit={handleSubmit(onSubmit)}>
      {inputs.map( ({ type, placeholder, required }, i) => {
        return(
          <input
            className='p-2 my-4 rounded-lg block'
            key={i}
            type={type}
            placeholder={placeholder}
            {...register(placeholder.toLocaleLowerCase(), { required })}
          />
        )
      })}
      <div className='flex justify-center'>
        <button className='bg-sky-300/20 p-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white' type="submit">Login</button>
      </div>
    </form>
  )
}