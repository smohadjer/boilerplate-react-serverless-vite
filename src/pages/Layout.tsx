import { Outlet } from "react-router";
import Nav from '../components/Nav';
import './layout.css';

export default function Layout() {
  return (
    <>
        <header>
            <Nav />
        </header>
        <main>
            <Outlet />
        </main>
        <footer>add footer here...</footer>
    </>
  )
}
