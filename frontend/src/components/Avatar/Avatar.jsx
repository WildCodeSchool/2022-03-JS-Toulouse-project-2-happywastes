import { useState } from "react";
import "./Avatar.css";

function Avatar() {
  const [name, setName] = useState("");
  const [background, setBackground] = useState("variant01");
  const [eyes, setEyes] = useState("variant01");
  const [eyebrows, setEyebrows] = useState("variant01");
  const [mouth, setMouth] = useState("variant01");
  const [accessoiresProbability, setAccessoiresProbability] = useState(0);
  const [accessoires, setAccessoires] = useState("sunglasses");
  const setUserAvatar = (e) => {
    e.preventDefault();
  };
  function changeAccessoiresProbability() {
    if (accessoiresProbability) {
      setAccessoiresProbability(0);
    } else if (!accessoiresProbability) {
      setAccessoiresProbability(100);
    }
  }
  return (
    <div className="avatar-container">
      <div className="hexagon-border-3">
        <div className="hexagon-border-2">
          <div className="hexagon-border-1">
            <div className="hexagon">
              <img
                src={`https://avatars.dicebear.com/api/adventurer-neutral/${name}.svg?eyes[]=${eyes}&eyebrows[]=${eyebrows}&mouth[]=${mouth}&accessoiresProbability=${accessoiresProbability}&accessoires[]=${accessoires}&backgroundColor[]=${background}`}
                alt="cat"
                srcSet=""
              />
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={setUserAvatar}>
        <label htmlFor="name">
          Prénom
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="Name"
            name="name"
          />
        </label>
        <br />
        <label htmlFor="accessoires">
          Couleur
          <select
            onChange={(e) => setBackground(e.target.value)}
            name="background"
            id="background"
          >
            <option value="variant01">1</option>
            <option value="variant02">2</option>
            <option value="variant03">3</option>
            <option value="variant04">4</option>
            <option value="variant05">5</option>
          </select>
        </label>
        <br />
        <label htmlFor="eyes">
          Yeux
          <select
            onChange={(e) => setEyes(e.target.value)}
            name="eyes"
            id="eyes"
          >
            <option value="variant01">1</option>
            <option value="variant02">2</option>
            <option value="variant03">3</option>
            <option value="variant04">4</option>
            <option value="variant05">5</option>
            <option value="variant06">6</option>
            <option value="variant07">7</option>
            <option value="variant08">8</option>
            <option value="variant09">9</option>
            <option value="variant10">10</option>
            <option value="variant11">11</option>
            <option value="variant12">12</option>
            <option value="variant13">13</option>
            <option value="variant14">14</option>
            <option value="variant15">15</option>
            <option value="variant16">16</option>
            <option value="variant17">17</option>
            <option value="variant18">18</option>
            <option value="variant19">19</option>
            <option value="variant20">20</option>
            <option value="variant21">21</option>
            <option value="variant22">22</option>
            <option value="variant23">23</option>
            <option value="variant24">24</option>
            <option value="variant25">25</option>
            <option value="variant26">26</option>
          </select>
        </label>
        <br />
        <label htmlFor="eyebrows">
          Sourcils
          <select
            onChange={(e) => setEyebrows(e.target.value)}
            name="eyebrows"
            id="eyebrows"
          >
            <option value="variant01">1</option>
            <option value="variant02">2</option>
            <option value="variant03">3</option>
            <option value="variant04">4</option>
            <option value="variant05">5</option>
            <option value="variant06">6</option>
            <option value="variant07">7</option>
            <option value="variant08">8</option>
            <option value="variant09">9</option>
            <option value="variant10">10</option>
          </select>
        </label>
        <br />
        <label htmlFor="mouth">
          Bouche
          <select
            onChange={(e) => setMouth(e.target.value)}
            name="mouth"
            id="mouth"
          >
            <option value="variant01">1</option>
            <option value="variant02">2</option>
            <option value="variant03">3</option>
            <option value="variant04">4</option>
            <option value="variant05">5</option>
            <option value="variant06">6</option>
            <option value="variant07">7</option>
            <option value="variant08">8</option>
            <option value="variant09">9</option>
            <option value="variant10">10</option>
            <option value="variant11">11</option>
            <option value="variant12">12</option>
            <option value="variant13">13</option>
            <option value="variant14">14</option>
            <option value="variant15">15</option>
            <option value="variant16">16</option>
            <option value="variant17">17</option>
            <option value="variant18">18</option>
            <option value="variant19">19</option>
            <option value="variant20">20</option>
            <option value="variant21">21</option>
            <option value="variant22">22</option>
            <option value="variant23">23</option>
            <option value="variant24">24</option>
            <option value="variant25">25</option>
            <option value="variant26">26</option>
            <option value="variant27">27</option>
            <option value="variant28">28</option>
            <option value="variant29">29</option>
            <option value="variant30">30</option>
          </select>
        </label>
        <br />
        <label htmlFor="isAccessoire">
          Accessoire?
          <input
            id="is-accessoire"
            type="checkbox"
            checked={accessoiresProbability ? "checked" : ""}
            onChange={() => changeAccessoiresProbability()}
            placeholder="isAccessoire"
            name="isAccessoire"
          />
        </label>
        <br />
        <label htmlFor="accessoires">
          Accessoires
          <select
            onChange={(e) => setAccessoires(e.target.value)}
            name="accessoires"
            id="accessoires"
          >
            <option value="sunglasses">Lunettes de soleil</option>
            <option value="glasses">Lunettes</option>
            <option value="smallGlasses">Petites lunettes</option>
            <option value="mustache">Moustache</option>
            <option value="birthmark">tache de naissance</option>
          </select>
        </label>
      </form>
      <h2 className="avatar-title">{name}</h2>
    </div>
  );
}

export default Avatar;
