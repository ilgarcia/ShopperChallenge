import DragDrop from "@/components/DragDrop";
import NewValueTable from "@/components/NewValueTable";

export default function Home() {
  return (
    <main>
      <section className="my-12 px-1 lg:px-0 max-w-5xl w-full mx-auto">
        <h1 className="mb-12 text-3xl font-semibold text-center">
          ATUALIZAR PREÇOS
        </h1>
        <DragDrop />
        <NewValueTable />
      </section>
    </main>
  );
}
