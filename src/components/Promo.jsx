import '../styles/_promo.sass';

function Promo() {
  return (
    <section className="promo">
      <div className="container promo__container">
        <div className="promo__content">
          <h1 className="promo__title heading">
            Test assignment for front-end developer
          </h1>
          <p className="promo__text">
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <a href="#form" className="button promo__button">
            Sign up
          </a>
        </div>
      </div>
    </section>
  );
}

export default Promo;
