import Button from "./button"

interface ErrorScreenProps {
  text: string;
  onClick(): void;
}

export default function ErrorScreen({ text, onClick } : ErrorScreenProps ){
  return(
    <div>
      <h1>{text}</h1>
      <div className="flex justify-center mt-4">
        <Button text="Go back" onClick={onClick} />
      </div>
    </div>
  )
}