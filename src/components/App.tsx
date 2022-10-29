import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Suspense } from 'react'
import { publicRoutes, privateRoutes } from 'routes/routes'
import { persistor, store } from 'redux/store'

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
