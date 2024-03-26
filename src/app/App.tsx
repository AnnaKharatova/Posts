import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PostPage } from '../pages/PostPage/PostPage.tsx';
import { MainPage } from '../pages/MainPage/MainPage.tsx';
import { Header } from '../widgets/header/UI/Header.tsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Posts" element={<MainPage />} />
        <Route path="/Posts/posts/:id" element={<PostPage />} />
      </Routes>
    </>
  );
}

export default App;
