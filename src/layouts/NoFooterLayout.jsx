import Navbar from '../components/navbar';

export default function NoFooterLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}