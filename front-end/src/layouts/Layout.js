import NavBar from '../components/navigation/NavBar';
import Footer from '../components/navigation/Footer';

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div className='main-container'>
                { children }
            </div>
            <Footer />
        </>
    )
}