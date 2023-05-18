const Cell = ({ value, onClickHandler, disabled }) => {
  return (
    <button
      className="h-20 border border-red-300 text-3xl"
      onClick={onClickHandler}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Cell;
