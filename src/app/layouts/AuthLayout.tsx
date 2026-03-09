import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md px-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">NEXO</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Gestão inteligente para empresas reais.
          </p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
