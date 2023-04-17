import "./Profile.css";
import Topbar from "../Components/topbar";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Feed from "../../components/feed/Feed";
// import Rightbar from "../../components/rightbar/Rightbar";

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
                // src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                // src="assets/person/7.jpeg"
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