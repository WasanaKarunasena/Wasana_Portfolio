import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ProjectDetailsPage from "./components/ProjectDetails/ProjectDetails";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                {/* Home Page */}
                <Route
                    path="/"
                    element={
                        <>
                            <Intro />
                            <Skills />
                            <Works />
                            <Contact />
                            <Footer />
                        </>
                    }
                />

                {/* Project Details Page */}
                <Route path="/projects/:id" element={<ProjectDetailsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
