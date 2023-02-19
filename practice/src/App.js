import './App.css';
import { useState } from 'react';
import data from './data';
import Card from './reuseables/card';
import Modal from './reuseables/Modal';

function App() {
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    let temp = people.filter((person) => person.id !== id);
    setPeople(temp);
  };

  return (
    <section>
      <div className="section-center">
        {people.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.name}
              profilePic={item.profilePic}
              id={item.id}
              handleDelete={handleDelete}
              setShowModal={setShowModal}
            />
          );
        })}
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </section>
  );
}

export default App;
