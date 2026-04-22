import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Pricing from "@/pages/Pricing";
import FreeTrial from "@/pages/FreeTrial";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Glossary from "@/pages/Glossary";
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
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import GDPR from "@/pages/GDPR";
import ModelDetail from "@/pages/ModelDetail";
import MakeDirectory from "@/pages/MakeDirectory";
import DtcDirectory from "@/pages/DtcDirectory";
import DtcDetail from "@/pages/DtcDetail";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Login from "@/pages/Login";
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
      <Route path="/glossary" component={Glossary} />
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
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/gdpr" component={GDPR} />
      <Route path="/model-detail" component={ModelDetail} />
      <Route path="/manuals/:make" component={MakeDirectory} />
      <Route path="/manuals/:make/:model" component={ModelDetail} />
      <Route path="/dtc" component={DtcDirectory} />
      <Route path="/dtc/:code" component={DtcDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/login" component={Login} />
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
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
