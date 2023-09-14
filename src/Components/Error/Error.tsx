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
      <img className="error-photo" src='https://media.npr.org/assets/img/2016/03/29/ap_090911089838_sq-3271237f28995f6530d9634ff27228cae88e3440.jpg' alt='Photo of Shaquille ONeal crying' />
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
