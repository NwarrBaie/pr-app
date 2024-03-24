"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterForm({ onSuccessfulRegistration }) {
  const [etsType, setEtsType] = useState("");
  const [etsName, setEtsName] = useState("");
  const [etsAcademie, setEtsAcademie] = useState("");
  const [etsAdresse, setEtsAdresse] = useState("");
  const [vsMail, setVsMail] = useState("");
  const [etsPassword, setEtsPassword] = useState("");
  const [etsPasswordCheck, setEtsPasswordCheck] = useState("");
  const [etsLicenceKey, setEtsLicenceKey] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !etsType ||
      !etsName ||
      !etsAcademie ||
      !etsAdresse ||
      !vsMail ||
      !etsPassword ||
      !etsPasswordCheck ||
      !etsLicenceKey
    ) {
      setError("Veuillez Remplir Tous Les Champs");
      toast.error(error);
      return;
    }

    if (etsPassword !== etsPasswordCheck) {
      setError("Veuillez mettre deux mots de passe identiques");
      toast.error(error);
    }
    const res = await fetch("api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        etsType,
        etsName,
        etsAcademie,
        etsAdresse,
        vsMail,
        etsPassword,
        etsLicenceKey,
      }),
    });
    if (res.ok) {
      const form = e.target;
      form.reset();
      onSuccessfulRegistration();
      toast.success("Inscription Confirmée");
    } else {
      toast.error("Erreur lors de l'Inscription");
    }
  };
  return (
    <main className="pr-10 pl-10 font-customTxt">
      <div>
        <h1 className="font-customTxt text-4xl text-pink-color text-center mt-10">
          Inscription
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center p-8 gap-8"
        >
          <div className="flex flex-row justify-center gap-8">
            <div className="shadow-myBox rounded-lg p-8 flex flex-col gap-8">
              <h2 className="text-2xl">
                Renseignements <span>Établissement</span>
              </h2>
              <div className="flex flex-col">
                <label htmlFor="TypeEts">Type d&apos;établissement :</label>
                <input
                  onChange={(e) => setEtsType(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsType"
                  id="TypeEts"
                  type="text"
                  placeholder="(College/Lycee)"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="NameEts">Nom de l&apos;établissement :</label>
                <input
                  onChange={(e) => setEtsName(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsName"
                  id="NameEts"
                  type="text"
                  placeholder="Ex. : Jules Verne"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="AcademyEts">
                  Académie de l&apos;établissement :
                </label>
                <input
                  onChange={(e) => setEtsAcademie(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsAcademie"
                  id="AcademyEts"
                  type="text"
                  placeholder="Ex. : Poitiers"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="AdressEts">
                  Adresse de l&apos;établissement :
                </label>
                <input
                  onChange={(e) => setEtsAdresse(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsAdresse"
                  id="AdressEts"
                  type="text"
                  placeholder="Ex. : 2 rue Dupont 86000 Poitiers"
                />
              </div>
            </div>
            <div className="shadow-myBox rounded-lg p-8 flex flex-col gap-8">
              <h2 className="text-2xl">
                Renseignements <span>Administration</span>
              </h2>
              <div className="flex flex-col">
                <label htmlFor="Email">Email de la Vie Scolaire :</label>
                <input
                  onChange={(e) => setVsMail(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="VsMail"
                  id="Email"
                  type="email"
                  placeholder="Ex. : vs-mail@ac-ville.fr"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="Password">Mot de passe :</label>
                <input
                  onChange={(e) => setEtsPassword(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsPassword"
                  id="Password"
                  type="password"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="PasswordCheck">Confirmer :</label>
                <input
                  onChange={(e) => setEtsPasswordCheck(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsPasswordCheck"
                  id="PasswordCheck"
                  type="password"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="LicenceKey">Clé Licence :</label>
                <input
                  onChange={(e) => setEtsLicenceKey(e.target.value)}
                  className=" bg-transparent font-customTxt text-pink-color border-b-2"
                  name="EtsLicenceKey"
                  id="LicenceKey"
                  type="password"
                  placeholder="Format : 0ZXM6 - 0ARX5 - 0V5S6"
                />
              </div>
            </div>
          </div>
          <input
            className="shadow-myBox transition-all text-2xl w-fit pr-5 pl-5 pt-2 pb-2 rounded-lg hover:scale-105 active:shadow-none active:translate-x-2 active:translate-y-3 active:text-black active:bg-pink-color"
            type="submit"
            value="Inscription"
          />
        </form>
      </div>
    </main>
  );
}
