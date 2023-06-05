import { useState } from 'react';

import "../styles/index.sass";
import Header from "./Header";
import Promo from "./Promo";
import Users from './users';
import Form from './Form';

const App = () => {
  // Define state for tracking form submission
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Callback function to handle form submission
  const handleFormSubmit = () => {
    setIsFormSubmitted(true);
  };

  return (
    <div className="App">
      <Header />
      <Promo />
      {/* Render the Users component and pass the form submission status */}
      <Users isFormSubmitted={isFormSubmitted} />
      <Form onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
