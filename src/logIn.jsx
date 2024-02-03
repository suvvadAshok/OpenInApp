import logo from "./assets/logo.svg";
import gitHub from "./assets/github.svg";
import twitter from "./assets/twitter.svg";
import linkedIn from "./assets/linkedIn.svg";
import discord from "./assets/discord.svg";
import google from "./assets/google.svg";
import apple from "./assets/apple.svg";
import { useNavigate } from "react-router-dom";

const logoImgData = [
  {
    id: 1,
    img: gitHub,
    link: "#",
  },
  {
    id: 2,
    img: twitter,
    link: "#",
  },
  {
    id: 3,
    img: linkedIn,
    link: "#",
  },
  {
    id: 4,
    img: discord,
    link: "#",
  },
];

export function Login() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen grid grid-cols-2 max-sm:grid-cols-1 overflow-y-auto">
      <div className=" max-sm:py-0 py-8 bg-[#F8FAFF] max-sm:bg-none bgblue bg-opacity-100 bg-cover bg-no-repeat flex flex-col">
        <div className="max-sm:flex max-sm:bg-[#605BFF] p-8 gap-2 items-center">
          <img
            src={logo}
            alt="logo"
            className="h-20 w-20 max-sm:h-6 max-sm:w-6"
          />
          <h2 className="hidden max-sm:block font-semibold text-xl text-[#FAFAFB]">
            BASE
          </h2>
        </div>
        <h1 className="max-sm:hidden text-6xl flex justify-center items-center font-bold text-white grow">
          BASE
        </h1>
        <div className="max-sm:hidden flex justify-center items-center gap-10">
          {logoImgData.map((logLink, id) => (
            <a href={logLink.link} key={id}>
              <img src={logLink.img} alt="hi" />
            </a>
          ))}
        </div>
      </div>

      <div className="bg-[#F8FAFF] flex justify-center items-center max-sm:px-4 py-2 max-sm:py-4">
        <div className="max-w-[422px] w-full flex flex-col gap-6 max-sm:gap-4">
          <div className="max-sm:mx-2">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <p>Sign in to your account</p>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              className="flex grow bg-white text-[#858585] py-2 text-xs items-center justify-center rounded-xl gap-4 "
            >
              <img src={google} alt="google" className="h-4 w-4" />
              <p>Sign in with Google</p>
            </a>
            <a
              href="#"
              className="flex grow bg-white text-[#858585] py-2 text-xs items-center justify-center rounded-xl gap-4"
            >
              <img src={apple} alt="apple" />
              <p>Sign in with Apple</p>
            </a>
          </div>
          <div className="bg-white p-8 rounded-xl flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="mail">Email address</label>
              <input
                type="email"
                id="mail"
                placeholder="jhondoe@gmail.com"
                className="bg-[#EAEAEA] p-2 rounded-xl"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder=""
                className="bg-[#EAEAEA] p-2 rounded-xl"
              />
            </div>
            <a href="#" className="text-[#346BD4] block">
              Forgot password?
            </a>
            <button
              onClick={() => navigate("/upload-csv")}
              className="bg-[#346BD4] rounded-lg w-full text-white py-2"
            >
              Sign In
            </button>
          </div>
          <p className="text-center">
            Don&apos;t have an account?
            <span className="text-[#346BD4] pl-1 max-sm:block">
              Register here
            </span>
          </p>
        </div>
      </div>
      <div className="sm:hidden flex justify-center items-center gap-10 max-sm:gap-4 max-sm:bg-[#F8FAFF] max-sm:py-6">
        {logoImgData.map((logLink, id) => (
          <a href={logLink.link} key={id}>
            <img src={logLink.img} alt="logo" className="bg-[#858585] max" />
          </a>
        ))}
      </div>
    </div>
  );
}
