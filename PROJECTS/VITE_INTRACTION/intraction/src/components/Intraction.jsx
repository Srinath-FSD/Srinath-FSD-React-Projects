import { useState } from "react"

const Intraction = () => {

  // ✅ Update Phase State
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  // ✅ onClick Event
  const handleClick = () => {
    setCount(count + 1)
    console.log("Button clicked:", count + 1)
  }

  // ✅ onChange Event
  const handleChange = (e) => {
    setName(e.target.value)
    console.log("Typing:", e.target.value)
  }

  // ✅ onSubmit Event
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", name)
    alert(`Welcome ${name}`)
  }

  return (
    <>
      {/* ONCLICK SECTION */}
      <div className="bg-amber-600 h-60 flex flex-col justify-center items-center gap-4">
        <h1 className="text-white text-4xl font-bold">
          Click Count: {count}
        </h1>

        <button
          onClick={handleClick}
          className="bg-white px-4 py-2 rounded font-bold"
        >
          Click Me
        </button>
      </div>

      {/* ONSUBMIT SECTION */}
      <div className="bg-black h-60 flex flex-col justify-center items-center gap-4 mt-5">
        <h1 className="text-white text-4xl font-bold">
          Form Submit
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            className="p-2 rounded"
          />

          <button
            type="submit"
            className="bg-white px-4 py-2 rounded font-bold"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Intraction
