import { Card } from '../components/Card';
import { Filter } from '../components/Filter';
import { useAppContext } from '../context';

export default function Home() {
  const { cars } = useAppContext();

  return (
    <>
      <Filter />
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
