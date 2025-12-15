import { RNNavbar } from '@/components/RNNavbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutPage from '../app/pages/AboutPage';
import AwardsPage from '../app/pages/AwardsPage';
import AlertsPage from '../app/pages/components/AlertsPage';
import BadgesPage from '../app/pages/components/BadgesPage';
import ButtonsPage from '../app/pages/components/ButtonsPage';
import CardsPage from '../app/pages/components/CardsPage';
import FormsPage from '../app/pages/components/FormsPage';
import InputsPage from '../app/pages/components/InputsPage';
import ModalsPage from '../app/pages/components/ModalsPage';
import NavigationPage from '../app/pages/components/NavigationPage';
import TablesPage from '../app/pages/components/TablesPage';
import ComponentsPage from '../app/pages/ComponentsPage';
import ContactUsPage from '../app/pages/ContactUsPage';
import EducationPage from '../app/pages/EducationPage';
import EventsPage from '../app/pages/EventsPage';
import HomePage from '../app/pages/HomePage';
import SportsPage from '../app/pages/SportsPage';
import VisionMissionPage from '../app/pages/VisionMissionPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[var(--RN-Base-5)]">
        <RNNavbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<PrintExample />} /> */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/vision" element={<VisionMissionPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/components/buttons" element={<ButtonsPage />} />
            <Route path="/components/inputs" element={<InputsPage />} />
            <Route path="/components/cards" element={<CardsPage />} />
            <Route path="/components/modals" element={<ModalsPage />} />
            <Route path="/components/forms" element={<FormsPage />} />
            <Route path="/components/alerts" element={<AlertsPage />} />
            <Route path="/components/badges" element={<BadgesPage />} />
            <Route path="/components/tables" element={<TablesPage />} />
            <Route path="/components/navigation" element={<NavigationPage />} />
          </Routes>
        </main>
        {/* <RNFooter /> */}
      </div>
    </Router>
  );
}
