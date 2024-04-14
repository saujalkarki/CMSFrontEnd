function Card({ title, subTitle, description }) {
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{subTitle}</h5>
          <p className="card-text">{description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
