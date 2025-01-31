export default function SideBar(props) {
  const { handleToggleModal, data } = props;
  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p><em>{data?.date}</em></p>
          <p>
          {data?.explanation}
          </p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}
