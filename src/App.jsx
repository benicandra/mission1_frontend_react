import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import NoFooterLayout from './layouts/NoFooterLayout';
import BlankLayout from './layouts/BlankLayout';

import Login from "./pages/Login";
import Register from "./pages/Register";
import Beranda from "./pages/Beranda";
import SemuaProduk from "./pages/SemuaProduk";
import DetailProduk from "./pages/DetailProduk";
import Metode from "./pages/Metode";
import Bayar from "./pages/Bayar";
import UbahMetode from "./pages/UbahMetode";
import Selesai from "./pages/Selesai";
import Pesanan from "./pages/Pesanan";
import Kelas from "./pages/Kelas";
import Profil from "./pages/Profil";
import Video from "./pages/Video";
import Aturan from "./pages/Aturan";
import SoalAwal from "./pages/SoalAwal";
import SoalSelesai from "./pages/SoalSelesai";
import Congrats from "./pages/Congrats";
import TryAgain from "./pages/TryAgain";
import Review from "./pages/Review";
import Rangkuman from "./pages/Rangkuman";
import SelesaiAkhir from "./pages/SelesaiAkhir";
import Sertifikat from "./pages/Sertifikat";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Beranda />
            </MainLayout>
          }
        />
        <Route
          path="/semuaproduk"
          element={
            <MainLayout>
              <SemuaProduk />
            </MainLayout>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <MainLayout>
              <DetailProduk />
            </MainLayout>
          }
        />
        <Route
          path="/pesanan"
          element={
            <MainLayout>
              <Pesanan />
            </MainLayout>
          }
        />
        <Route
          path="/kelas"
          element={
            <MainLayout>
              <Kelas />
            </MainLayout>
          }
        />
        <Route
          path="/profil"
          element={
            <MainLayout>
              <Profil />
            </MainLayout>
          }
        />
        <Route
          path="/sertifikat"
          element={
            <MainLayout>
              <Sertifikat />
            </MainLayout>
          }
        />



        <Route
          path="/login"
          element={
            <NoFooterLayout>
              <Login />
            </NoFooterLayout>
          }
        />
        <Route
          path="/register"
          element={
            <NoFooterLayout>
              <Register />
            </NoFooterLayout>
          }
        />
        <Route
          path="/metode"
          element={
            <NoFooterLayout>
              <Metode />
            </NoFooterLayout>
          }
        />
        <Route
          path="/bayar"
          element={
            <NoFooterLayout>
              <Bayar />
            </NoFooterLayout>
          }
        />
        <Route
          path="/ubahmetode"
          element={
            <NoFooterLayout>
              <UbahMetode />
            </NoFooterLayout>
          }
        />
        <Route
          path="/selesai"
          element={
            <NoFooterLayout>
              <Selesai />
            </NoFooterLayout>
          }
        />



        <Route
          path="/video"
          element={
            <BlankLayout>
              <Video />
            </BlankLayout>
          }
        />
        <Route
          path="/aturan"
          element={
            <BlankLayout>
              <Aturan />
            </BlankLayout>
          }
        />
        <Route
          path="/soalawal"
          element={
            <BlankLayout>
              <SoalAwal />
            </BlankLayout>
          }
        />
        <Route
          path="/soalselesai"
          element={
            <BlankLayout>
              <SoalSelesai />
            </BlankLayout>
          }
        />
        <Route
          path="/congrats"
          element={
            <BlankLayout>
              <Congrats />
            </BlankLayout>
          }
        />
        <Route
          path="/tryagain"
          element={
            <BlankLayout>
              <TryAgain />
            </BlankLayout>
          }
        />
        <Route
          path="/review"
          element={
            <BlankLayout>
              <Review />
            </BlankLayout>
          }
        />
        <Route
          path="/rangkuman"
          element={
            <BlankLayout>
              <Rangkuman />
            </BlankLayout>
          }
        />
        <Route
          path="/selesaakhir"
          element={
            <BlankLayout>
              <SelesaiAkhir />
            </BlankLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
