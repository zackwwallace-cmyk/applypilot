export function score(resume:string,job:string){
const r=resume.toLowerCase()
const j=job.toLowerCase()
const keys=['recruiting','onboarding','compliance','hris','payroll','benefits','records','training','policy','ats']
const matched=keys.filter(k=>r.includes(k)&&j.includes(k))
const missing=keys.filter(k=>j.includes(k)&&!r.includes(k))
const pct=Math.min(98,Math.round((matched.length/Math.max(1,matched.length+missing.length))*100))
return{pct,matched,missing,level:pct>80?'Easy Win':pct>60?'Strong Match':pct>40?'Stretch':'Skip'}
}
