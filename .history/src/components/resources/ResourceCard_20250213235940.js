import "./ResourceCard.css";

function ResourceCard(props) {
  const imageUrl = `url(${props.image})`;
  return (
    <div className="ResourceCard">
      <article className="ResourceCard mix ">
        <div className="thumb" style={{ backgroundImage: imageUrl }} ></div>
        <div className="infos">
          <div>
            <h2 className="title">{props.title}</h2>
            <p className="txt">{props.desc}</p>
          </div>
          <div className="rs-links">
          <a href={props.vlink} className="rs-link" >
            Videos
          </a>
          <a href={props.nlink} className="rs-link" >
            Notes
          </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
