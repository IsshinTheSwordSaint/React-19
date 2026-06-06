import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Alert from './components/Alert.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
    <Alert type="success" />
    <Alert type="warning" />
    <Alert type="danger" />
   <Footer />
  </StrictMode>,
)
