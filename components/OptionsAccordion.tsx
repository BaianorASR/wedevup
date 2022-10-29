import { Accordion } from 'flowbite-react';
import { ChangePrice } from './ChangePrice';
import { Filter } from './Filter';

export function OptionsAccordion() {
  return (
    <Accordion className="sm:mx-none mx-4 my-6" alwaysOpen>
      <Accordion.Panel>
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
  );
}
