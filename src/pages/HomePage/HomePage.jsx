import cl from "./HomePage.module.scss";

export const HomePage = () => {
  return (
    <section className={cl.section}>
      <div>
        <div className={cl.titleContainer}>
          <h1 className={cl.mainTitle}>
            Take good <span>care</span> of your small pets
          </h1>
          <p className={cl.mainDesc}>
            Choosing a pet for your home is a choice that is meant to enrich
            your life with immeasurable joy and tenderness.
          </p>
        </div>
        <div className={cl.mainImage}></div>
      </div>
    </section>
  );
};
