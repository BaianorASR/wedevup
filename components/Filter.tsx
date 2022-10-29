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
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="distance" value="Distancia maxima" color="white" />
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
        <div className="mb-2 block">
          <Label htmlFor="duration" value="Duração maxima" color="white" />
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

      <Button.Group className="grid grid-cols-2 ">
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
