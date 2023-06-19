import './App.css'
import NavBar from './components/navbar/navbar'
import Banner from './components/banner/Banner'
import Rowpost from './components/rowpost/Rowpost'
import {originals, action, comedy} from './urls'

function App() {

  return (
    <>
      <div className='App'>
        <NavBar/>
        <Banner/>
        <Rowpost url={originals} title='Netflix Originals'/>
        <Rowpost url={action} title='Action' isSmall/>
        <Rowpost url={comedy} title='Comedy' isSmall/>
      </div>
    </>
  )
}

export default App
