const plans = [
  {
    name: "Starter",
    price: "$99/mo",
    description: "For small teams that need basic server and infrastructure support.",
    features: [
      "Basic server setup",
      "SSL and domain configuration",
      "Basic monitoring setup",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$299/mo",
    description: "For growing businesses that want automation and better visibility.",
    features: [
      "CI/CD setup",
      "Docker containerization",
      "Monitoring and alerts",
      "Monthly cost optimization report",
      "Priority support",
    ],
  },
  {
    name: "Professional",
    price: "$799/mo",
    description: "For teams that need advanced DevOps, security, and automation support.",
    features: [
      "Kubernetes setup",
      "Terraform or Ansible automation",
      "Security audit",
      "IAM setup",
      "24/7 monitoring",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For complex infrastructure, hybrid environments, and advanced security needs.",
    features: [
      "Cloud migration",
      "Infrastructure redesign",
      "PAM and Zero Trust implementation",
      "AI agent deployment",
      "On-prem and SAN support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
          Pricing
        </p>
        <h2 className="text-3xl font-bold md:text-4xl">
          Flexible plans for different business needs
        </h2>
        <p className="mt-4 text-slate-300">
          Start simple and scale into advanced support as your infrastructure grows.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
            <p className="mt-3 text-3xl font-semibold text-sky-400">{plan.price}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {plan.description}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>

            <button className="mt-8 w-full rounded-xl bg-sky-500 px-4 py-3 font-semibold text-white hover:bg-sky-600">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}