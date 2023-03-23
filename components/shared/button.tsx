interface ButtonProps {
  text: string;
  onClick?(): void;
}

export default function Button({ text, onClick } : ButtonProps){
  return(
    <button
      className='bg-sky-300/20 p-4 rounded-full border-2 border-transparent hover:border-2 hover:border-white'
      onClick={onClick}>
      {text}
    </button>
  )
}