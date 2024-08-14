import ListContainer from "./components/ListContainer";

export default function Home() {
  return (
    <section className="py-12">
      <h1 className="text-xl font-bold my-12">Organisations</h1>
      <div className="mt-24">
        <ListContainer />
      </div>
    </section>
  );
}
