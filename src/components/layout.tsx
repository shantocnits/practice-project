import Navbar from "@/components/navbar.tsx";
import {Outlet} from "react-router-dom";
import Footer from "@/components/footer.tsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;