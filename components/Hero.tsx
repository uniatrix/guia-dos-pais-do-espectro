import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="custom-font bold-52 lg:bold-88">O Guia <span style={{ color: '#540060' }}>Definitivo</span> dos Pais do Espectro</h1>
        <p className="regular-16 mt-6 text-gray-90 xl:max-w-[520px]">
          Descubra o caminho para a jornada do desenvolvimento de seu filho! No Guia Definitivo dos Pais do Espectro, reunimos importantes tópicos, recursos e
          experiências compartilhadas por especialistas, pais e cuidadores para oferecer a você uma valiosa fonte de conhecimento para aplicar diretamente na prática.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            294
            <span className="regular-16 lg:regular-20 ml-1">Avaliações</span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button"
            title="Acessar o Portal"
            icon="/play.svg"
            variant="btn_cool"
          />
        </div>
      </div>

      <img
        src="/Familia.png"
        alt="Família"
        width="1700px"
        height="auto"
        className="max-w-full h-auto opacity-100 xl:ml-[-270px] xl:-mt-[150px] absolute-image adjust-medium adjust-large"
      />
    </section>
  );
};

export default Hero;