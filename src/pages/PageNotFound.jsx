import { NavBar, Footer } from "../components";

export function PageNotFound() {
  return (
    <>
      <NavBar />
      <section className="flex items-center justify-evenly mt-16">
        <div>
          <img src="404Page.png" alt="404Error" className=" w-[45rem]" />
        </div>
        <div className="flex flex-col gap-4 text-center">
          <h1 className=" text-5xl font-extrabold">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
        </div>
      </section>
      <Footer />
    </>
  );
}
