import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";
import Test from "./pages/Test";
import Myself from "./pages/Myself";
import NotFound from "./pages/NotFound";
import './App.css';

export default function App() {
    return (
        <Routes>
             <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about">
                    <Route index element={<About />} />
                    <Route path=":id" element={<Test />} />
                    <Route path="saeid" element={<Myself />} />
                </Route>
                <Route path="*" element={<NotFound />} />
             </Route>
        </Routes>
    );
}


