import Header from './components/Header/Header.js'

import './App.css'
import Main from './components/Main/Main.js'

function App() {
  const isLoggedIn = false
  return (
    <div>
      <Header isLoggedIn={isLoggedIn} />
      <Main></Main>
    </div>
  );
}

export default App
