import "./Avatar.css";

function Avatar({ avatarImg, avatarName }) {
  return (
    <div className="avatar-container">
      <div className="hexagon-border-3">
        <div className="hexagon-border-2">
          <div className="hexagon-border-1">
            <div className="hexagon">
              <img src={avatarImg} alt="Customized Avatar" srcSet="" />
            </div>
          </div>
        </div>
      </div>
      <h2 className="avatar-title">{avatarName}</h2>
    </div>
  );
}

export default Avatar;
// `https://avatars.dicebear.com/api/adventurer-neutral/${name}.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`
