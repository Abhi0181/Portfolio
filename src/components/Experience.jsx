import SectionShell from './SectionShell'
import { motion } from 'framer-motion'

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "HCL Software, India",
    duration: "January 2025 - Present",
    environment: "HCL Link (IBM ITX), Apache Kafka, APIs, Oracle, Linux, Windows",
    desc: [
      "Developed and implemented robust data integration solutions for the UNICA project using HCL Link (desktop version of IBM ITX).",
      "Designed and built HCL Link flows with complex maps and connections for seamless enterprise data integration.",
      "Engineered and optimized connectors for HubSpot, Infobip, Clevertap, Google, Instagram, Facebook, GupShup, and Zoho CRMs.",
      "Managed end-to-end development of data pipelines for Leads and Contacts within UNICA.",
      "Handled CSV, JSON, Flat File, and Delimited files, integrating with APIs and Apache Kafka for real-time processing.",
      "Enhanced HCL's CDP by developing and integrating connectors that enrich and streamline data ingestion."
    ]
  },
  {
    role: "ITX Developer",
    company: "DHL (DSC) - BUILD TEAM | Encora DHL - IT, India",
    duration: "March 2024 - December 2024",
    environment: "IBM Transformation Extender (ITX 10.0.1), Oracle 11g, SVN",
    desc: [
      "Analyzed Mapping Specification Documents (MSD) and clarified JIRA requests.",
      "Assessed interface complexity to allocate efforts and resources.",
      "Developed Type Trees, clarified MSD queries, and updated JIRA status.",
      "Conducted unit testing with mock inputs to validate functionality.",
      "Committed code using SVN, deployed with Blueprint, and performed reviews.",
      "Deployed and tested interfaces through Link CC and handled QAR tickets.",
      "Contributed to migration projects, including writing Command Prompt scripts."
    ]
  },
  {
    role: "ITX Developer",
    company: "UPS (United Parcel Service) | Cognizant, India",
    duration: "March 2021 - March 2024",
    environment: "IBM Transformation Extender (ITX 9.0.0.3), Oracle 11g, Visual Studio, Linux",
    desc: [
      "Developed and managed Transport Management System (TMS) for UPS covering invoices, tenders, orders, shipment status, and advanced ship notices.",
      "Integrated TMS with UPS’s client EDI transformation architecture (GIC).",
      "Performed full lifecycle development: analysis, design, mapping, testing, and implementation using IBM ITX.",
      "Created optimized Type Trees from XSD and developed run/router maps for multiple regions.",
      "Performed rigorous testing across DEV, INT, and QA environments.",
      "Debugged input files using trace/logs and supported production deployment.",
      "Resolved critical production issues in collaboration with the support team."
    ]
  }
]

export default function Experience() {
  return (
    <SectionShell id="experience" title="Experience" subtitle="Professional journey and contributions.">
      <div className="grid gap-6">
        {experiences.map((exp, i) => (
          <motion.article
            key={i}
            whileHover={{ y: -4 }}
            className="card flex flex-col p-4"
          >
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-slate-700 dark:text-slate-300">{exp.company}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{exp.duration}</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                <span className="font-medium">Environment:</span> {exp.environment}
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-slate-700 dark:text-slate-300">
                {exp.desc.map((point, pi) => (
                  <li key={pi}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  )
}
