import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

// ------------------------------------------------

import css from './App.module.css'
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import HomeHead from "./components/HomeHead/HomeHead";
import NotFound from "./components/NotFound/NotFound";
import Loading from "./components/Loading/Loading";
import UpButton from "./components/UpButton/UpButton";
const HomePage = lazy(() => import('./pages/HomePage'))
const BalloonsPage = lazy(() => import('./pages/BallonsPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))

// ------------------------------------------------

export default function App() {

  const location = useLocation()

  return (
    <div className={css.app}>
      {location.pathname === '/' ? <HomeHead></HomeHead> : <></>}
      <Menu></Menu>
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/balloons' element={<BalloonsPage></BalloonsPage>}></Route>
          <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Suspense>
      <UpButton></UpButton>
      <Footer></Footer>
    </div>
  )
}