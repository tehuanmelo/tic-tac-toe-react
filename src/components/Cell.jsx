function Cell({ onClick, children, isWinner, amIWinner }) {
    console.log(amIWinner)
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        aspect-square
        rounded-lg
        hover:bg-white/10
        active:scale-[0.97]
        transition duration-200 ease-in-out
        ${isWinner ? "bg-white/10" : "bg-white/8 hover:bg-white/10"}
        ${amIWinner ? "border border-teal-300" : ""}
        `}
    >{children}</button>
  );
}

export default Cell;
