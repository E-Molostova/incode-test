import s from "./Section.module.scss";

const Section = ({ children, title }) => {
  return (
    <div className={s.section}>
      <h2 className={s.title}>{title.toUpperCase()}</h2>
      {children}
    </div>
  );
};

export default Section;
