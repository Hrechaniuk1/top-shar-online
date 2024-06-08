import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Menu from "./components/Menu/Menu";
const HomePage = lazy(() => import('./pages/HomePage'))
const BalloonsPage = lazy(() => import('./pages/BallonsPage'))
const ContactsPage = lazy(() => import('./pages/ContactsPage'))

export default function App() {

  return (
    <div>
      <Menu></Menu>
      <Suspense>
        <Routes>
          <Route path='/' element={<HomePage></HomePage>}></Route>
          <Route path='/balloons' element={<BalloonsPage></BalloonsPage>}></Route>
          <Route path='/contacts' element={<ContactsPage></ContactsPage>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}