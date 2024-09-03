import cl from "./Container.module.scss";

export const Container = ({ children }) => {
  return <div className={cl.container}>{children}</div>;
};
