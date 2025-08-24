import FilterAccordion from '../components/Accordion/FilterAccordion';
import CourseCard from "../components/CardCourse";


const SemuaProduk = () => {

  const courses = [
  {
    image: "/src/assets/card-1.jpg",
    instructorImage: "/src/assets/auth-1.png",
  },
  {
    image: "/src/assets/card-2.jpg",
    instructorImage: "/src/assets/auth-2.png",
  },
  {
    image: "/src/assets/card-4.jpg",
    instructorImage: "/src/assets/auth-4.png",
  },
  {
    image: "/src/assets/card-5.jpg",
    instructorImage: "/src/assets/auth-5.png",
  },
  {
    image: "/src/assets/card-7.jpg",
    instructorImage: "/src/assets/auth-7.png",
  },
  {
    image: "/src/assets/card-8.jpg",
    instructorImage: "/src/assets/auth-8.png",
  },
];

  return (
    <div className="px-4 py-8 mt-24 sm:px-6 lg:px-[120px] min-h-screen">

      <div className="container mx-auto py-8">
        <div className="flex flex-col mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Koleksi Video Pembelajaran Unggulan</h1>
          <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
        </div>

        <div className="flex flex-col md:flex-row gap-[42px]">
          <div className="w-[366px] space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4 border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-700">Filter</h2>
                <button className="text-sm text-orange-500 hover:text-orange-600 transition">Reset</button>
              </div>


              <div className="max-w-sm mx-auto bg-white rounded-lg shadow-sm">
                <FilterAccordion />
              </div>

            </div>
          </div>

          <div className="flex-1 space-y-6">
            {/* Sort & Search */}
            <div className="flex flex-col sm:flex-row gap-4 justify-end items-start sm:items-center">
              <div className="relative w-full sm:w-40">
                <label htmlFor="urutkan" className="block text-sm font-medium text-gray-700 mb-1"></label>
                <div className="relative">
                  <select
                    id="urutkan"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option>Harga Rendah</option>
                    <option>Harga Tinggi</option>
                    <option>A to Z</option>
                    <option>Z to A</option>
                    <option>Rating Tertinggi</option>
                    <option>Rating Terendah</option>
                  </select>
                  <img src="/src/assets/ArrowDown.png" alt="" className='absolute right-6 top-5'/>
                </div>
              </div>

              <div className="relative w-full sm:w-60">
                <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1"></label>
                <div className="relative">
                  <input
                    type="search"
                    id="search"
                    placeholder="Cari kelas..."
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                  <img src="/src/assets/Search.png" alt="" className='absolute left-3 top-3.5 w-4 h-4'/>

                </div>
              </div>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {courses.map((course) => (
                <CourseCard 
                  image={course.image}
                  instructorImage={course.instructorImage}
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-end gap-2 mt-8">
              <button className="p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="px-3 py-2 bg-orange-500 text-white rounded-md">1</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100">2</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100">3</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100">4</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100">5</button>
              <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100">6</button>
              <button className="p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemuaProduk;