import NavBar from "@/components/NavBar";
import PreviewPhone from "@/components/PreviewPhone";

export default async function ManageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-screen container px-2 mx-auto">
      <div className="py-6 w-full">
        <NavBar />
      </div>

      <div className="h-full flex lg:justify-between flex-col-reverse lg:flex-row">
        <section className="bg-white w-full lg:w-[40%] items-center justify-center rounded-lg p-2 lg:h-[calc(100vh-150px)] hidden lg:flex overflow-hidden">
          <PreviewPhone />
        </section>

        <section className="bg-white w-full lg:w-[57%] flex items-start justify-center rounded-lg py-3">
          {children}
        </section>
      </div>
    </main>
  );
}
