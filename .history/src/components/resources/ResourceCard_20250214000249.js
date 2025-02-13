import "./ResourceCard.css";

function ResourceCard(props) {
  const imageUrl = `url(${props.image})`;
  return (
    <div className="ResourceCard">
      <article className="ResourceCard mix ">
        <div className="thumb" >
          <div className="rs-image" style={{ backgroundImage: imageUrl }}></div>
          <h2 className="rs-inner-title">{props.title}</h2>
        </div>
        <div className="infos">
          <div>
            <h2 className="title">{props.title}</h2>
            <p className="txt">{props.desc}</p>
          </div>
          <div className="rs-links">
            <a href={props.vlink} className="rs-link">
              Videos
            </a>
            <a href={props.nlink} className="rs-link">
              Notes
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
