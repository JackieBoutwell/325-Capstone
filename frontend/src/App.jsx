import { useState, useRef, useEffect } from 'react'
import './App.css'

const BASE_URL = 'http://localhost:8080/api/plants/'

function App() {
    const [isLoading, setIsLoading] = useState(false)
  const [plants, setPlants] = useState([])

  useEffect(() => {
    async function getPlants() {
      try {
        setIsLoading(true)
        const response = await fetch(BASE_URL)
        const data = await response.json()
        console.log(data)
        setPlants(data)  
      } catch(err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    getPlants()
  }, [])

  async function handleDelete(id) {
    try {
      await fetch(`${BASE_URL}/${id}`, {
        method:'DELETE'
      })
      setPlants(plants.filter(plants => plants._id !== id))
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false)
    }
  }

  const textRef = useRef()
  const completeRef = useRef()

  async function handleSubmit(e) {
    e.prventDefault()
    const body = {
      common_name: (textRef.current),
      plant_family: (textRef.current),
      scientific_name: (textRef.current),
      sunlight_requirements: (textRef.current),
      water_requirements: (textRef.current),
      region: (textRef.current),
      grow_zone: (textRef.current),
      hardiness: (textRef.current),
            completed: completeRef.current.checked,
    }
      console.log(body,JSON.stringify(body))
    try {
       fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(body),
      header: {
        'Content-Type': 'application/json'
      }
       })
      const newPlants = await response.json()
      setPlants ([...plants, newPlants])
    } catch (err) {
        console.log(err)
    } finally {

    }
  
    // console.log(textRef.current)
    // console.log(completeRef.current)
  }
  
  return (
    <>
      <h1>Plants</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Plants I want to:
          <br />
          <input type="text" ref={textRef} />
        </label>
        <label>
          <input type="checkbox" ref={completeRef} />
        </label>
        <br/><br/>
        <button>Add Plant</button>
      </form>
      <br/><br/>
      {/* this would be a seperate component. */}
      {plants.map((plants) =>
        <p style={{ textDecorateion: !plants.complete ? 'linethrough' : ''}}
          key={plants._id}>
          {plants.plant_family}
        </p>
      )}

      {/* //check if it is setIsLoading
    //Here is another chance to make a conpoent */}
      <br/><br/>
      {
        isLoading ?
          <p>Loading...</p>
          :
          plants.map((plants) =>
            <p
              style={{ textDecoration: plants.completed ? 'line-through' : '' }}
              key={plants._id}>
              {plants.text}
              <span
                Onclick={() => handleDelete(plants._id)}
                style={{ marginLeft: '15px', fontWeight: '500', cursor: 'pointer' }}>
                      X
                  </span>
              </p>
          )
      }
    </>
  )
}

export default App
