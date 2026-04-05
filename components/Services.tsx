const services = [
  {
    title: "Cloud Migration Service",
    description:
      "Move workloads to AWS, Azure, or GCP with a structured migration plan and minimal downtime.",
  },
  {
    title: "Cost Audit",
    description:
      "Review cloud usage, remove waste, and optimize infrastructure spending for better efficiency.",
  },
  {
    title: "Security Audit",
    description:
      "Identify risks across infrastructure, access controls, workloads, and deployment pipelines.",
  },
  {
    title: "Monitoring as a Service",
    description:
      "Set up monitoring, alerting, and visibility for servers, apps, and infrastructure health.",
  },
  {
    title: "Codebase Security",
    description:
      "Review repositories, dependencies, and CI/CD practices to improve application security.",
  },
  {
    title: "Infrastructure Redesign",
    description:
      "Modernize and redesign systems for scalability, reliability, and long-term growth.",
  },
  {
    title: "IAM, PAM & Zero Trust",
    description:
      "Implement secure access management with least privilege, privileged access controls, and Zero Trust principles.",
  },
  {
    title: "Automation & Server Management",
    description:
      "Automate infrastructure, server provisioning, and application operations using tools like Ansible and Foreman.",
  },
  {
    title: "On-Prem & SAN Support",
    description:
      "Support for on-premise servers, hybrid environments, and SAN storage systems.",
  },
  {
    title: "AI Agent Deployment",
    description:
      "Deploy AI agents for automation, support workflows, monitoring, and internal operations.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Services
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          DevOps, cloud, security, and automation services
        </h2>
        <p className="mt-4 text-slate-300">
          Cloudletix provides practical infrastructure services for startups,
          growing businesses, and enterprise teams.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
          >
            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}