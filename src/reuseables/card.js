import './card.css';

const Card = ({ name, profilePic, handleDelete, id, setShowModal }) => {
  const openModal = (id) => {
    setShowModal(true);
    localStorage.setItem('id', id);
  };
  return (
    <article className="single-person">
      <img className="img" src={profilePic} alt="profile pic" />
      <footer>
        <h5> {name}</h5>
        <button className="profileBtn" onClick={() => openModal(id)}>
          Click to view profile
        </button>
        <button className="close-btn" onClick={() => handleDelete(id)}>
          delete
        </button>
      </footer>
    </article>
  );
};

export default Card;
