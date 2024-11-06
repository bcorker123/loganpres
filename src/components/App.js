import "../styling/App.css";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "./Article";
import Lander from "./Lander";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Lander />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "article/:articleId",
                    element: <Article />,
                },
            ],
        },
    ]);

    return (
        <>
            <NavBar />
            <RouterProvider router={router} />
            <Footer />
        </>
    );
}

export default App;
