import brownies from "../assets/brownies.jpg";
function Home() {
  return (
    <div className="hero">
      <h1>Fresh Home-made</h1>
      <p>Healthy Incorporative desserts</p>
      <img
        src={brownies}  
        alt="brownies"
        className="hero-img"
      />
    </div>
  );
}

export default Home;
