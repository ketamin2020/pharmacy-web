import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Suspense } from 'react'
import { publicRoutes, privateRoutes, adminRoutes } from 'routes/routes'
import { Router } from 'routes/Router'
import { persistor, store } from 'redux/store'
import { ModalProvider } from '../providers/ModalProvider/ModalProvider'
import ErrorBoundary from 'utils/ErrorBoundary/ErrorBoundary'
import AuthLayout from 'layouts/AuthLayout'
import SEOProvider from 'providers/SEOProvider/SEOProvider'
import { ToastContainer } from 'react-toastify'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Navigate } from 'react-router-dom'
import '../styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const admin = false
  const auth = true

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <SEOProvider>
        <Provider store={store}>
          <AuthLayout>
            <PersistGate persistor={persistor}>
              <BrowserRouter>
                <ModalProvider>
                  <Suspense fallback={null}>
                    <ErrorBoundary>
                      <Router />
                      <ToastContainer hideProgressBar={true} theme='dark' />
                    </ErrorBoundary>
                  </Suspense>
                </ModalProvider>
              </BrowserRouter>
            </PersistGate>
          </AuthLayout>
        </Provider>
      </SEOProvider>
    </LocalizationProvider>
  )
}

export default App
