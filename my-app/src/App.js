import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import SignUp from './Component/SignUp'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from './Component/MainPage'
import SecondPage from './Component/SecondPage'
import CartList from './Component/CartList'
import CheckOut from './Component/CheckOut'


const queryClient = new QueryClient()

const App = () => {
  return (
    <>
    <QueryClientProvider client={queryClient}>
     <Routes>
      <Route exact path="/" element={<Home/>} >
      <Route index element={<SignUp/>} />
      <Route exact path="signup" element={<SignUp/>} />
      <Route exact path="login" element={<Login/>} />
      </Route>
      <Route exact path="mainpage" element={<MainPage/>} />
      <Route exact path="secondpage" element={<SecondPage/>} />
      <Route exact path="cartlist" element={<CartList/>} />
      <Route exact path="checkout" element={<CheckOut/>} />

     
     </Routes>
     <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
   </QueryClientProvider>
    </>
  )
}

export default App