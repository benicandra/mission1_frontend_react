export default function CourseCard({
  image,
  instructorImage,
}) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
    <div className="p-5 gap-4">
      <div className="relative">
        <img
          src={image}
          alt="Course Image"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      <div className="pt-4"> 
        <h6 className="text-xl font-semibold text-gray-800">Big 4 Auditor Financial Analyst</h6>
        <p className="text-sm sm:text-base text-gray-500 mt-1">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...</p>

        <div className="flex items-center mt-3">
          <img
            src={instructorImage}
            alt="Instructor"
            className="w-10 h-10 rounded-lg mr-2"
          />
          <div>
            <p className="text-sm sm:text-base font-medium">Jenna Ortega</p>
            <p className="text-sm text-gray-500">Senior Accountant di Gojek</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <img src="/starfull.png" alt="Rating" className="w-4 h-4" />
            <img src="/starfull.png" alt="Rating" className="w-4 h-4" />
            <img src="/starhalf.png" alt="Rating" className="w-4 h-4" />
            <img src="/starnone.png" alt="Rating" className="w-4 h-4" />
            <img src="/starnone.png" alt="Rating" className="w-4 h-4" />
            <span className="text-sm text-gray-600 ml-1">
             3.5 (86)
            </span>
          </div>
          <span className="text-green-600 font-semibold">Rp 300K</span>
        </div>
        </div>
    </div>
    </article>
  );
}