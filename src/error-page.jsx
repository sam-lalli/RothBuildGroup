import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <header id="error-page">
        <div className="error">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 error-text">
                            <h1>
                                Oops!
                                <span></span>
                            </h1>
                            <p>Sorry, an unexpected error has occurred.</p>
                            <Link to={'/'}>Click here to go back home </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}


