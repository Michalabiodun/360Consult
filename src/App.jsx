import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Approach from './pages/Approach';
import ServicesPage from './pages/ServicesPage';
import Diagnostic from './pages/Diagnostic';
import Values from './pages/Values';
import MentorshipBooking from './pages/MentorshipBooking';
import RequestQuote from './pages/RequestQuote';
import EventInquiry from './pages/EventInquiry';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-soft-white text-charcoal selection:bg-gold/30 selection:text-navy">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/diagnostic" element={<Diagnostic />} />
            <Route path="/values" element={<Values />} />
            <Route path="/book/mentorship" element={<MentorshipBooking />} />
            <Route path="/request-quote" element={<RequestQuote />} />
            <Route path="/event-inquiry" element={<EventInquiry />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
