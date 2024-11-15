import { useState, useMemo } from 'react'
import CountryFilter from './components/Filters/CountryFilter'
import StarsFilter from './components/Filters/StarsFilter'
import ReviewsFilter from './components/Filters/ReviewsFilter'
import PriceFilter from './components/Filters/PriceFilter'
import TypeFilter from './components/Filters/TypeFilter'
import HotelList from './components/HotelList/HotelList'
import hotelsData from './hotels.json'
import Pagination from './components/Pagination'

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [selectedStars, setSelectedStars] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [reviews, setReviews] = useState('')
  const [priceRange, setPriceRange] = useState([0, 10000]); 
  const [filteredHotels, setFilteredHotels] = useState(hotelsData.hotels)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const countryOptions = useMemo(() => {
    const countries = hotelsData.hotels.map((hotel) => hotel.country)
    return Array.from(new Set(countries)).map((country) => ({
      value: country,
      label: country,
    }))
  }, [])

  const typeOptions = useMemo(() => {
    const types = hotelsData.hotels.map((hotel) => hotel.type)
    return Array.from(new Set(types)).map((type) => ({
      value: type,
      label: type,
    }))
  }, [])

  const currentHotels = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage
    return filteredHotels.slice(startIndex, startIndex + itemsPerPage)
  }, [filteredHotels, currentPage])

  const applyFilters = () => {
    const results = hotelsData.hotels.filter((hotel) => {
      return (
        (!selectedCountry || hotel.country === selectedCountry.value) &&
        (!selectedStars.length || selectedStars.includes(hotel.stars)) &&
        (!selectedTypes.length ||
          selectedTypes.some((type) => type.value === hotel.type)) &&
        (!reviews || hotel.reviews_amount >= parseInt(reviews)) &&
        (hotel.min_price >= priceRange[0] && hotel.min_price <= priceRange[1])
      )
    })
    setFilteredHotels(results)
  }

  const resetFilters = () => {
    setSelectedCountry(null)
    setSelectedStars([])
    setSelectedTypes([])
    setReviews('')
    setPriceRange([0, 10000]);
    setFilteredHotels(hotelsData.hotels)
  }

  return (
    <div className="container">
      <div className="filters-panel">
        <CountryFilter
          selectedCountry={selectedCountry}
          onChange={setSelectedCountry}
          countries={countryOptions}
        />
        <TypeFilter
          selectedTypes={selectedTypes}
          onChange={setSelectedTypes}
          options={typeOptions}
        />
        <StarsFilter
          selectedStars={selectedStars}
          onChange={setSelectedStars}
        />
        <ReviewsFilter reviews={reviews} onChange={setReviews} />
        <PriceFilter price={priceRange} onChange={setPriceRange} />
        <button onClick={applyFilters} className="apply-button">
          Применить фильтры
        </button>
        <button onClick={resetFilters} className="reset-button">
          Сбросить фильтры
        </button>
      </div>

      <div className="results-panel">
        <div className="results-panel">
          <HotelList hotels={currentHotels} />
          <Pagination
            currentPage={currentPage}
            total={filteredHotels.length}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default App
