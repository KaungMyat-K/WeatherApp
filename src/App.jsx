import './App.css'
import Search from './components/search/search'
import Currentweather from './components/currentweather/currentweather'

function App() {

  const handleOnSearch = (searchData)=>{
    
  }

  return (
    <div className='container'>
    <Search onSearchChange={handleOnSearch}/>
    <Currentweather/>
    </div>
  )
}

export default App
