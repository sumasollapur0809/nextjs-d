
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main className="w-full">
      <h1 className={`${lusitana.className} text-2xl`}>
        Customers
      </h1>

      <div className="mt-4">
        <Search placeholder="Search customers..." />
      </div>

      <div className="mt-6">
        <CustomersTable customers={customers} />
      </div>
    </main>
  );
}
