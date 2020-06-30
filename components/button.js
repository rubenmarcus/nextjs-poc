export default function ButtonItau({ children, click }) {
    return <button className="bg-itau-orange btn text-white hover:bg-itau-orangedark  font-medium py-3 px-12 border border-itau-orange  rounded text-xl" onClick={click}>{children}</button>
  }
  