export default function RegisterForm({ onSuccessfulRegistration }) {
  return (
    <main className="pl-10 pr-10">
      <div className="font-customTxt">
        <h1 className="font-customTxt text-pink-color text-4xl text-center mt-10">
          Connexion
        </h1>
        <form className="flex flex-col justify-center items-center p-8 gap-8">
          <div className="shadow-myBox rounded-lg p-10 flex flex-col gap-8 items-center">
            <div className="flex flex-col">
              <label htmlFor="Email">Email : </label>
              <input
                className=" bg-transparent font-customTxt text-pink-color border-b-2 w-64"
                type="email"
                id="Email"
                name="email"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Password">Mot de passe : </label>
              <input
                className=" bg-transparent font-customTxt text-pink-color border-b-2 w-64"
                type="password"
                id="Password"
                name="password"
              />
            </div>
            <input
              className="shadow-myBox transition-all text-2xl w-fit pr-5 pl-5 pt-2 pb-2 rounded-lg hover:scale-105 active:shadow-none active:translate-x-2 active:translate-y-3 active:text-black active:bg-pink-color"
              type="submit"
              value="Connexion"
            />
          </div>
        </form>
      </div>
    </main>
  );
}
