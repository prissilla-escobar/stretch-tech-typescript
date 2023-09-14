import { NavLink } from "react-router-dom";
import './Error.css';

type ErrorProps = {
    message?: string | { message: string };
    resetError: () => void;
  };

  function ErrorComponent(props: ErrorProps) {
  const handleReset = () => {
    props.resetError();
  };

  return (
    <div className='error-msg'>
  <h2>Uh-oh...That's an airball!</h2>
  <h2>
    {!props.message 
      ? "The page you're looking for doesn't exist." 
      : typeof props.message === 'string'
        ? props.message
        : props.message.message}
  </h2>
  <NavLink to='/' className='nav'>
    <div onClick={handleReset}>
      <button className='home-link'>RosterWatch Home</button>
    </div>
  </NavLink>
</div>
  );
}

export default ErrorComponent;
