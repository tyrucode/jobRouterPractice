import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction }  from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";

//layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";

//loader functions
import { careersLoader } from "./pages/careers/Careers";
import { careerDetailsLoader } from "./pages/careers/CareerDetails";

//create a variable for our create Browser Router called router
const router = createBrowserRouter(
  //creating routes from different elements
  createRoutesFromElements(
    //one parent route surrounding everything with home page '/' which links back to our Root Layout
    <Route path='/' element={<RootLayout />}>
          {/* different paths for each element, index for our home page*/}
          {/* we use index because it specifies Home as the default component to show then our website is reached */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Different Route since these are connected below */}
          <Route path="help" element={<HelpLayout />}> {/*These below are now children of the /help route meaning their url will be*/}
            <Route path="faq" element={<Faq />}/>  {/* /help/faq */}
            {/* we add the action function here same as we would a loader function elsewhere */}
            <Route path="contact" element={<Contact />} action={contactAction}/> {/* /help/contact */}
          </Route>

          {/* new careers page , inside this page we have a route to the careers which will be inside of it */}
            {/* we are saying here - if we throw an error, inside this route component,
            then take that error and show the <CareersError/> component and inject the error into that component
            so that we can access it using the useRouteError, since its in the parent itll be dynamic as well to
            whatever error is happening */}
            {/* basically, if error, stop, send error to careerErrors page, and redirect to that page */}
          <Route path="careers" element={<CareersLayout />} errorElement={<CareersError/>}>
          {/* we also use index so that whenever /careers is reached the Careers comp is shown by default */}
          {/* This makes it so whenever we visit the route /careers itll automatically run the loader */}
            <Route index element={<Careers/>} loader={careersLoader}/>
            {/* the colon signifes that the path is going to be changeable (route parameter) */}
            {/* set our loader as our loader function */}
            <Route path=":id" element={<CareerDetails />} loader={careerDetailsLoader}  />
            {/* we can also additionally put errors on the specific routes too if certain pages need to show
            certain errors */}
          </Route>

          {/* IF NOTHING ELSE WORKS/SHOWS WE USE THIS ELEMENT BELOW */}
          {/* KNOWN AS A 'catch all ROUTE */}
          <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
      // we have this router provider which we wrap everything in to make it work, and connect
      // it to our router variable above by calling router
      <RouterProvider router={router}/> 
  );
}

export default App
