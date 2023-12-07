import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat
    lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-2 lg:px-20 lg:py-10">
        <div className=" flexCenter gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="ml-[90px] xl:-ml-[-180px] flexCenter gap-2 first-letter:gap-2">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16t md:bold-20 text-white bg-[#2c1623] p-0.4 md:text-2xl shadow-md rounded-lg">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  return (
    <section className="xl:-ml-[120px] xl:-mr-[40px] xl:-mt-[70px] 1xl:max-container relative flex flex-col py-6 lg:mb-10 lg-py-20 mt-[-110px]">
      <div className="ml-[-80px] hide-scrollbar flex h-[340px] items-start justify-start gap-8
      overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title=""
          subtitle=""
          peopleJoined="400+ Usuários Cadastrados"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#2c1623] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16
        xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 text-white">
            Sente-se <strong>perdido(a)</strong>, sem saber o caminho?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Navegar na jornada do desenvolvimento de crianças no espectro do autismo pode ser desafiador, porém não se preocupe, estamos aqui para ajudar! Dentro deste guia
            você encontrará todas as ferramentas e informações necessárias para descobrir o caminho para fornecer o melhor suporte para seu filho.
          </p>
          <Image
            src="/quote.svg"
            alt="quote"
            width={186}
            height={219}
            className="cslw-quote"
          />
        </div>
      </div>
    </section>
  )
}

export default Camp