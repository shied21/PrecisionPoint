import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Suspense, lazy } from "react";
import WaterproofingService from "./pages/WaterproofingService";
import FloorCoating from "./pages/FloorCoating";
import Painting from "./pages/Painting";
import Services from "./components/sections/Services";
import PipeImage from "@/assets/images/pipe1.png";

// Lazy load pages for better performance
const Home = lazy(() => import("@/pages/Home"));
const ProjectsPage = lazy(() => import("@/pages/ProjectsPage/ProjectsPage"));
const PartnersPage = lazy(() => import("@/pages/PartnersPage/PartnersPage"));
const NitoT1 = lazy(() => import("@/pages/ProjectsPage/NitoTower1"));
const NotFound = lazy(() => import("@/pages/not-found"));
const Ebloc5 = lazy(() => import("@/pages/ProjectsPage/Ebloc5"));
const Ebloc6 = lazy(() => import("@/pages/ProjectsPage/Ebloc6"));
const MallCebu = lazy(() => import("@/pages/ProjectsPage/MallCebu"));
const SedaHotel = lazy(() => import("@/pages/ProjectsPage/SedaHotel"));
const LaNuevaSuperMarket = lazy(() => import("@/pages/ProjectsPage/LaNuevaSuperMarket"));
const Roadstar = lazy(() => import("@/pages/ProjectsPage/Roadstar"));
const SkyRise4B = lazy(() => import("@/pages/ProjectsPage/SkyRise4B"));
const SeveroHospital = lazy(() => import("@/pages/ProjectsPage/SeveroHospital"));
const MetroCebuWaterDistrict = lazy(() => import("@/pages/ProjectsPage/MetroCebuWaterDistrict"));
const SolineaT1 = lazy(() => import("@/pages/ProjectsPage/SolineaT1"));
const QtechHome = lazy(() => import("@/pages/QtechPage/QtechHome"));
const ImperialPlace = lazy(() => import("@/pages/ProjectsPage/ImperialPlace"));
const AbrizaTowers = lazy(() => import("@/pages/ProjectsPage/AbrizaTower1"));
const CapitolCentral = lazy(() => import("@/pages/ProjectsPage/CapitolCenter"));
const CebuDoctorsHospital = lazy(() => import("@/pages/ProjectsPage/CebuDoctorsUniversity"));
const OrionBuilding = lazy(() => import("@/pages/ProjectsPage/Orion"));
const HopInnHotel = lazy(() => import("@/pages/ProjectsPage/HopInnHoliday"));
const Ebloc4 = lazy(() => import("@/pages/ProjectsPage/Ebloc4"));
const Ebloc3 = lazy(() => import("@/pages/ProjectsPage/Ebloc3"));
const Ebloc2 = lazy(() => import("@/pages/ProjectsPage/Ebloc2"));
const DavaoAbreeza = lazy(() => import("@/pages/ProjectsPage/DavaoAbreeza"));
const Monterrazas = lazy(() => import("@/pages/OngoingProject/MonterrazasDeCebu"));
const AeonBlue = lazy(() => import("@/pages/OngoingProject/AeonblueTower"));
const AmaiaSteps = lazy(() => import("@/pages/OngoingProject/AmaiaStepsTwoCapitol"));
const AbacaResort = lazy(() => import("@/pages/OngoingProject/AbacaResortMactan"));
const MandaniBayT2 = lazy(() => import("@/pages/OngoingProject/MandaniBayT2"));
const MandaniBayT123 = lazy(() => import("@/pages/OngoingProject/MandaniBayT123"));
const AvidaAbreeza = lazy(() => import("@/pages/OngoingProject/AvidaAbreezaTowers"));
const McDonaldsAyala = lazy(() => import("@/pages/OngoingProject/McDonaldsAyala"));
const ParkpointResidences = lazy(() => import("@/pages/OngoingProject/ParkpointResidences"));
const SolineaTowers = lazy(() => import("@/pages/OngoingProject/SolineaTowersCebu"));
const Threetechno = lazy(() => import("@/pages/OngoingProject/ThreeTechnoPlace"));
const Twotechno = lazy(() => import("@/pages/OngoingProject/TwoTechnoPlace"));
const SaversDepot = lazy(() => import("@/pages/OngoingProject/SaversDepot"));
// Loading component
/*const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-pulse text-primary font-semibold">Loading...</div>
  </div>
);*/

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
    <div className="relative w-40 h-40">
      {/* Pipe Frame SVG */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Dashed Circle (Pipe Frame) */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#377F8E"
          strokeWidth="6"
          strokeDasharray="10 3"
          className="animate-spin-slow origin-center"
        />

        {/* Pipe Connectors */}
        <line x1="50" y1="5" x2="50" y2="20" stroke="#377F8E" strokeWidth="6" strokeLinecap="round" />
        <line x1="5" y1="50" x2="20" y2="50" stroke="#377F8E" strokeWidth="6" strokeLinecap="round" />
        <line x1="50" y1="95" x2="50" y2="80" stroke="#377F8E" strokeWidth="6" strokeLinecap="round" />
        <line x1="95" y1="50" x2="80" y2="50" stroke="#377F8E" strokeWidth="6" strokeLinecap="round" />
      </svg>

      {/* Inner Rotating Pipe */}
      <svg
        className="absolute inset-0 w-full h-full animate-spin-medium origin-center"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stylized pipe/segment 
        <path
          d="M35 50 A15 15 0 0 1 65 50"
          stroke="#4DBFDB"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />*/}
      </svg>

      {/* Flowing Water Animation*/} 
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#4DBFDB] to animate-pulse opacity-5" />
      </div>
      {/* Spinning Pipe Image at the Center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={PipeImage}
          alt="Pipe Icon"
          className="w-10 h-10 animate-spin-medium animate-pulse"
        />
      </div>
    </div>

    {/* Loading Text */}
    <div className="mt-8 text-center">
      <h2 className="text-xl font-semibold text-[#377F8E] font-poppins animate-pulse">
        Loading
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Preparing your experience...
      </p>
    </div>
  </div>
);

