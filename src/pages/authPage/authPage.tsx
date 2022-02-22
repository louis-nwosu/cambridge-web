import { FC, useState } from "react";

import { SignIn } from "./signIn";
import { SignUp } from "./signUp";

export const AuthPage: FC = () => {
  const [signInAcc, setSignIn] = useState<boolean>(true);
  const handleSwitch = () => setSignIn(!signInAcc);
  return (
    <div>
      {signInAcc ? (
        <SignIn switchComp={handleSwitch} />
      ) : (
        <SignUp switchComp={handleSwitch} />
      )}
    </div>
  );
};

export { AuthPage as default };
