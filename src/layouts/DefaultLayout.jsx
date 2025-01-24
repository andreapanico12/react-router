import MainNav from "../components/MainNav"
import { Outlet } from "react-router-dom"

const DefaultLayout = () => {
  return(
    <>
     <div
      className="d-flex justify-content-center align-items-center bg-light"
    >
      <div
        className="container text-center p-5"
        style={{ backgroundColor: '#b3e5fc', borderRadius: '15px', height:'1200px' }}
      >
        <MainNav/>

        <Outlet/>

      </div>
    </div>

    </>
  )
}

export default DefaultLayout