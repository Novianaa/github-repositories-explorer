import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from './redux/store'
import MainNavigation from "./MainNavigation";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    import('bootstrap')
  }, [])
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null} >
          <MainNavigation />
        </PersistGate>
      </Provider>
    </>
  )
}
export default App;