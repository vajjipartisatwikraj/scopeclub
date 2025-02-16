import "./Team.css";
import { bod } from "../../Assets/Data/TeamData";
import { t22 } from "../../Assets/Data/TeamData22";
import { t23 } from "../../Assets/Data/TeamData23";
import { t24 } from "../../Assets/Data/TeamData24";
import { t25 } from "../../Assets/Data/TeamData25";
import { t26 } from "../../Assets/Data/TeamData26";
import TeamCard from "./TeamCard";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";


function Team() {
  return (
    <motion.div
      className="team"
      initial={{ y: 1, scale: 1, opacity: 0 }}
      animate={{
        y: "25px",
        opacity: 1,
      }}
      transition={{ duration: 0.5 }}
     
    >
      <Helmet>
        <title>Team</title>
      </Helmet>
      <div className="head">
        <h1 className="team-h">Meet the Team!</h1>
        <h3 className="team-q">
          "Coming together is a beginning, staying together is progress, and
          working together is success."
          <br />– Henry Ford
        </h3>
        <h2 className="team-p">Board of Directors</h2>

        <div className="bodd">
          {bod.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k26</h2>
        <div className="bod">
          {t26.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k25</h2>
        <div className="bod">
          {t25.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k24</h2>
        <div className="bod">
          {t24.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k23</h2>
        <div className="bod">
          {t23.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
        <h2 className="team-p">Team 2k22</h2>
        <div className="bod">
          {t22.map((t) => (
            <TeamCard
              key={t.id}
              image={t.image}
              name={t.name}
              position={t.position}
              git={t.socials.github}
              insta={t.socials.instagram}
              li={t.socials.linkedin}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Team;
