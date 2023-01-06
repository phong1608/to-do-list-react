import { useState } from "react";

const JOB_KEY = "JOB_LIST";

function App() {
  const [job, setJob] = useState("");
  const [jobList, setJobList] = useState(() => {
    const storageJobList = JSON.parse(localStorage.getItem(JOB_KEY));

    return storageJobList ?? [];
  });

  const handleAddJob = () => {
    if (job === "") {
      return;
    }

    setJobList((prevState) => {
      const newJobList = [...prevState, job];

      const jsonJobList = JSON.stringify(newJobList);

      localStorage.setItem(JOB_KEY, jsonJobList);

      return newJobList;
    });

    setJob("");
  };
  const handleDelete=(e)=>{
    let newJobsList=jobList.filter(job =>job!==jobList[e])
    setJobList(prev=>{
      localStorage.setItem(JOB_KEY,JSON.stringify(newJobsList));
      return newJobsList;


    })
  }
  
  return (
    <div className="App" style={{ padding: 20 }}>
      <div style={{ border: "1px solid yellowgreen", padding: 20 }}>
        <input value={job} onChange={(e) => setJob(e.target.value)} />
        <button onClick={handleAddJob}>Add</button>
        <ul>
          {jobList.map((job, index) => (
            <li key={index}>{job}
              <button  onClick={()=>handleDelete(index)} >delete</button>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;