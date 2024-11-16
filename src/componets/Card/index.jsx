import "../Card/index.css";

function Card(props) {
  const { image, title, desc } = props;
  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Card;
