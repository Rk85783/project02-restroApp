const RestaurantLogin = () => {
  return (
    <>
      <h3 className="">Login</h3>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter email id"
          className="input-field"
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter password"
          className="input-field"
        />
      </div>
      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </>
  );
};
export default RestaurantLogin;
