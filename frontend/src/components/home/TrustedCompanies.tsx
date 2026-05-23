import {
  SiStripe,
  SiSlack,
  SiShopify,
  SiDropbox,
} from "react-icons/si";

export default function TrustedCompanies() {
  const companies = [
    {
      name: "Stripe",
      icon: SiStripe,
    },
    {
      name: "Slack",
      icon: SiSlack,
    },
    {
      name: "Shopify",
      icon: SiShopify,
    },
    {
      name: "Dropbox",
      icon: SiDropbox,
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <p className="text-center text-sm uppercase tracking-[0.2em] text-gray-500 font-semibold">
          Trusted By Industry Leaders
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-10 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center gap-3 text-gray-300 hover:text-black transition duration-300"
            >
              <company.icon size={34} />

              <span className="text-2xl font-bold">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}