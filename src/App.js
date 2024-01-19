import { useOnceEffect } from './hooks/useOnceEffect';

const App = () => {

  useOnceEffect(() => {
    console.log('Se ejecuta hasta que se retorne true')
    return true;
  })

  return (
    <div>
      App
    </div>
  );
}

export default App;
