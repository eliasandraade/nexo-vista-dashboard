import { Search, Bell, ChevronDown, Building2, Store } from "lucide-react";

export function AppHeader() {
  return (
    <header className="h-14 border-b border-border bg-card flex items-center justify-between px-6 shrink-0">
      {/* Left: Selectors */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
          <Building2 className="h-4 w-4 text-muted-foreground" />
          <span>Andrade Corp</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
        <div className="w-px h-5 bg-border" />
        <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-secondary transition-colors">
          <Store className="h-4 w-4 text-muted-foreground" />
          <span>Loja Centro</span>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar produtos, clientes, vendas..."
            className="w-full h-9 pl-9 pr-4 rounded-lg bg-muted border-none text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/30"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-muted-foreground bg-card border border-border px-1.5 py-0.5 rounded">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="h-4 w-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="w-px h-5 bg-border" />
        <button className="flex items-center gap-2 hover:bg-muted rounded-lg px-2 py-1.5 transition-colors">
          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
            <span className="text-xs font-semibold text-primary-foreground">JA</span>
          </div>
          <div className="text-left">
            <p className="text-xs font-medium text-foreground leading-none">João Andrade</p>
            <p className="text-[10px] text-muted-foreground leading-none mt-0.5">Admin</p>
          </div>
          <ChevronDown className="h-3 w-3 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
