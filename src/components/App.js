import "../styling/App.css";
import ErrorPage from "./ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Article from "./Article";
import Lander from "./Lander";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Header from "./Header";
import { AppShell, Header as MantineHeader, Navbar as MantineNavbar, Footer as MantineFooter, Container } from "@mantine/core";

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
        <Container size='md'>
            <NavBar/>
            <RouterProvider router={router} />
            <Footer/>
        </Container>
    );
}

export default App;
