import { News } from "../../components/News/News";
import cl from "./NewsPage.module.scss";

export const NewsPage = () => {
  return (
    <section className={cl.section}>
      <div>
        <div>
          <h2>News</h2>
        </div>
        <News />
      </div>
    </section>
  );
};
