import { NavLink } from "react-router-dom";
import './Error.css';

function ErrorComponent(props: any) {
  const handleReset = () => {
    props.resetError();
  };

  return (
    <div className='error-msg'>
      <h2>Uh-oh...That's an airball!</h2>
      {!props.message ? (
        <h2>The page you're looking for doesn't exist.</h2>
      ) : (
        <h2>{props.message.message}</h2>
      )}
      <NavLink to='/' className='nav'>
        <div onClick={handleReset}>
          <button className='back-button'>RosterWatch Home</button>
        </div>
      </NavLink>
    </div>
  );
}

export default ErrorComponent;
