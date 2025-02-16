import "./TeamCard.css";
import "@lottiefiles/lottie-player";


function TeamCard(props) {
  return (
    <div className="containner">
      <div class="card">
        <div class="content">
          <div class="imgBx">
            <img  src={`${process.env.PUBLIC_URL}/${props.image}`} alt={props.name} />
          </div>
          <div class="contentBx">
            <h3 className="member-name">
              {props.name}
              <br />
              <span className="member-position">{props.position}</span>
            </h3>
          </div>
        </div>
        <ul class="sci">
          <li>
            <a href={props.git}><div className="git"></div></a>
          </li>
          <li>
            <a href={props.li} target="blank"><div className="linkedin"></div></a>
          </li>
          <li>
            <a href={props.insta}><div className="insta"></div></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
