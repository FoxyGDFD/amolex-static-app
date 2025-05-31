import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Header } from '@widgets/header';

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <main className="z-0 bg-zinc-900">
        <Outlet />
      </main>
      <TanStackRouterDevtools />
    </>
  ),
});
