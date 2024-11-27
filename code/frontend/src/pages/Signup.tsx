import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import { MdWavingHand } from "react-icons/md";
import { Password } from "@/components/Password";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useMutation, gql } from '@apollo/client';


import { useToast } from "@/hooks/use-toast";

import { Link } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      email
      password
    }
  }
`;

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const uppercase = /[A-Z]/;
  const lowercase = /[a-z]/;
  const number = /[0-9]/;
  const special = /[!@#$%^&*]/;
  const minLength = 8;
  const hasUppercase = uppercase.test(password);
  const hasLowercase = lowercase.test(password);
  const hasNumber = number.test(password);
  const hasSpecial = special.test(password);
  const hasMinLength = password.length >= minLength;
  const hasMatch = password === confirmPassword;
  const { toast } = useToast();

  const checkPassword = () => {
    return (
      hasUppercase && hasLowercase && hasNumber && hasSpecial && hasMinLength
    );
  };

  const checkConfirmPassword = () => {
    return hasMatch;
  };


  const finallyC = () => {
    toast({
      title: "Successfully",
      description: "You will be redirected to the login page in 3s",
    });

    setTimeout(() => {
      toast({
        title: "Successfully",
        description: "You will be redirected to the login page in 2s",
      });
    }, 1000);

    setTimeout(() => {
      toast({
        title: "Successfully",
        description: "You will be redirected to the login page in 1s",
      });
    }, 2000);

    setTimeout(() => {
      // window.location.href = "/login";
    }, 3000);
  };

 



  const [createUser] = useMutation(CREATE_USER);
  

  const handleSignup =   () => {
    const newUser = { email: email, password: password };
    createUser({
      variables: { input: newUser },
    })
  };



  // test

  return (
    <div>
      <div className="w-full h-[60px] flex flex-row  ">
        <div className="font-roboto drop-shadow-logo text-[#3e38f5] font-black italic text-[32px] pl-8 pr-[6px] h-full flex flex-row items-center justify-center">
          BLV
        </div>
        <div className="font-roboto text-[#3e38f5] font-semibold italic text-[18px] h-full flex items-center leading-[32px]">
          education
        </div>
      </div>
      <div className="container text-text mx-auto flex flex-row justify-center">
        <div className="w-[40%] text-left p-4 flex flex-col">
          <div className="text-2xl font-semibold  flex flex-row ">
            <div className="mr-4">Welcome!</div>
            <MdWavingHand color="#f8c83f" />
          </div>

          <div className="mt-4">Please signup to continue...</div>



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
          <div className="mt-4">
            <Label htmlFor="email" className="text-left border-l-2 pl-4">
              Confirm Password
            </Label>
            <Password
              password={confirmPassword}
              setPassword={setConfirmPassword}
            />
          </div>
          {/* Checking */}
          <div className="mt-4 w-full">
            <div className="flex flex-col text-left w-full gap-2">
              <div className="flex items-center">
                {hasUppercase ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>At least one uppercase letter</span>
              </div>
              <div className="flex items-center">
                {hasLowercase ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>At least one lowercase letter</span>
              </div>
              <div className="flex items-center">
                {hasNumber ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>At least one number</span>
              </div>
              <div className="flex items-center">
                {hasSpecial ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>At least one special character</span>
              </div>
              <div className="flex items-center">
                {hasMinLength ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>Minimum of 8 characters</span>
              </div>
              <div className="flex items-center">
                {hasMatch ? (
                  <span className="text-green-500">✅</span>
                ) : (
                  <span className="text-red-500">❌</span>
                )}
                <span>Passwords match</span>
              </div>
            </div>
          </div>

          {!checkPassword() && (
            <AlertMessage
              title="Password does not meet the requirements"
              description="Please check the requirements and try again"
            />
          )}

          {!checkConfirmPassword() && (
            <AlertMessage
              title="Passwords do not match"
              description="Please check the passwords and try again"
            />
          )}


          {error && <AlertMessage title="Error" description={error} />}

          {/* Button */}
          <div>
            <button
              className="bg-[#3e38f5] text-white w-full mt-4 py-2 rounded-md cursor-pointer"
              onClick={handleSignup}
              // disabled={!checkPassword() || !checkConfirmPassword() || loading}
            >
              {loading ? "Loading..." : "Sign up"}
            </button>
          </div>

          <div className="mt-4">
            <Link to="/login" className="  ">
              Already have an account?
              <span className="text-[#3e38f5] font-semibold"> Login here</span>
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

export default Signup;
