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
// `https://avatars.dicebear.com/api/adventurer-neutral/${name}.svg?eyes[]=variant01&eyebrows[]=variant01&mouth[]=variant01&accessoiresProbability=0&accessoires[]=variant01&backgroundColor[]=variant01`
