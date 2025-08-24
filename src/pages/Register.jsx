import { useNavigate } from "react-router-dom";

import FormEmail from "../components/FormEmail";
import FormNama from "../components/FormNama";
import FormPassword from "../components/FormPassword";
import FormNoHp from "../components/FormNoHp";
import Button from "../components/button";

const Login = () => {
  const navigate = useNavigate();

  const handleMasuk = () => {
    navigate('../login')
  }

  return (
    <div className="flex justify-center items-center min-h-screen mt-20 p-9">
      <div
        className=" bg-white rounded-lg shadow-md p-9 w-full max-w-md mx-auto sm:max-w-xl"
      >
        <div className="text-center mb-8">
          <h3 className="font-poppins text-2xl md:text-3xl font-bold text-gray-800">Pendaftaran Akun</h3>
          <p className="font-dm-sans text-sm sm:text-base text-gray-500 mt-2">
            Yuk, daftarkan akunmu sekarang juga!
          </p>
        </div>

        <form action="" method="get" className="space-y-6">

          <FormNama />
          <FormEmail />
          <FormNoHp />
          <FormPassword />
          <FormPassword label="Konfirmasi Kata Sandi" />


          <div className="text-right">
            <a
              href="#"
              className="font-dm-sans text-sm sm:text-base text-gray-500 hover:underline focus:outline-none"
              >Lupa Password?</a
            >
          </div>
          
          <Button variant="primary" type="button">Daftar</Button>

          <Button variant="thirdth" type="submit" value="masuk" onClick={handleMasuk}>Masuk</Button>


          <div className="flex items-center my-6">
            <hr className="flex-1 border-t border-gray-300" />
            <span className="px-4 text-gray-500 text-base">atau</span>
            <hr className="flex-1 border-t border-gray-300" />
          </div>

          <Button variant="google">
            <img src="/googlelogo.png" alt="" />
            Daftar dengan Google
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login;
