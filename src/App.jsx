import { useState, useEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import Mammals from '././pages/Animals/Mammals'
import Reptiles from './pages/Animals/Reptiles'
import Birds from './pages/Animals/Birds/index.jsx'
import Layout from './pages/layout/index.jsx'
import Home from './pages/Home/index.jsx'
import { useLocation } from 'react-router-dom'
import  PopUp  from './components/PopUp'


function App() {
  const [animal, setAnimal] = useState(null);
  const [showPopUp, setShowPopUp] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setAnimal(null);
    setShowPopUp(false);
  }, [location.pathname]);

  const handleAnimalClick = (selectedAnimal) => {
    setAnimal(animal && animal.name === selectedAnimal.name 
      ? null 
      : selectedAnimal
    ) 
  }

  const togglePopUp = () => {
    setShowPopUp(prev => !prev);
  };

  return (
    <Routes>
      <Route element={<Layout getPopUp={showPopUp} />}>
        <Route
          path="/"
          element={
            showPopUp ? (
              <PopUp chosenAnimal={animal} closePopUp={togglePopUp} />
            ) : (
              <Home chosenAnimal={animal} click={handleAnimalClick} getPopUp={togglePopUp} />
            )
          }
        />
        <Route
          path="/reptiles"
          element={
            showPopUp ? (
              <PopUp chosenAnimal={animal} closePopUp={togglePopUp} />
            ) : (
              <Reptiles title="Reptiles" chosenAnimal={animal} click={handleAnimalClick} getPopUp={togglePopUp} />
            )
          }
        />
        <Route
          path="/birds"
          element={
            showPopUp ? (
              <PopUp chosenAnimal={animal} closePopUp={togglePopUp} />
            ) : (
              <Birds title="Birds" chosenAnimal={animal} click={handleAnimalClick} getPopUp={togglePopUp} />
            )
          }
        />
        <Route
          path="/mammals"
          element={
            showPopUp ? (
              <PopUp chosenAnimal={animal} closePopUp={togglePopUp} />
            ) : (
              <Mammals title="Mammals" chosenAnimal={animal} click={handleAnimalClick} getPopUp={togglePopUp} />
            )
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
