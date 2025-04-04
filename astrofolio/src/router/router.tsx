import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { HomeSection } from "../components/sections/HomeSection"
import { AboutSection } from "../components/sections/AboutSection"
import { ProjectsSection } from "../components/sections/ProjectsSection"
import { ExperienceSection } from "../components/sections/ExperienceSection"
import { ContactSection } from "../components/sections/ContactSection"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeSection /> },
      { path: "about", element: <AboutSection /> },
      { path: "projects", element: <ProjectsSection /> },
      { path: "experience", element: <ExperienceSection /> },
      { path: "contact", element: <ContactSection /> },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
