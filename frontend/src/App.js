import { useEffect, useState } from "react"
import axios from "axios"

function App() {

const [data,setData]=useState(null)

useEffect(()=>{

axios
.get("http://localhost:3001")

.then((res)=>{

setData(res.data)

})

.catch((err)=>{

console.log(err)

})

},[])

return (

<div
style={{
padding:"40px",
fontFamily:"Arial"
}}
>

<h1>
Enterprise DevOps Platform
</h1>

{

data ?

(

<div>

<h2>
Backend Connected
</h2>

<pre>

{

JSON.stringify(
data,
null,
2
)

}

</pre>

</div>

)

:

(

<p>

Loading API...

</p>

)

}

</div>

)

}

export default App
