import GenreMovies from './components/Movies/GenreMovies'
import CollectionMovies from './components/Movies/CollectionMovies'
import Header from './components/Header/Header'
import'./App.scss'

const App = () => {

  return (
    <main>
      <Header/>
      <div id="Movies">
        <GenreMovies genre="27" heading ="horror"/>
        <GenreMovies genre="878" heading ="Science-Fiction"/>
        <CollectionMovies collection="3" heading="DC Comics"/>
        <GenreMovies genre="36" heading ="History"/>
      </div>
    </main>
  )
}

export default App