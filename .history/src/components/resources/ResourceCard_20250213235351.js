import "./ResourceCard.css";

function ResourceCard(props) {
  const imageUrl = `url(${props.image})`;
  return (
    <div className="ResourceCard">
      <article className="ResourceCard mix ">
        <div className="thumb" style={{ backgroundImage: imageUrl }} />
        <div className="infos">
          <div>
            <h2 className="title">{props.title}</h2>
            <p className="txt">{props.desc}</p>
          </div>
          <a href={props.vlink} className="details" >
            More Info
          </a>
        </div>
      </article>
    </div>
  );
}

export default ResourceCard;
