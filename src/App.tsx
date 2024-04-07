/* This code snippet is a TypeScript React application that utilizes React Router for routing. Here's a
breakdown of what the code is doing: */
import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GUC from "./pages/GUC";
import Frame1 from "./pages/Frame1";
import Frame from "./pages/Frame";

// Create a new component that includes all components
function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <GUC />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1686562235":
        title = "";
        metaDescription = "";
        break;
      case "/frame-1686561530":
        title = "";
        metaDescription =
          "Implement the UI as per the Figma design link provided, ensuring responsiveness and attention to detail Figma design link.  2. Technology Stack: Use Typescript and React for development.  3. CSS Framework: Tailwind CSS is preferred for styling.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/frame-1686562235" element={<Frame1 />} />
      <Route path="/frame-1686561530" element={<Frame />} />
    </Routes>
  );
}
export default App;