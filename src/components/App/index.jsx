import DataProvider from '../../context/context';
// import Main from '../Main';
import Aside from '../Aside';

function App() {
  return (
    <DataProvider>
      {/* <Main /> */}
      <Aside />
    </DataProvider>
  );
}

export default App;
