import "./Loading.css";

const LoadingComponent = ({ message = "Loading..." }) => {
  return (
    <div className="loading-container">
        <p>{message}</p>
      <div className="spinner"></div>
      <div className="basketball">
        <div className="ball">
          <div className="lines"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
