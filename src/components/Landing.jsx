import logoApp from "../images/logo_app.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <header className="hero">
        <section className="hero__content">
          <img
            className="content__logo"
            src={logoApp}
            alt="Logo Purpose Chat"
          />
          <p className="content__slogan">
            Los datos cuentan más que cifras: cuentan historias de cambio
          </p>
          <div className="content__button">
            <Link to="/chat" className="button__cta">
              Descubre más
            </Link>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Landing;
