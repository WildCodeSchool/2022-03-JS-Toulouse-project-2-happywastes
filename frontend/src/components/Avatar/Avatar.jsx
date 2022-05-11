import { useContext } from "react";
import { GlobalUserContext } from "../GlobalUserContext";
import "./Avatar.css";

function Avatar({ avatarImg, avatarName }) {
  const userContext = useContext(GlobalUserContext);
  const [avatarLink] = userContext.avatarLink;
  return (
    <div className="avatar-container">
      <div className="hexagon-border-3">
        <div className="hexagon-border-2">
          <div className="hexagon-border-1">
            <div className="hexagon">
              {avatarLink ? (
                <img src={avatarLink} alt="Customized Avatar" srcSet="" />
              ) : (
                <img src={avatarImg} alt="Customized Avatar" srcSet="" />
              )}
            </div>
          </div>
        </div>
      </div>
      <h2 className="avatar-title">{avatarName}</h2>
    </div>
  );
}

export default Avatar;
