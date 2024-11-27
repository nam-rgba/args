import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { Password } from "@/components/Password";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";

import useUserStore from "@/store";

import { useToast } from "@/hooks/use-toast";

import axios from "axios";
import { Toaster } from "@/components/ui/toaster";
import { BaseInforU } from "@/interface/User";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { toast } = useToast();

  const navigate = useNavigate();

  const finallyC = () => {
    toast({
      title: "Successfully",
      description: "You will be redirected to the home page in 3s",
    });

    setTimeout(() => {
      toast({
        title: "Successfully",
        description: "You will be redirected to the home page in 2s",
      });
    }, 1000);

    setTimeout(() => {
      toast({
        title: "Successfully",
        description: "You will be redirected to the home page in 1s",
      });
    }, 2000);

    setTimeout(() => {
      navigate("/");
    }, 3000);

    setLoading(false);
  };

  const handleLogin = () => {
    setLoading(true);

    axios
      .post("http://localhost:3010/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const user: BaseInforU = {
          id: response.data.user_id,
          email: response.data.user_mail,
        };
        const access_token = response.data.token;
        useUserStore.getState().setAuth(user, access_token);
      })
      
      .then(() => {
        finallyC();
      })
      .catch((error) => {
        const message = error.status === 400 ? "Invalid email or password" : "Something went wrong";
        setError( message);
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <div className="w-full h-[60px] flex flex-row  ">
        <div className="font-roboto drop-shadow-logo text-[#3e38f5] font-black italic text-[32px] pl-8 pr-[6px] h-full flex flex-row items-center justify-center">
          IN
        </div>
        <div className="font-roboto text-[#3e38f5] font-semibold italic text-[18px] h-full flex items-center leading-[32px]">
          source
        </div>
      </div>
      <div className="container text-text mx-auto flex flex-row justify-center">
        <div className="w-[40%] text-left p-4 flex flex-col">
          <div className="text-2xl font-semibold  flex flex-row ">
            <div className="mr-4">Welcome back!</div>
            <MdWavingHand color="#f8c83f" />
          </div>

          <div className="mt-4">Please login to continue...</div>

          <div className="mt-4">
            <Label htmlFor="email" className="text-left border-l-2 pl-4">
              Email
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none mt-4"
              placeholder="example@mail.com"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="email" className="text-left border-l-2 pl-4">
              Password
            </Label>
            <Password password={password} setPassword={setPassword} />
          </div>

          {(error != "") && <AlertMessage title="Error" description={error} />}


          {/* Keep me stay in */}
          <div className="flex items-center space-x-2 mt-4">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Keep me stay in
            </label>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button
              className="bg-[#3e38f5] text-white w-full mt-4 py-2 rounded-md cursor-pointer"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Loading..." : "Login"}
            </button>
          </div>

          {/* Register link */}
          <div className="mt-4">
            <Link to="/signup" className="  ">
              Don't have an account?
              <span className="text-[#3e38f5] font-semibold"> Register</span>
            </Link>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

const AlertMessage = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Alert className="mt-2" variant={"destructive"}>
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export default Login;
