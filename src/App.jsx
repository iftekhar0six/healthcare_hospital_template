import { ThemeProvider } from '@/context/ThemeContext';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Trust from '@/components/sections/Trust';
import Facilities from '@/components/sections/Facilities';
import Doctors from '@/components/sections/Doctors';
import Activities from '@/components/sections/Activities';
import Appointment from '@/components/sections/Appointment';
import Gallery from '@/components/sections/Gallery';
import Support from '@/components/sections/Support';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Trust />
        <Facilities />
        <Doctors />
        <Activities />
        <Appointment />
        <Gallery />
        <Support />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