function Router() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/partners" component={PartnersPage} />
        <Route path="/waterproofing">
          <WaterproofingService />
        </Route>
        <Route path="/floorcoating">
          <FloorCoating />
        </Route>
        <Route path="/painting">
          <Painting />
        </Route>
        <Route path="/qtech-home" component={QtechHome} />
        {/* Project Routes */}
        <Route path="/project/:id">
          {(params) => {
            const projectComponents: { [key: string]: React.ComponentType } = {
              "1": SolineaT1,
              "2": Ebloc5,
              "3": Ebloc6,
              "4": MallCebu,
              "5": SedaHotel,
              "6": LaNuevaSuperMarket,
              "7": Roadstar,
              "8": SkyRise4B,
              "9": SeveroHospital,
              "10": NitoT1,
              "11": MetroCebuWaterDistrict,
              "12": ImperialPlace,
              "13": AbrizaTowers,
              "14": CapitolCentral,
              "15": CebuDoctorsHospital,
              "16": OrionBuilding,
              "17": HopInnHotel,
              "18": Ebloc4,
              "19": Ebloc3,
              "20": Ebloc2,
              "21": DavaoAbreeza,
              "22": Monterrazas,
              "23": AeonBlue,
              "24": AmaiaSteps,
              "25": AbacaResort,
              "26": MandaniBayT2,
              "27": MandaniBayT123,
              "28": AvidaAbreeza,
              "29": McDonaldsAyala,
              "30": ParkpointResidences,
              "31": SolineaTowers,
              "32": Threetechno,
              "33": Twotechno,
              "34": SaversDepot
            };
            const Component = projectComponents[params.id];
            return Component ? <Component /> : <NotFound />;
          }}
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
