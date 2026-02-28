import { useState, useEffect } from 'react'
import NavBar from './components/navBar'
import { FaSearch } from "react-icons/fa";
import './App.css'
import CarCards from './components/carCards';
import axios from 'axios'
import useDebounce  from '../customHooks/useDebounce';
import Footer from './components/footer.jsx'

function App() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);
  const [cars, setCars] = useState([]);
  
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  // console.log('Debounced Search:', debouncedSearch);
  useEffect(() => {
    if (debouncedSearch) {
      getCars();
    } else {
      setCars([]);
    }
  }, [debouncedSearch]);

  async function getCars() {
    try {
      const res = await axios.post('http://localhost:3000/cars/filter', { filter: debouncedSearch });
      console.log('Cars:', res.data.cars);
      if (res.data.success) {
        setCars(res.data.data);
      } else {
        setCars([]);
      }
      
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  }

  return (
    <>
      <NavBar />
      <h1 className=' text-5xl font-bold text-center mt-15' >LETS FIND YOUR PERFECT CAR!</h1>
      <div className=" justify-center flex search-container gap-5">
        <FaSearch className="search-icon " />
        <input type="text" value={search} onChange={handleSearchChange} className="search-input" placeholder="Search for a car..." />
      </div >

      <div className=" m-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {debouncedSearch != "" && cars.length === 0 ? (<p className="absolute left-140 text-2xl font-black opacity-60">no cars found from your search . . .</p>) : cars.map((car) => (
            <div 
              key={car.id} h
              className="bg-white rounded-2xl shadow-md flex flex-col justify-between overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{car.name}</h3>
                  <span className="text-blue-600 font-semibold">{car.price}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {car.description}
                </p>
              </div>

            <button
                  className=" cursor-pointer w-full bg-gray-900 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  onClick={() => alert(`Added ${car.name} to cart!`)}
                >
                  Add to Cart
                </button>

            </div>
          ))}
        </div>
      <div className='results-container'>
        <CarCards />
      </div>

      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App