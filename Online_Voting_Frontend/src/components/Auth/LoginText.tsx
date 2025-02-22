import { Button } from '../ui/button';
import { Card } from '../ui/card';

type Props = {
  swapper: () => void; // Ensure `swapper` is a function
};

export default function LoginText({ swapper }: Props) {
  return (
    <Card className="h-full text-card-foreground flex items-center flex-col justify-center  gap-3 p-3">
      <h1 className="font-medium text-4xl text-center">Welcome</h1>
      <p className="text-center">
        To keep connected with us, please log in with your personal info.
      </p>
      <Button
        className=" px-10  border-[0.1rem]"
        variant="destructive"
        onClick={swapper}
      >
        Login
      </Button>
    </Card>
  );
}
