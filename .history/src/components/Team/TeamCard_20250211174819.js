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
            <a href={props.git}>
              <i class="fa fa-github"></i>{" "}
            </a>
          </li>
          <li>
            <a href={props.li} target="blank">
              <i class="fa fa-linkedin"></i>{" "}
            </a>
          </li>
          <li>
            <a href={props.insta}>
              <i class="fa fa-instagram"></i>{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TeamCard;
