// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../styles/layouts/Home.scss'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'

function Home() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <HomeBanner />
    </>
  )
}

export default Home

