import "./topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Mindfulness Social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <input
            placeholder="Search for Topic"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
    </div>
  );
}