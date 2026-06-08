'use client'
import{useState}from'react'
export default function Page(){const[s,setS]=useState(0);return <main><section><h1>ApplyPilot</h1><p>Light MVP for ATS job matching.</p></section><section><h2>Resume</h2><textarea/></section><section><h2>Job</h2><textarea/><br/><button onClick={()=>setS(83)}>Score</button></section><section><h2>ATS Match</h2><p>{s}%</p></section></main>}