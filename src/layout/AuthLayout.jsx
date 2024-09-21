import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <main className="cotainer mx-auto md:grid md:grid-cols-2 my-auto gap-12 p-5 items-center">
        <Outlet />
      </main>
    </>
  );
};
