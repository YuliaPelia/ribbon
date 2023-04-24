const IconWrapper = ({ icon, descr }) => {
  return (
    <li className="certified_list_item">
      <div className="certified_list_item_picture">
        <img className="certified_list_item_img" src={icon} alt="icon" />
      </div>
      <p className="certified_list_item_descr">{descr}</p>
    </li>
  );
};
export default IconWrapper;
