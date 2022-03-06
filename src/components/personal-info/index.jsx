import Pagination from "../common/pagination";
import "./style.scss";

function PersonalInfo() {
  return (
    <div className="personal-info">
      <h1 className="personal-info__title">
        Hey, Rocketeer, what are your coordinates?
      </h1>
      <div className="personal-info__wrapper">
        <input
          type="text"
          className="personal-info__border"
          placeholder="First Name"
        />
        <input
          type="text"
          className="personal-info__border"
          placeholder="Last Name"
        />
        <input
          type="text"
          className="personal-info__border"
          placeholder="E Mail"
        />
        <input
          type="text"
          className="personal-info__border"
          placeholder="+995 5__ __ __ __"
        />
      </div>

      <Pagination />
    </div>
  );
}

export default PersonalInfo;
