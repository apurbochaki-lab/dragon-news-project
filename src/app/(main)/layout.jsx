import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    );
};

export default MainLayout;