import { Accordion } from 'flowbite-react';

import { Card } from '../components/Card';
import { ChangePrice } from '../components/ChangePrice';
import { Filter } from '../components/Filter';
import { useAppContext } from '../context';

export default function Home() {
  const { cars } = useAppContext();

  return (
    <>
      <Accordion className="my-6" alwaysOpen>
        <Accordion.Panel className="hover:bg-slate-800">
          <Accordion.Title>Filtrar carros</Accordion.Title>
          <Accordion.Content>
            <Filter />
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Calcular preço por</Accordion.Title>
          <Accordion.Content>
            <ChangePrice />
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
      <section className="flex justify-center transition-all delay-1000 px-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cars?.map(car => (
            <Card key={car.id} car={car} />
          ))}
        </div>
      </section>
    </>
  );
}
