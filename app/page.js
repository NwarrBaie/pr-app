"use client";

import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!showRegisterForm) {
      setShowRegisterForm(!showRegisterForm);
      setShowLoginForm(false);
    } else {
      setShowRegisterForm(!showRegisterForm);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!showLoginForm) {
      setShowLoginForm(!showLoginForm);
      setShowRegisterForm(false);
    } else {
      setShowLoginForm(!showLoginForm);
    }
  };

  if (!isConnected) {
    return (
      <main>
        <header className="w-full">
          <div className=" pl-10 pr-10 pt-5 flex flex-row justify-between items-center">
            <div>
              <h1 className="font-customTxt text-4xl uppercase">
                PR <span>|</span> App
              </h1>
            </div>
            <div className="flex flex-row gap-4">
              <button
                onClick={handleLogin}
                className="shadow-myBox transition-all font-customTxt text-xl rounded-3xl pr-5 pl-5 pt-2 pb-2 hover:scale-105 active:shadow-none active:translate-x-2 active:translate-y-3 active:bg-pink-color active:text-black"
              >
                Connexion
              </button>
              <button
                onClick={handleRegister}
                className="shadow-myBox transition-all font-customTxt text-xl rounded-3xl pr-5 pl-5 pt-2 pb-2 hover:scale-105 active:shadow-none active:translate-x-2 active:translate-y-3 active:bg-pink-color active:text-black"
              >
                Inscription
              </button>
            </div>
          </div>
        </header>
        <div>
          {showRegisterForm && (
            <RegisterForm
              onSuccessfulRegistration={() => {
                setShowLoginForm(true);
                setShowRegisterForm(false);
              }}
            />
          )}
          {showLoginForm && (
            <LoginForm
              onSuccessfulConnexion={() => {
                setShowLoginForm(false);
                setShowRegisterForm(false);
                setIsConnected(true);
              }}
            />
          )}
        </div>
        
      </main>
    );
  }
  if (isConnected) {
    return <main>Home</main>;
  }
}
