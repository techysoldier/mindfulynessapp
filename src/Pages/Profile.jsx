import "./Profile.css";
import Topbar from "../Components/topbar";
// import Sidebar from "../../components/Sidebar";
// import Feed from "../../components/Feed";
// import Rightbar from "../../components/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        {/* <Sidebar /> */}
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Andrew Woodard</h4>
                <span className="profileInfoDesc">What it do!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            {/* <Feed />
            <Rightbar profile/> */}
          </div>
        </div>
      </div>
    </>
  );
}