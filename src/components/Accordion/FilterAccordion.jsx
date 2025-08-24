import { useState } from 'react';
import { IoChevronUp, IoChevronDown } from 'react-icons/io5';


const FilterAccordion = () => {
  const [openSection, setOpenSection] = useState(null); 

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const filters = [
    {
      id: 'bidang-studi',
      title: 'Bidang Studi',
      icon: '/src/assets/Notebook.png',
      items: ['Pemasaran', 'Digital & Teknologi', 'Pengembangan Diri', 'Bisnis Manajemen'],
      type: 'checkbox'
    },
    {
      id: 'harga',
      title: 'Harga',
      icon: '/src/assets/Shopping_Bag_01.png',
      items: ['Pemasaran', 'Digital & Teknologi', 'Pengembangan Diri', 'Bisnis Manajemen'],
      type: 'checkbox'
    },
    {
      id: 'durasi',
      title: 'Durasi',
      icon: '/src/assets/Clock.png',
      items: ['Kurang dari 4 Jam', '4 - 8 Jam', 'Lebih dari 8 Jam'],
      type: 'radio'
    }
  ];

  return (
    <div className="space-y-8">
      {filters.map((filter) => (
        <div
          key={filter.id}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <div
            className="flex items-center justify-between p-3 bg-gray-50 border-b border-gray-200 cursor-pointer"
            onClick={() => toggleSection(filter.id)}
          >
            <div className="flex items-center gap-2">
              <img
                src={filter.icon}
                alt={filter.title}
                className="w-5 h-5"
              />
              <span className="text-green-600 font-medium">{filter.title}</span>
            </div>

            {openSection === filter.id ? (
                  <IoChevronUp className="text-[#3ECF4C] w-5 h-5" />
                    ) : (
                  <IoChevronDown className="text-[#3ECF4C] w-5 h-5" />
            )}
            </div>

          {openSection === filter.id && (
            <div className="p-3 space-y-2 bg-white">
              {filter.items.map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer">
                  {filter.type === 'checkbox' ? (
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-green-600 rounded border-gray-300 focus:ring-green-500"
                    />
                  ) : (
                    <input
                      type="radio"
                      name="durasi"
                      className="w-4 h-4 text-green-600 border-gray-300 focus:ring-green-500"
                    />
                  )}
                  <span className="text-gray-500 text-sm">{item}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterAccordion;