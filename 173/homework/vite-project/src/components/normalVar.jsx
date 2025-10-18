function NormalVar() {
    let num = 0;
    console.log(num);

  return (
    <>
    <h1>{num}</h1>
    <button onClick={() => {num++;console.log(num)}}>Increment</button><br />
    </>
  )
}

export default NormalVar