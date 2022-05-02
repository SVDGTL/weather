import DataProvider from '../../context/context';
import Main from '../Main';
import Progressbar from '../Progressbar';
import Aside from './style';

function App() {
  return (
    <DataProvider>
      <Main />
      <Aside>
        {/* это правый блок, забери его себе из App/style.jsx и там пределай как нужно тебе стили,
        я на шару делал чисто чтобы был его размер нормально + фон этот светленький */}
        <Progressbar deg={90} />
      </Aside>
    </DataProvider>
  );
}

export default App;
