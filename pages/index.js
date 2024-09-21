import Navbar from "../Components/Navbar"
import Cont from "../Components/Cont"
import How_Works from "../Components/How_Works"
import Serviço from "../Components/Serviço"
import Footer from "../Components/Footer"


import Head from 'next/head'
export default function Home() {
  return (
    <>
      <div>
  
        <Navbar />

        <Cont />
        <How_Works />
        <Serviço />

        <Footer />

       
       
        

        <Head>
        <link rel="shortcut icon" href="./NavBar/email.png" />
        <title>Lading Page</title>
        </Head>
      </div>
      

    </>
  )
}
