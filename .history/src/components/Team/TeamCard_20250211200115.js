import "./TeamCard.css";
import "@lottiefiles/lottie-player";


function TeamCard(props) {
  return (
    <div className="containner">
      <div class="card">
        <div class="content">
          <div class="imgBx">
            <img src={props.image} alt={props.name} />
          </div>
          <div class="contentBx">
            <h3>
              {props.name}
              <br />
              <span>{props.position}</span>
            </h3>
          </div>
        </div>
        <ul class="sci">
          <li>
            <div className="git">
            <a href={props.git}><div className="git"></div></a>
            </div>
          </li>
          <li>
            <div className="linkedIn">
            <a href={props.li} target="blank"><div className="linkedin"></div></a>
            </div>
          </li>
          <li>
            <div className="instagram">
            <a href={props.insta}><div className="insta"></div></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
