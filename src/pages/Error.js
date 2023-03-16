import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1>You seems lost !! </h1>
        <Link to="/" className="btn btn-primary">
          Let me help you
        </Link>
      </div>
    </section>
  );
};
export default Error;
