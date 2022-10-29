import { Button, Label, TextInput } from 'flowbite-react';
import { Calendar, Ruler } from 'phosphor-react';
import { usePrice } from '../hooks/usePrice';

export function ChangePrice() {
  const { day, km, setDay, setKm, fetchReloadDataWithNewPrices } = usePrice();

  return (
    <div className="sm:grid-cols-3 grid items-end grid-cols-1 gap-4">
      <div>
        <div className="block mb-2">
          <Label htmlFor="day" value="Quantidade de dias" />
        </div>
        <TextInput
          id="day"
          type="number"
          placeholder="exemplo: 200"
          value={day || ''}
          icon={Calendar as any}
          min={1}
          required
          onChange={(e) => setDay(+e.target.value)}
        />
      </div>
      <div>
        <div className="block mb-2">
          <Label htmlFor="kms" value="Quantidade em km" />
        </div>
        <TextInput
          id="kms"
          type="number"
          placeholder="exemplo: 10"
          value={km || ''}
          icon={Ruler as any}
          min={5}
          required
          onChange={(e) => setKm(+e.target.value)}
        />
      </div>

      <Button type="submit" color="purple" onClick={fetchReloadDataWithNewPrices}>
        Calcular
      </Button>
    </div>
  );
}
