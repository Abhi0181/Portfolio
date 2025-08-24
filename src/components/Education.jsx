import SectionShell from './SectionShell'

export default function Education() {
  const items = [
    { 
      school: "Lovely Professional University", 
      degree: "Bachelor of Technology – Computer Science Engineering", 
      year: "2017 – 2021", 
      notes: "CGPA: 7.35" 
    },
    { 
      school: "Narayana Junior College", 
      degree: "Intermediate – Math, Physics, Chemistry", 
      year: "2015 – 2017", 
      notes: "Scored 85.3%" 
    },
    { 
      school: "Sacred Heart Academy", 
      degree: "High School (SSC)", 
      year: "2014 – 2015", 
      notes: "CGPA: 8.8" 
    }
  ]

  return (
    <SectionShell 
      id="education" 
      title="Education" 
      subtitle="A quick snapshot of my academic background."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((it, i) => (
          <article key={i} className="card">
            <h3 className="text-xl font-semibold">{it.school}</h3>
            <p className="text-gray-600 dark:text-slate-300">{it.degree}</p>
            <p className="text-gray-500 dark:text-slate-400 text-sm">{it.year}</p>
            <p className="mt-3 text-gray-700 dark:text-slate-300">{it.notes}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
