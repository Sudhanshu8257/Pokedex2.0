import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
  SearchPage,
  HomePage,
  ContactPage,
  FavoritesPage,
  AccountPage,
  SignInPage,
  SignUpPage,
  PageNotFound,
  TriviaPage,
  VerificationPage,
  AuthLayout,
} from "./pages";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Quiz from "./components/Quiz/Quiz";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "trivia", element: <TriviaPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "favorites", element: <FavoritesPage /> },
      { path: "account", element: <AccountPage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <PageNotFound />,
    children: [
      { path: "signin", element: <SignInPage /> },
      { path: "signup", element: <SignUpPage /> },
      { path: "verification", element: <VerificationPage /> },
    ],
  },
  { path: "/pokemonTrivia", element: <Quiz />, errorElement: <PageNotFound /> },
]);

function App() {
  return (
    <>
      <div className="toastContainer">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="colored"
        />
      </div>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
