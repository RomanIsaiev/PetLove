import { NewsList } from "../../components/News/NewsList/NewsList";
import { Title } from "../../components/Title/Title";
import cl from "./NewsPage.module.scss";

export const NewsPage = () => {
  return (
    <section className={cl.section}>
      <div>
        <div>
          <Title pageTitle="News" />
        </div>
        <NewsList />
      </div>
    </section>
  );
};
