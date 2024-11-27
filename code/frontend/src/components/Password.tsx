import React from 'react'
import { Input } from './ui/input';
import { PiEyeLight, PiEyeSlashLight } from 'react-icons/pi';

type PasswordProps = {
    password: string;
    setPassword: (password: string) => void;
}

export const Password = ({password, setPassword}:PasswordProps) => {
    const [type, setType] = React.useState("password");
    const [icon, setIcon] = React.useState(false);
  return (
    <div className="w-full flex flex-row mt-4">
    <Input id="password" value={password} className="w-full outline-none" placeholder="******" type={type}
        onChange={(e) => setPassword(e.target.value) }
    />
    <div className="flex items-center ">
        <button onClick={() => {
            setType(type === "password" ? "text" : "password");
            setIcon(!icon);
        }}
        className="outline-none h-full flex items-center justify-center ml-2"

        >
            {icon ? < PiEyeLight size={20} /> : <PiEyeSlashLight size={20} />}
        </button>
    </div>
</div>
  )
}
