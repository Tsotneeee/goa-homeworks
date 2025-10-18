export default function Card(props) {
  return (
    <div className=" inline-block border-2">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  )
}
