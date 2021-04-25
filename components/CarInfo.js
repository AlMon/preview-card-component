function CarInfo(props) {
  return (
    <div
      className="text-[#f2f2f2] px-[49px] pt-5"
      style={{ background: `${props.primaryColor}` }}
    >
      <img src={props.icon} alt={`${props.type} icon`} className="mt-8 mb-7" />
      <h2 className="font-display uppercase text-[40px] mb-5">{props.type}</h2>
      <p className="opacity-75 leading-7 mb-6">{props.description}</p>
      <button
        className="bg-white px-8 py-[12.5px] rounded-full mt-[57.5px] mb-[50px]"
        style={{ color: `${props.primaryColor}` }}
      >
        Learn More
      </button>
    </div>
  )
}

export default CarInfo
