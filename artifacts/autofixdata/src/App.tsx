import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Pricing from "@/pages/Pricing";
import FreeTrial from "@/pages/FreeTrial";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import RepairManuals from "@/pages/RepairManuals";
import Diagnostics from "@/pages/Diagnostics";
import WiringDiagrams from "@/pages/WiringDiagrams";
import AlldataAlternative from "@/pages/AlldataAlternative";
import AutodataAlternative from "@/pages/AutodataAlternative";
import Mitchell1Alternative from "@/pages/Mitchell1Alternative";
import HaynesProAlternative from "@/pages/HaynesProAlternative";
import IdentifixAlternative from "@/pages/IdentifixAlternative";
import AlldataProduct from "@/pages/AlldataProduct";
import AutodataProduct from "@/pages/AutodataProduct";
import HaynesProProduct from "@/pages/HaynesProProduct";
import Mitchell1Product from "@/pages/Mitchell1Product";
import IdentifixProduct from "@/pages/IdentifixProduct";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/free-trial" component={FreeTrial} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/repair-manuals" component={RepairManuals} />
      <Route path="/diagnostics" component={Diagnostics} />
      <Route path="/wiring-diagrams" component={WiringDiagrams} />
      <Route path="/alldata" component={AlldataProduct} />
      <Route path="/autodata" component={AutodataProduct} />
      <Route path="/haynes-pro" component={HaynesProProduct} />
      <Route path="/mitchell1" component={Mitchell1Product} />
      <Route path="/identifix" component={IdentifixProduct} />
      <Route path="/alldata-alternative" component={AlldataAlternative} />
      <Route path="/autodata-alternative" component={AutodataAlternative} />
      <Route path="/mitchell1-alternative" component={Mitchell1Alternative} />
      <Route path="/haynespro-alternative" component={HaynesProAlternative} />
      <Route path="/identifix-alternative" component={IdentifixAlternative} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
