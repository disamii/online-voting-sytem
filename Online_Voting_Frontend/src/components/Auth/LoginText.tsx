import { Button } from '../ui/button';

type Props = {
  swapper: () => void; // Ensure `swapper` is a function
};

export default function LoginText({ swapper }: Props) {
  return (
    <div className="h-full bg-secondary flex items-center flex-col justify-center text-accent-foreground gap-3 p-3">
      <h1 className="font-medium text-4xl text-center">Welcome</h1>
      <p className="text-center">
        To keep connected with us, please log in with your personal info.
      </p>
      <Button
        className="bg-secondary shadow-none border-accent-foreground border-[0.1rem] px-10"
        onClick={swapper}
      >
        Login
      </Button>
    </div>
  );
}
