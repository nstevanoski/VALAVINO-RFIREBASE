import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./layouts/NavBar";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./layouts/Home/Home";
import Individual from "./layouts/Suppliers/Individual/Individual";
import NotFound from "./components/NotFound/NotFound";
import Sidebar from "./components/Sidebar";
import Suppliers from "./layouts/Suppliers/Suppliers";
import ViewIndividual from "./layouts/Suppliers/Individual/ViewIndividual";
import ViewIndividualPrint from "./layouts/Suppliers/Individual/ViewIndividualPrint";
import Company from "./layouts/Suppliers/Company/Company";
import ViewCompany from "./layouts/Suppliers/Company/ViewCompany";
import AddNewSupplier from "./layouts/Suppliers/AddNewSupplier/AddNewSupplier";
import GrapeDelivery from "./layouts/GrapeDelivery/GrapeDelivery";
import NewGrapeDelivery from "./layouts/GrapeDelivery/NewGrapeDelivery";
import NewGrapeDeliveryIndividual from "./layouts/GrapeDelivery/NewGrapeDeliveryIndividual";

function App() {
  const [user, setUser] = useState("");

  const [toggleForm, setToggleForm] = useState(true);

  const [selectedIndividualId, setSelectedIndividualId] = useState("");
  const [selectedIndividualIme, setSelectedIndividualIme] = useState(
    "Дојде до грешка во системот обидете се повторно!"
  );
  const [selectedIndividualPrezime, setSelectedIndividualPrezime] =
    useState("");
  const [selectedIndividualEmbg, setSelectedIndividualEmbg] = useState("");
  const [selectedIndividualZiroSmetka, setSelectedIndividualZiroSmetka] =
    useState("");
  const [selectedIndividualDepBanka, setSelectedIndividualDepBanka] =
    useState("");
  const [selectedIndividualAdresa, setSelectedIndividualAdresa] = useState("");
  const [selectedIndividualGrad, setSelectedIndividualGrad] = useState("");
  const [selectedIndividualPostenskiKod, setSelectedIndividualPostenskiKod] =
    useState("");
  const [selectedIndividualSorta, setSelectedIndividualSorta] = useState("");
  const [selectedIndividualKatOpst, setSelectedIndividualKatOpst] =
    useState("");
  const [selectedIndividualKatParc, setSelectedIndividualKatParc] =
    useState("");
  const [selectedIndividualVikMesto, setSelectedIndividualVikMesto] =
    useState("");
  const [selectedIndividualPovrsina, setSelectedIndividualPovrsina] =
    useState("");
  const [selectedIndividualOcekuvanokg, setSelectedIndividualOcekuvanokg] =
    useState("");
  const [selectedIndividualSeker, setSelectedIndividualSeker] = useState("");
  const [selectedIndividualTelefon, setSelectedIndividualTelefon] =
    useState("");
  const [selectedIndividualDatumRaganje, setSelectedIndividualDatumRaganje] =
    useState("");


    const [selectedCompanyId, setSelectedCompanyId] = useState("");
    const [selectedCompanyImeNaFirma, setSelectedCompanyImeNaFirma] = useState("");
    const [selectedCompanyImeNaUpravitel, setSelectedCompanyImeNaUpravitel] = useState("");
    const [selectedCompanyPrezimeNaUpravitel, setSelectedCompanyPrezimeNaUpravitel] = useState("");
    const [selectedCompanyEmbs, setSelectedCompanyEmbs] = useState("");
    const [selectedCompanyEdb, setSelectedCompanyEdb] = useState("");
    const [selectedCompanyZiroSmetka, setSelectedCompanyZiroSmetka] = useState("");
    const [selectedCompanyDepBanka, setSelectedCompanyDepBanka] = useState("");
    const [selectedCompanyAdresa, setSelectedCompanyAdresa] = useState("");
    const [selectedCompanyGrad, setSelectedCompanyGrad] = useState("");
    const [selectedCompanyPostenskiKod, setSelectedCompanyPostenskiKod] = useState("");
    const [selectedCompanySorta, setSelectedCompanySorta] = useState("");
    const [selectedCompanyKatOpst, setSelectedCompanyKatOpst] = useState("");
    const [selectedCompanyKatParc, setSelectedCompanyKatParc] = useState("");
    const [selectedCompanyVikMesto, setSelectedCompanyVikMesto] = useState("");
    const [selectedCompanyPovrsina, setSelectedCompanyPovrsina] = useState("");
    const [selectedCompanyOcekuvanokg, setSelectedCompanyOcekuvanokg] = useState("");
    const [selectedCompanySeker, setSelectedCompanySeker] = useState("");
    const [selectedCompanyTelefon, setSelectedCompanyTelefon] = useState("");
    const [selectedCompanyDdvobvrznik, setSelectedCompanyDdvobvrznik] = useState("");
    const [selectedCompanyTransport, setSelectedCompanyTransport] = useState("");

  const [selectedIndividualForPrintId, setSelectedIndividualForPrintId] =
    useState("");
  const [selectedIndividualForPrintIme, setSelectedIndividualForPrintIme] =
    useState("");
  const [
    selectedIndividualForPrintPrezime,
    setSelectedIndividualForPrintPrezime,
  ] = useState("");
  const [selectedIndividualForPrintEmbg, setSelectedIndividualForPrintEmbg] =
    useState("");
  const [
    selectedIndividualForPrintZiroSmetka,
    setSelectedIndividualForPrintZiroSmetka,
  ] = useState("");
  const [
    selectedIndividualForPrintDepBanka,
    setSelectedIndividualForPrintDepBanka,
  ] = useState("");
  const [
    selectedIndividualForPrintAdresa,
    setSelectedIndividualForPrintAdresa,
  ] = useState("");
  const [selectedIndividualForPrintGrad, setSelectedIndividualForPrintGrad] =
    useState("");
  const [
    selectedIndividualForPrintPostenskiKod,
    setSelectedIndividualForPrintPostenskiKod,
  ] = useState("");
  const [selectedIndividualForPrintSorta, setSelectedIndividualForPrintSorta] =
    useState("");
  const [
    selectedIndividualForPrintKatOpst,
    setSelectedIndividualForPrintKatOpst,
  ] = useState("");
  const [
    selectedIndividualForPrintKatParc,
    setSelectedIndividualForPrintKatParc,
  ] = useState("");
  const [
    selectedIndividualForPrintVikMesto,
    setSelectedIndividualForPrintVikMesto,
  ] = useState("");
  const [
    selectedIndividualForPrintPovrsina,
    setSelectedIndividualForPrintPovrsina,
  ] = useState("");
  const [
    selectedIndividualForPrintOcekuvanokg,
    setSelectedIndividualForPrintOcekuvanokg,
  ] = useState("");
  const [selectedIndividualForPrintSeker, setSelectedIndividualForPrintSeker] =
    useState("");
  const [
    selectedIndividualForPrintTelefon,
    setSelectedIndividualForPrintTelefon,
  ] = useState("");
  const [
    selectedIndividualForPrintDatumRaganje,
    setSelectedIndividualForPrintDatumRaganje,
  ] = useState("");

  const [selectedNewGrapeDeliveryIme, setSelectedNewGrapeDeliveryIme] = useState("");

  const formMode = () => {
    setToggleForm(!toggleForm);
  };
  const userState = () => {
    const data = localStorage.getItem("user");
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  };

  useEffect(() => {
    userState();
  }, []);
  return (
    <>
      {user !== null ? (
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <Home />
              </Route>
              <Route exact path="/suppliers">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <Suppliers />
              </Route>

              <Route exact path="/grapeDelivery">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <GrapeDelivery/>
              </Route>

              <Route exact path="/grapeDelivery/new_grapeDelivery">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <NewGrapeDelivery 
                setSelectedNewGrapeDeliveryIme={setSelectedNewGrapeDeliveryIme}
                
                />
              </Route>

              <Route exact path="/grapeDelivery/new_grapeDelivery/individual">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <NewGrapeDeliveryIndividual
                selectedNewGrapeDeliveryIme={selectedNewGrapeDeliveryIme}
                />
              </Route>

              <Route exact path="/suppliers/add-new-supplier">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <AddNewSupplier />
              </Route>

              <Route exact path="/suppliers/individual">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <Individual
                  setSelectedIndividualId={setSelectedIndividualId}
                  setSelectedIndividualIme={setSelectedIndividualIme}
                  setSelectedIndividualPrezime={setSelectedIndividualPrezime}
                  setSelectedIndividualEmbg={setSelectedIndividualEmbg}
                  setSelectedIndividualZiroSmetka={
                    setSelectedIndividualZiroSmetka
                  }
                  setSelectedIndividualDepBanka={setSelectedIndividualDepBanka}
                  setSelectedIndividualAdresa={setSelectedIndividualAdresa}
                  setSelectedIndividualGrad={setSelectedIndividualGrad}
                  setSelectedIndividualPostenskiKod={
                    setSelectedIndividualPostenskiKod
                  }
                  setSelectedIndividualSorta={setSelectedIndividualSorta}
                  setSelectedIndividualKatOpst={setSelectedIndividualKatOpst}
                  setSelectedIndividualKatParc={setSelectedIndividualKatParc}
                  setSelectedIndividualVikMesto={setSelectedIndividualVikMesto}
                  setSelectedIndividualPovrsina={setSelectedIndividualPovrsina}
                  setSelectedIndividualOcekuvanokg={
                    setSelectedIndividualOcekuvanokg
                  }
                  setSelectedIndividualSeker={setSelectedIndividualSeker}
                  setSelectedIndividualTelefon={setSelectedIndividualTelefon}
                  setSelectedIndividualDatumRaganje={
                    setSelectedIndividualDatumRaganje
                  }
                />
              </Route>

              <Route exact path="/suppliers/company">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <Company
                setSelectedCompanyId={setSelectedCompanyId}
                setSelectedCompanyImeNaFirma={setSelectedCompanyImeNaFirma}
                setSelectedCompanyImeNaUpravitel={setSelectedCompanyImeNaUpravitel}
                setSelectedCompanyPrezimeNaUpravitel={setSelectedCompanyPrezimeNaUpravitel}
                setSelectedCompanyEmbs={setSelectedCompanyEmbs}
                setSelectedCompanyEdb={setSelectedCompanyEdb}
                setSelectedCompanyZiroSmetka={setSelectedCompanyZiroSmetka}
                setSelectedCompanyDepBanka={setSelectedCompanyDepBanka}
                setSelectedCompanyAdresa={setSelectedCompanyAdresa}
                setSelectedCompanyGrad={setSelectedCompanyGrad}
                setSelectedCompanyPostenskiKod={setSelectedCompanyPostenskiKod}
                setSelectedCompanySorta={setSelectedCompanySorta}
                setSelectedCompanyKatOpst={setSelectedCompanyKatOpst}
                setSelectedCompanyKatParc={setSelectedCompanyKatParc}
                setSelectedCompanyVikMesto={setSelectedCompanyVikMesto}
                setSelectedCompanyPovrsina={setSelectedCompanyPovrsina}
                setSelectedCompanyOcekuvanokg={setSelectedCompanyOcekuvanokg}
                setSelectedCompanySeker={setSelectedCompanySeker}
                setSelectedCompanyTelefon={setSelectedCompanyTelefon}
                setSelectedCompanyDdvobvrznik={setSelectedCompanyDdvobvrznik}
                setSelectedCompanyTransport={setSelectedCompanyTransport}
                />
              </Route>

              <Route exact path="/suppliers/individual/view">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar />
                <ViewIndividual
                  selectedIndividualId={selectedIndividualId}
                  selectedIndividualIme={selectedIndividualIme}
                  selectedIndividualPrezime={selectedIndividualPrezime}
                  selectedIndividualEmbg={selectedIndividualEmbg}
                  selectedIndividualZiroSmetka={selectedIndividualZiroSmetka}
                  selectedIndividualDepBanka={selectedIndividualDepBanka}
                  selectedIndividualAdresa={selectedIndividualAdresa}
                  selectedIndividualGrad={selectedIndividualGrad}
                  selectedIndividualPostenskiKod={
                    selectedIndividualPostenskiKod
                  }
                  selectedIndividualSorta={selectedIndividualSorta}
                  selectedIndividualKatParc={selectedIndividualKatParc}
                  selectedIndividualKatOpst={selectedIndividualKatOpst}
                  selectedIndividualVikMesto={selectedIndividualVikMesto}
                  selectedIndividualPovrsina={selectedIndividualPovrsina}
                  selectedIndividualOcekuvanokg={selectedIndividualOcekuvanokg}
                  selectedIndividualSeker={selectedIndividualSeker}
                  selectedIndividualTelefon={selectedIndividualTelefon}
                  selectedIndividualDatumRaganje={
                    selectedIndividualDatumRaganje
                  }
                  setSelectedIndividualForPrintId={
                    setSelectedIndividualForPrintId
                  }
                  setSelectedIndividualForPrintIme={
                    setSelectedIndividualForPrintIme
                  }
                  setSelectedIndividualForPrintPrezime={
                    setSelectedIndividualForPrintPrezime
                  }
                  setSelectedIndividualForPrintEmbg={
                    setSelectedIndividualForPrintEmbg
                  }
                  setSelectedIndividualForPrintZiroSmetka={
                    setSelectedIndividualForPrintZiroSmetka
                  }
                  setSelectedIndividualForPrintDepBanka={
                    setSelectedIndividualForPrintDepBanka
                  }
                  setSelectedIndividualForPrintAdresa={
                    setSelectedIndividualForPrintAdresa
                  }
                  setSelectedIndividualForPrintGrad={
                    setSelectedIndividualForPrintGrad
                  }
                  setSelectedIndividualForPrintPostenskiKod={
                    setSelectedIndividualForPrintPostenskiKod
                  }
                  setSelectedIndividualForPrintSorta={
                    setSelectedIndividualForPrintSorta
                  }
                  setSelectedIndividualForPrintKatOpst={
                    setSelectedIndividualForPrintKatOpst
                  }
                  setSelectedIndividualForPrintKatParc={
                    setSelectedIndividualForPrintKatParc
                  }
                  setSelectedIndividualForPrintVikMesto={
                    setSelectedIndividualForPrintVikMesto
                  }
                  setSelectedIndividualForPrintPovrsina={
                    setSelectedIndividualForPrintPovrsina
                  }
                  setSelectedIndividualForPrintOcekuvanokg={
                    setSelectedIndividualForPrintOcekuvanokg
                  }
                  setSelectedIndividualForPrintSeker={
                    setSelectedIndividualForPrintSeker
                  }
                  setSelectedIndividualForPrintTelefon={
                    setSelectedIndividualForPrintTelefon
                  }
                  setSelectedIndividualForPrintDatumRaganje={
                    setSelectedIndividualForPrintDatumRaganje
                  }
                />
              </Route>

              <Route exact path="/suppliers/company/view">
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <Sidebar/>
                <ViewCompany
                  selectedCompanyId={selectedCompanyId}
                  selectedCompanyImeNaFirma={selectedCompanyImeNaFirma}
                  selectedCompanyImeNaUpravitel={selectedCompanyImeNaUpravitel}
                  selectedCompanyPrezimeNaUpravitel={selectedCompanyPrezimeNaUpravitel}
                  selectedCompanyEmbs={selectedCompanyEmbs}
                  selectedCompanyEdb={selectedCompanyEdb}
                  selectedCompanyZiroSmetka={selectedCompanyZiroSmetka}
                  selectedCompanyDepBanka={selectedCompanyDepBanka}
                  selectedCompanyAdresa={selectedCompanyAdresa}
                  selectedCompanyGrad={selectedCompanyGrad}
                  selectedCompanyPostenskiKod={selectedCompanyPostenskiKod}
                  selectedCompanySorta={selectedCompanySorta}
                  selectedCompanyKatOpst={selectedCompanyKatOpst}
                  selectedCompanyKatParc={selectedCompanyKatParc}
                  selectedCompanyVikMesto={selectedCompanyVikMesto}
                  selectedCompanyPovrsina={selectedCompanyPovrsina}
                  selectedCompanyOcekuvanokg={selectedCompanyOcekuvanokg}
                  selectedCompanySeker={selectedCompanySeker}
                  selectedCompanyTelefon={selectedCompanyTelefon}
                  selectedCompanyDdvobvrznik={selectedCompanyDdvobvrznik}
                  selectedCompanyTransport={selectedCompanyTransport}
                />
              </Route>

              <Route exact path="/suppliers/individual/view/print">
                <ViewIndividualPrint
                  selectedIndividualForPrintId={selectedIndividualForPrintId}
                  selectedIndividualForPrintIme={selectedIndividualForPrintIme}
                  selectedIndividualForPrintPrezime={
                    selectedIndividualForPrintPrezime
                  }
                  selectedIndividualForPrintEmbg={
                    selectedIndividualForPrintEmbg
                  }
                  selectedIndividualForPrintZiroSmetka={
                    selectedIndividualForPrintZiroSmetka
                  }
                  selectedIndividualForPrintDepBanka={
                    selectedIndividualForPrintDepBanka
                  }
                  selectedIndividualForPrintAdresa={
                    selectedIndividualForPrintAdresa
                  }
                  selectedIndividualForPrintGrad={
                    selectedIndividualForPrintGrad
                  }
                  selectedIndividualForPrintPostenskiKod={
                    selectedIndividualForPrintPostenskiKod
                  }
                  selectedIndividualForPrintSorta={
                    selectedIndividualForPrintSorta
                  }
                  selectedIndividualForPrintKatOpst={
                    selectedIndividualForPrintKatOpst
                  }
                  selectedIndividualForPrintKatParc={
                    selectedIndividualForPrintKatParc
                  }
                  selectedIndividualForPrintVikMesto={
                    selectedIndividualForPrintVikMesto
                  }
                  selectedIndividualForPrintPovrsina={
                    selectedIndividualForPrintPovrsina
                  }
                  selectedIndividualForPrintOcekuvanokg={
                    selectedIndividualForPrintOcekuvanokg
                  }
                  selectedIndividualForPrintSeker={
                    selectedIndividualForPrintSeker
                  }
                  selectedIndividualForPrintTelefon={
                    selectedIndividualForPrintTelefon
                  }
                  selectedIndividualForPrintDatumRaganje={
                    selectedIndividualForPrintDatumRaganje
                  }
                />
              </Route>

              <Route>
                <NavBar
                  setUserState={() => setUser(null)}
                  userEmail={user.email}
                />
                <NotFound />
              </Route>
            </Switch>
          </BrowserRouter>
        </>
      ) : (
        <>
          {toggleForm ? (
            <Login
              loggedIn={(user) => setUser(user)}
              toggle={() => formMode()}
            />
          ) : (
            <SignUp toggle={() => formMode()} />
          )}
        </>
      )}
    </>
  );
}

export default App;
