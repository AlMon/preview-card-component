function CarInfo(props) {
  return (
    <div
      className="text-white px-5 pt-5"
      style={{ background: `${props.primaryColor}` }}
    >
      <img src={"props.cardIcon"} alt={props.type} />
      <h2 className="font-display uppercase text-[40px]">{props.type}</h2>
      <button
        className="bg-white px-7 py-3 rounded-full"
        style={{ color: `${props.primaryColor}` }}
      >
        Learn more
      </button>
    </div>
  )
}

export default CarInfo
