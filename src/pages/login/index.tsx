import Button from "../../components/ui/button";
import Card from "../../components/ui/card";
import Input from "../../components/ui/input";
import Typography from "../../components/ui/typography";

const Login = () => {
  return (
    <Card className="bg-white w-[500px] justify-between items-center flex flex-col gap-5">
      <Typography>Login page :</Typography>
      <Input placeholder="username" type="account" />
      <Input placeholder="password" type="password" />
      <Button className="w-[250px]">Login</Button>
    </Card>
  );
};

export default Login;
