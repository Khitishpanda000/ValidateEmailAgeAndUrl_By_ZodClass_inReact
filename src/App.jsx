import {useState} from "react"
import {z} from 'zod'
//schema
const emailschema=z.string().email("invalid email")
const urlschema=z.string().url("invalid url")
const ageschema=z.coerce.number().int("must be whole number").min(18,"must be 18+").max(99,"invalid age")

function App() {

  const [email,setemail]=useState('')
  const [url,seturl]=useState('')
  const [age,setage]=useState('')

  //helper--validate my input
  function validate(schema,value){
    if(!value) return ""
  const result=schema.safeParse(value)
  if(result.success) return "valid"
  return result.error.issues[0].message
  }


  //task - we will validate  email url age
  return (
    <>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderRadius:'5px', gap: '5px', width: '300px', height: '200px', padding: '20px', border: '2px solid #ccc' }}>
        <div>
          <p>Validate The Input Here Just type</p>
        </div>
        <div>
        <label>email: </label>
        <input style={{borderRadius:"5px"}} type="text" placeholder='email'   onChange={(e)=>{setemail(e.target.value)}} />
        <p>{validate(emailschema,email)}</p>
        </div>

        <div>
          <label>age: </label>
          <input style={{borderRadius:"5px"}} type="text" placeholder='age'  onChange={(e)=>{setage(e.target.value)}}   />
          <p>{validate(ageschema,age)}</p>
        </div>

        <div>
          <label>url: </label>
          <input style={{borderRadius:"5px"}} type="text" placeholder='url'  onChange={(e)=>{seturl(e.target.value)}}  />
          <p>{validate(urlschema,url)}</p>
        </div>
      </form>
    </div>
    </>
  )
}

export default App
