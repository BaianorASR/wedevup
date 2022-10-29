import { Pagination, Spinner } from 'flowbite-react';

import { Card } from '../components/Card';
import { CardSkeleton } from '../components/CardSkeleton';
import { OptionsAccordion } from '../components/OptionsAccordion';
import { useAppContext } from '../context';

export default function Home() {
  const { loading, cars, setPage, page, totalPage } = useAppContext();

  return (
    <>
      <OptionsAccordion />
      <section className="flex flex-col items-center justify-center w-full gap-8 px-4 mx-auto transition-transform">
        {loading ? (
          <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center grid w-full grid-cols-1 gap-4">
            {new Array(8).fill(0).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-1 gap-4">
            {cars?.map((car) => (
              <Card key={car.id} car={car} />
            ))}
          </div>
        )}
        <Pagination
          currentPage={page}
          totalPages={totalPage}
          onPageChange={setPage}
          showIcons
        />
      </section>
    </>
  );
}
