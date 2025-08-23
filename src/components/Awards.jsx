import SectionShell from './SectionShell'

const items = [
  { 
    title: "Microsoft Azure Fundamentals (AZ-900)", 
    org: "Microsoft", 
    year: "2023", 
    note: "Certified in Azure cloud services, concepts, and solutions." 
  },
  { 
    title: "Python for Everybody (Programming)", 
    org: "Coursera", 
    year: "2022", 
    note: "Completed foundational course on Python programming." 
  },
]

export default function Certifications(){
  return (
    <SectionShell id="certifications" title="Certifications" subtitle="Credentials I’ve earned along my learning journey.">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((c, i) => (
          <article key={i} className="card">
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="text-slate-300">{c.org}</p>
            <p className="text-slate-400 text-sm">{c.year}</p>
            <p className="mt-3 text-slate-300">{c.note}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
