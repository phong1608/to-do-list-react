
import './App.css';
import { useState } from 'react'; 



function App() {
  const strongeJobs=JSON.parse(localStorage.getItem('jobs'))
  const [job,getJob]=useState('')

  const [jobs,getJobs]=useState(strongeJobs)
  const handleSubmit=()=>{
    getJobs(prev=>{
      const newJobs=[...prev,job]
      const jsonJobs=JSON.stringify(newJobs)
      localStorage.setItem('jobs',jsonJobs)
      return newJobs
    })
   getJob('')
    
  }
  
  
  return (<div style={{padding:32}}>
    <input value={job} onChange={e=>getJob(e.target.value)} />
    <button  onClick={handleSubmit}>Add</button>
    <ul>
      <li>To do list</li>
      {jobs.map((job,index) => 
        (
        <div>
          <li key={index}>{job}</li>
          <button>delete</button>
        </div>
        
        )
        
      )}
      
    </ul>
    </div>)
}

export default App;
