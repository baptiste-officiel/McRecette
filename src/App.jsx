import Category from "./components/Category"
import NavBar from "./components/NavBar"
import Search from "./components/Search"
import Pages from "./pages/Pages"

function App() {
  return (
    <div  className="App">
      <NavBar />
      <Search />
      <Category />
      <Pages />
    </div>
  )
}

export default App
