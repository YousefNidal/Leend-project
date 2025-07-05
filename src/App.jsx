import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import CheckoutSecure from './pages/CheckoutSecure/CheckoutSecure';
import CheckoutGift from './pages/CheckoutGift/CheckoutGift';
import Parent from './pages/Parent/Parent';
import PaymentMethods from './pages/PaymentMethods/PaymentMethods';
import Support from './pages/Support/Support';
import Dashboard from './pages/Dashboard/Dashboard'
import Main from './pages/Dashboard/Main/Main';
import Payments from './pages/Dashboard/Payments/Payments';
import Balances from './pages/Dashboard/Balances/Balances'
import NotFound from './pages/NotFound/NotFound'
import Settings from './pages/Dashboard/Settings/Settings'
import Invoices from './pages/Dashboard/Invoices/Invoices'
import Customers from './pages/Dashboard/Customers/Customers'


function App() {
  
  


  return (
    <>
   

   
      <Routes>
        <Route  element={<Parent />}>
        <Route index path='/'element={<Home />} />
        <Route path='/checkout-secure' element={<CheckoutSecure />} />
        <Route path='/checkout-giftcard' element={<CheckoutGift />} />
        <Route path='/payment-methods' element={<PaymentMethods />} />
        </Route>
        <Route path='/support' element={<Support />} />
        <Route  element={<Dashboard />} >
            <Route index path='/dashboard' element={<Main />} />
            <Route  path='/dashboard/payments' element={<Payments />} />
            <Route  path='/dashboard/balance' element={<Balances />} />
            <Route  path='/dashboard/settings' element={<Settings />} />
            <Route  path='/dashboard/invoices' element={<Invoices />} />
            <Route  path='/dashboard/customers' element={<Customers />} />
        </Route>
        <Route path="*" element={<NotFound />} />
        
        
      </Routes>






    </>
  )
}

export default App
