import Image from "next/image";

export default function TrustedBy() {
  const companies = [
    {
      name: "Claimbuddy",
      logo: "https://tse3.mm.bing.net/th/id/OIP.V-z92tmZLB-YJfuqzGIKLwHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Careline",
      logo: "https://th.bing.com/th/id/OIP.HzRl-UadS1er23hEvcXbSwHaB2?w=297&h=87&c=7&r=0&o=7&pid=1.7&rm=3",
    },
    {
      name: "Medfine",
      logo: "https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2023/11/logo.svg",
    },
    {
      name: "Aradhya Hospital",
      logo: "https://aaradhyahealthcare.co.in/wp-content/uploads/2025/01/aaradhya-logo-e1737191221504-1536x907.png",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-10 md:py-14">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Heading */}
        <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">
          Trusted by leading hospitals & healthcare partners
        </p>

        {/* Logos */}
        <div className="flex justify-center items-center gap-10 mt-6 flex-wrap">
          {companies.map((company) => (
            <div
              key={company.name}
              className="opacity-90 hover:opacity-100 transition-transform transform hover:scale-105"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={70}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
