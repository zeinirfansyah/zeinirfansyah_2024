import certificate_data from "../../../data/certificates.json";

export const Certificates = () => {
  // data bagi dua
  const halfLength = Math.ceil(certificate_data.certificates.length / 2);
  const leftCertificates = certificate_data.certificates.slice(0, halfLength);
  const rightCertificates = certificate_data.certificates.slice(halfLength);

  return (
    <div  data-aos="zoom-in-up" className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <div
          className="flex flex-col gap-1 lg:gap-4 items-center lg:items-start"
        >
          <div className="flex flex-col">
            <div className="bg-brick px-4 py-2 mt-7 w-fit mx-2 mb-4 outline-dashed outline-2 outline-offset-[4px] outline-blueAirForce">
              <h1 className="text-xl lg:text-2xl font-bold text-white transition-all duration-500">
                CERTIFICATES
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                {leftCertificates.map((experience) => (
                  <div key={experience.id} >
                    <div className="px-4 mx-2 my-6 border-l-4 border-brick transition-all duration-500">
                      <h1 className="text-xl font-semibold">{experience.title}</h1>
                      <h2 className="text-l mb-2">
                        {experience.company} - {experience.period}
                      </h2>
                      <p className="text-l">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                {rightCertificates.map((experience) => (
                  <div key={experience.id}>
                    <div className="px-4 mx-2 my-6 border-l-4 border-brick transition-all duration-500">
                      <h1 className="text-xl font-semibold">{experience.title}</h1>
                      <h2 className="text-l mb-2">
                        {experience.company} - {experience.period}
                      </h2>
                      <p className="text-l">{experience.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
