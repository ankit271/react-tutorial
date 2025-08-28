import {useNavigate} from 'react-router-dom'

function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/admin/users");
  }

  return (
    <>
      <h1>Home</h1>
      <br />
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default Home