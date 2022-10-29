import { Button, Label, TextInput } from 'flowbite-react';

export function ChangePrice() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="distance" value="Quantidade de dias" color="white" />
        </div>
        <TextInput
          id="distance"
          type="number"
          placeholder="exemplo: 200"
          // value={distance || ''}
          // icon={Car as any}
          min={1}
          required
          // onChange={e => setDistance(+e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="duration" value="Quantidade de Km" color="white" />
        </div>
        <TextInput
          id="duration"
          type="number"
          placeholder="exemplo: 10"
          // value={duration || ''}
          // icon={Calendar as any}
          min={1}
          required
          // onChange={e => setDuration(+e.target.value)}
        />
      </div>

      <Button type="submit" color="purple">
        Calcular
      </Button>
    </div>
  );
}
