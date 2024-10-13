const { default: Link } = require("next/link");

const RestaurantHeader = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <img src="" alt="" />
      </div>
      <ul className="">
        <li className="">
          <Link href="/">Home</Link>
        </li>
        <li className="">
          <Link href="/">Login/Signup</Link>
        </li>
        <li className="">
          <Link href="/">Profile</Link>
        </li>
      </ul>
    </div>
  );
};
export default RestaurantHeader;
