import CourseCard from "../components/CardCourse";
import Button from "../components/button";

const Beranda = () => {

  const courses = [
  {
    image: "/card-1.jpg",
    instructorImage: "/auth-1.png",
  },
  {
    image: "/card-2.jpg",
    instructorImage: "/auth-2.png",
  },
  {
    image: "/card-3.jpg",
    instructorImage: "/auth-3.png",
  },
  {
    image: "/card-4.jpg",
    instructorImage: "/auth-4.png",
  },
  {
    image: "/card-5.jpg",
    instructorImage: "/auth-5.png"
  },
  {
    image: "/card-6.jpg",
    instructorImage: "/auth-6.png",
  },
  {
    image: "/card-7.jpg",
    instructorImage: "auth-7.png",
  },
  {
    image: "/card-8.jpg",
    instructorImage: "/auth-8.png",
  },
  {
    image: "/card-9.jpg",
    instructorImage: "/auth-9.png",
  },
];

  return (
    <div>
    <main className="px-4 py-8 mt-24 sm:px-6 lg:px-[120px] min-h-screen">
      <section className="relative mb-16 rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img
          src="/hero-image.jpg"
          alt="Hero Background"
          className="w-full min-h-[50vh] lg:h-96 object-cover"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 px-20">
            Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
            Interaktif!
          </h1>
          <p className="text-sm md:text-base mb-6 max-w-5xl">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
          <Button variant="primary" fullWidth={false} className="px-10">Temukan Video Course untuk Dipelajari!</Button>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-col mb-8">
          <h3 className="text-2xl font-bold text-gray-800">
            Koleksi Video Pembelajaran Unggulan
          </h3>
          <p className="text-gray-600 mt-2">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <nav className="flex space-x-4 mb-8">
          <button
            className="text-red-500 font-medium border-b-2 border-red-500 pb-1"
          >
            Semua Kelas
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 font-medium border-b-2 border-transparent pb-1"
          >
            Pemasaran
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 font-medium border-b-2 border-transparent pb-1"
          >
            Desain
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 font-medium border-b-2 border-transparent pb-1"
          >
            Pengembangan Diri
          </button>
          <button
            className="text-gray-600 hover:text-gray-800 font-medium border-b-2 border-transparent pb-1"
          >
            Bisnis
          </button>
        </nav>

       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard 
                image={course.image}
                instructorImage={course.instructorImage}
              />
            ))}
          </div>

        
      </section>

      <section className="relative rounded-xl overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <img
          src="/newsletter.jpg"
          alt="Newsletter Background"
          className="w-full h-80 object-cover"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6"
        >
          <p className="text-base uppercase tracking-wider">Newsletter</p>
          <h3 className="text-4xl font-bold mb-2">Mau Belajar Lebih Banyak?</h3>
          <p className="text-sm md:text-base  mb-6 max-w-md">
            Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
            spesial dari program-program terbaik hari ini.
          </p>
          <form
            action="#"
            method="POST"
            className="flex flex-col sm:flex-row gap-2 w-full max-w-lg sm:bg-white sm:p-2 sm:rounded-xl"
          >
            <input
              type="email"
              id="email-input"
              placeholder="Masukkan Emailmu"
              className="w-full sm:w-3/4 flex-1 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <Button variant="subscribe" className="w-full sm:w-1/4">Subscribe</Button>
          </form>
        </div>
      </section>
    </main>
    </div>
  )
}

export default Beranda;