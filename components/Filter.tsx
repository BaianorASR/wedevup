import { Button, Label, TextInput } from 'flowbite-react';
import { Calendar, Car } from 'phosphor-react';

import { useFilter } from '../hooks/useFilter';

export function Filter() {
  const {
    distance,
    duration,
    setDistance,
    setDuration,
    fetchFilteredData,
    hasFilter,
    reFetchData,
  } = useFilter();

  return (
    <div className="sm:grid-cols-3 grid items-end grid-cols-1 gap-4">
      <div>
        <div className="block mb-2">
          <Label htmlFor="distance" value="Distancia maxima" />
        </div>
        <TextInput
          id="distance"
          type="number"
          placeholder="exemplo: 200"
          value={distance || ''}
          icon={Car as any}
          min={1}
          required
          onChange={e => setDistance(+e.target.value)}
        />
      </div>
      <div>
        <div className="block mb-2">
          <Label htmlFor="duration" value="Duração maxima" />
        </div>
        <TextInput
          id="duration"
          type="number"
          placeholder="exemplo: 10"
          value={duration || ''}
          icon={Calendar as any}
          min={1}
          required
          onChange={e => setDuration(+e.target.value)}
        />
      </div>

      <Button.Group className=" grid grid-cols-2">
        <Button
          type="submit"
          color="purple"
          disabled={!distance && !duration}
          onClick={fetchFilteredData}
        >
          Filtrar
        </Button>
        <Button type="submit" color="failure" disabled={!hasFilter} onClick={reFetchData}>
          Limpar
        </Button>
      </Button.Group>
    </div>
  );
}
