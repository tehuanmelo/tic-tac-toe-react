function ResetButton({onClick}) {
  return (
    <button
    onClick={onClick}
      className="
        rounded-lg px-6 py-2 bg-primary-400 font-semibold text-slate-900
        bg-linear-to-r from-cyan-300 to-cyan-400
        hover:from-cyan-400 hover:to-cyan-500
        active:scale-[.98] active:from-cyan-500 active:to-cyan-600
        transition duration-200 ease-out
        "
    >
      reset
    </button>
  );
}

export default ResetButton;
