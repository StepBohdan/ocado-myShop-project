export default function Price({main, fractional}: {
  main: number
  fractional: number
}) {

  main += Math.floor(fractional / 100)
  fractional = fractional % 100

  return (
    <span className="price">
      {main},{fractional.toString().padStart(2, "0")}
      <span className="price__currency"> zł</span>
    </span>
  )
}
