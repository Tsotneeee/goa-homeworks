import './App.css'

function App() {

  const handleSubmit = (formData) => {
    let data = Object.fromEntries(formData);
    data = {
      ...data,
      check: formData.getAll('check')
    }
    console.log(data);
  }

  return (
    <>
    <h1>hi</h1>

      <form action={handleSubmit}>

        <label>text:
          <input type="text" name="texts" />
        </label><br /><br />

        <label>Male
          <input type="radio" name='rad' value={"male"} />
        </label><br/>
        <label>Female
          <input type="radio" name='rad' value={"female"} />
        </label><br/>
        <label>AK-47
          <input type="radio" name='rad' value={"ak"} />
        </label><br /><br />

        <label>C++
          <input type="checkbox" name='check' value={"c++"} />
        </label><br/>

        <label>Python
          <input type="checkbox" name='check' value={"python"} />
        </label><br/>

        <label>JavaScript
          <input type="checkbox" name='check' value={"javascript"} />
        </label><br/><br/>

        <button>Submit</button>
      </form>
    </>
  )
}

export default App
