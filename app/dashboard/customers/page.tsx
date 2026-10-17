
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import Search from '@/app/ui/search';
import Table from '@/app/ui/customers/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';

export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  },
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/dashboard/customers', active: true },
        ]}
      />

      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`${lusitana.className} text-2xl`}>
            Customers
          </h1>
        </div>

        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search customers..." />
        </div>

        <Suspense
          key={query}
          fallback={<CustomersTableSkeleton />}
        >
          <Table query={query} />
        </Suspense>
      </div>
    </main>
  );
}
