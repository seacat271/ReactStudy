const MainButtons = ({changePageHandler}) => {
  return (
    <div>
      <button onClick={() => {changePageHandler("expenses")}}>Expenses</button>
      <button onClick={() => {changePageHandler("income")}}>Income</button>
    </div>
  );
};

export default MainButtons;
