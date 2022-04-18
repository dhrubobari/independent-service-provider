import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import google from "../../../google-lg.png";

const SocialLogin = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="w-50 bg-secondary"></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-info d-block w-50 mx-auto my-2"
      >
        <img style={{ width: "30px" }} src={google} alt="" />
        <span className="px-2">Google Sign In</span>
      </button>
    </div>
  );
};

export default SocialLogin;
