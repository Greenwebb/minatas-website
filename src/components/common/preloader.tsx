

const Preloader = () => {
  return (
    <div id="preloader">
      <div id="ctn-preloader" className="ctn-preloader">
        <div className="icon">
          <img src="favicon.png" alt="loader" className="m-auto d-block" width="60" />
        </div>
        <div className="txt-loading">
          <span data-text-preloader="Minatas &nbsp;" className="letters-loading">
          Minatas &nbsp; 
          </span>
          <span data-text-preloader="Resources" className="letters-loading">
          Resources
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default Preloader;