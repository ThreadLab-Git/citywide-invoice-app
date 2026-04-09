import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import InvoiceBuilder from './components/InvoiceBuilder'
import Customers from './components/Customers'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/invoice/new" element={<InvoiceBuilder />} />
        <Route path="/invoice/:id" element={<InvoiceBuilder />} />
      </Routes>
    </BrowserRouter>
  )
}
