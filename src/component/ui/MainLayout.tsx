import { Outlet } from "react-router-dom"
import TopNavbar from "./navbar/TopNavbar"

const MainLayout = () => {
    return (
        <>
            <div>
                <TopNavbar />
            </div>
            <main>
                <Outlet />
            </main>
        </>

    )
}

export default MainLayout