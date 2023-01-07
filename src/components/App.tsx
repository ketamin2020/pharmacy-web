import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Suspense } from 'react'
import { publicRoutes } from 'routes/routes'
import { persistor, store } from 'redux/store'
import AuthLayout from 'layouts/AuthLayout'
import BusketModal from './Modals/BusketModal/BusketModal'
import '../styles/index.scss'

const App = () => {
  return (
    <Provider store={store}>
      <AuthLayout>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <Suspense fallback={null}>
              <Routes>
                {publicRoutes.map(({ path, element: Page }) => (
                  <Route key={path} path={path} element={<Page />} />
                ))}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </PersistGate>
      </AuthLayout>
      <BusketModal />
    </Provider>
  )
}

export default App
