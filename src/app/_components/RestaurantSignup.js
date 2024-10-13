import { useState } from "react";

const RestaurantSignup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [c_password, setCPassword] = useState();
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();

  const handleSignup = async () => {
    console.log(email, password, c_password, name, city, address, contact);
    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      body: JSON.stringify({ email, password, name, city, address, contact })
    })
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("Restaurant created successfully");
    }
  }

  return (
    <>
      <h3 className="">Signup</h3>
      <div className="input-wrapper">
        <input
          type="email"
          placeholder="Enter email id"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Enter password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="password"
          placeholder="Confirm password"
          className="input-field"
          value={c_password}
          onChange={(e) => setCPassword(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter restaurant name"
          className="input-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter city"
          className="input-field"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter full address"
          className="input-field"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter contact no"
          className="input-field"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <button className="button" onClick={handleSignup}>Signup</button>
      </div>
    </>
  );
};
export default RestaurantSignup;
