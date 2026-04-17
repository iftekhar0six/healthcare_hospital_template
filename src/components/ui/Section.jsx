import './Section.css';

const Section = ({ children, id, className = '' }) => {
  return (
    <section id={id} className={`section ${className}`}>
      {children}
    </section>
  );
};

export default Section;
