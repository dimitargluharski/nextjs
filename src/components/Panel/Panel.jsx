const Panel = ({ title, children }) => {
  return (
    <section>
      <header>{title}</header>
      <main>{children}</main>
    </section>
  );
};

export default Panel;
