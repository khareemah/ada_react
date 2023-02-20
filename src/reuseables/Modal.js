import people from '../data';
import './Modal.css';

const Modal = ({ setShowModal }) => {
  const id = localStorage.getItem('id');
  console.log(typeof id, id);
  const closeModal = () => {
    setShowModal(false);
  };

  const person = people.find((person) => person.id === Number(id));
  const { profilePic, name, description } = person;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <img src={profilePic} className="img modal-img" alt={name} />
        <div className="modal-content">
          <h4>{name}</h4>
          {description.map((item, index) => {
            return <h4 key={index}>{item}</h4>;
          })}
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            close
          </button>
        </div>
      </div>
    </aside>
    // <div className="modal">
    //   {/* <img src={profilePic} alt={name} /> */}
    //
    //   <button onClick={closeModal}>close</button>
    // </div>
  );
};

export default Modal;
