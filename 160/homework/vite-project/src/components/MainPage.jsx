import React from 'react'

const MainPage = () => {
  return (
    <>
    <h1>you are in your account</h1>
    <button onClick={() => {
      localStorage.clear();
      window.location.reload();
    }}>log out</button>
    </>
  )
}

export default MainPage;
