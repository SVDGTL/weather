import DataProvider from '../../context/context'
import Main from '../Main'
import Progressbar from '../Progressbar'

function App() {
  return (
    <DataProvider>
      <Main />
      <Progressbar deg={90} />
    </DataProvider>
  )
}

export default App
