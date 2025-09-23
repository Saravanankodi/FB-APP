import React, { useState } from "react";
import { auth } from "../../firebase_config";  
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function Login() {
   const [number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
        size: "invisible",
        callback: () => {
          console.log("Recaptcha verified");
        },
      });
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setupRecaptcha();
    try {
      const appVerifier = window.recaptchaVerifier;
      const formattedNumber = "+91" + number; 
      const confirmation = await signInWithPhoneNumber(auth, formattedNumber, appVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!confirmationResult) return alert("Send OTP first");
    try {
      const result = await confirmationResult.confirm(otp);
      console.log("User:", result.user);
      alert("Login Succesfully!");
    } catch (err) {
      console.error(err);
      alert("Invalid OTP !!");
    }
  };
  return (
    <>
    <section className="w-max h-auto m-auto rounded-xl border border-black p-2.5">
        <h2 className="heading text-4xl text-center">
            Login
        </h2>
        <form action="" className="w-full h-fit m-auto p-2.5">
            <main className="w-full h-[70px] flex items-center justify-center gap-3">
                <input type="number" name="number" id="num"  value={number}
              onChange={(e) => setNumber(e.target.value)}
                className='input h-[40px] block mx-auto border-[#0496ff] text-xl ' placeholder='Enter Your Number' />
                <button  onClick={handleSendOtp}  type="button" className="btn-primary text-white bg-[#0496ff] rounded-lg">Send OTP</button>
            </main>
            <input type="number" name="number" id="num"  value={otp}
            onChange={(e) => setOtp(e.target.value)} className='input w-full h-[40px] block mx-auto border-[#0496ff] text-xl my-2 ' placeholder='Enter Your OTP' />
            <button  onClick={handleVerifyOtp}
            type="button" className="btn-primary text-white bg-[#0496ff] rounded-lg block m-auto">Login</button>
        </form>
        <div id="recaptcha-container"></div>
    </section>
    </>
  )
}

export default Login