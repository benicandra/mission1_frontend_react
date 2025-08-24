import { useNavigate } from "react-router-dom";

import FormEmail from "../components/FormEmail";
import FormPassword from "../components/FormPassword";
import Button from "../components/button";

const Login = () => {
    const navigate = useNavigate();

    const handleDaftar = () => {
      navigate('../register');
    }
  

  return (
    <div className="flex justify-center items-center min-h-screen p-9">
      <div
        className=" bg-white rounded-lg shadow-md p-9 w-full max-w-md mx-auto sm:max-w-xl"
      >
        <div className="text-center mb-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800">Masuk ke Akun</h3>
          <p className="font-dm-sans text-sm sm:text-base text-gray-500 mt-2">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>

        <form action="" method="get" className="space-y-6">

          <FormEmail />
          <FormPassword />

          <div className="text-right">
            <a
              href="#"
              className="font-dm-sans text-sm sm:text-base text-gray-500 hover:underline focus:outline-none"
              >Lupa Password?</a
            >
          </div>
          
          <Button variant="primary" type="submit" value="masuk">Masuk</Button>

          <Button variant="thirdth" type="button" onClick={handleDaftar}>Daftar</Button>

          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-4 text-gray-500 text-base">atau</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Button variant="google">
            <img src="/googlelogo.png" alt="" />
            Masuk dengan Google
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login;
