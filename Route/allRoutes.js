import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/planning", "Planning", "/pages/planning.html"),];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zevent";