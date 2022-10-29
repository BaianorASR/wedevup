import { Spinner } from 'flowbite-react';

import { Card } from '../components/Card';
import { OptionsAccordion } from '../components/OptionsAccordion';
import { useAppContext } from '../context';

export default function Home() {
  const { cars } = useAppContext();

  return (
    <>
      <OptionsAccordion />
      <section className="flex justify-center px-4 transition-all delay-1000">
        {!cars.length && (
          <div className=" flex items-center justify-center gap-4 text-xl uppercase">
            <Spinner aria-label="Extra small spinner example" size="lg" />
            Carregando...
          </div>
        )}
        <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
          {cars?.map((car) => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
