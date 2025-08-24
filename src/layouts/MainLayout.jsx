import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function MainLayout({ children }) {
    return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
    );
}