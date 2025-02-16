import "./ResourceCard.css";

function ResourceCard(props) {
  const imageUrl = `url(${props.image})`;
  return (
    <div className="ResourceCard">
      <article className="EventCard mix ">
        <div className="thumb" style={{ backgroundImage: imageUrl }} />
        <span className="ellipss">{props.title}</span>
        <div className="infos">
          <div>
            <h2 className="title">
              <span className="ellipss">{props.title}</span>
              <span className="time">{props.time}</span>
            </h2>
            <h3 className="detail">{props.date}</h3>
            <h3 className="detail">{props.venue}</h3>
            <p className="txt">{props.desc}</p>
          </div>
          <a href="/" className="details" target="_blank">
            More Info
          </a>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
