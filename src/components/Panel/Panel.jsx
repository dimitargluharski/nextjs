const Panel = ({ title, children }) => {
  return (
    <>
      <header>{title}</header>
      <main>{children}</main>
    </>
  );
};

export default Panel;
