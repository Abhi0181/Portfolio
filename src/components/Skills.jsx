import SectionShell from './SectionShell'

const groups = [
  { 
    title: "EAI & Integration Tools", 
    items: ["HCL Link (IBM ITX)", "Design Studio", "SQL Developer", "Visual Studio", "Putty", "APIs", "Swagger"] 
  },
  { 
    title: "Messaging / Streaming", 
    items: ["Apache Kafka"] 
  },
  { 
    title: "Version Control", 
    items: ["GitHub", "SVN"] 
  },
  { 
    title: "Productivity Tools", 
    items: ["JIRA", "Beyond Compare", "MS Office Applications"] 
  },
  { 
    title: "File Formats", 
    items: ["EDI (ANSI X12, EDIFACT)", "JSON", "XML", "CSV", "Flat File"] 
  },
  { 
    title: "Database", 
    items: ["Oracle (11g)"] 
  },
  { 
    title: "Programming Languages", 
    items: ["SQL", "Core Java"] 
  },
  { 
    title: "Operating Systems", 
    items: ["Linux", "Windows"] 
  }
]

export default function Skills() {
  return (
    <SectionShell id="skills" title="Skills" subtitle="Technologies I use to craft solutions.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <article key={gi} className="card">
            <h3 className="font-semibold text-lg mb-3">{g.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((s, si) => (
                <li 
                  key={si} 
                  className="px-3 py-1 rounded-xl bg-white/10 ring-1 ring-white/10"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
