import {NextPage} from "next";
import Image from "next/image";
import logo from '@image/SP_logo.svg'


const Dashboard = () => {

  return(
    <main>
      <Image src={logo} alt=""/>
    </main>
  )
}

export default Dashboard;