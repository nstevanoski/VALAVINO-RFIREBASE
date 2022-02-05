import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { FadeLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { AddCircle } from "@material-ui/icons";
import {
  getCompany,
  addCompany,
  getOneCompany,
  updateCompany,
  deleteCompany,
} from "../../../data/companyData";

import CompanyDialog from "./CompanyDialog";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";

import SearchBar from "material-ui-search-bar";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@material-ui/core";

const Company = (props) => {
  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState(true);
  const [compId, setCompId] = useState("");
  const [id, setId] = useState("");
  const [imenafirma, setImeNaFirma] = useState("");
  const [imenaupravitel, setImeNaUpravitel] = useState("");
  const [prezimenaupravitel, setPrezimeNaUpravitel] = useState("");
  const [embs, setEmbs] = useState("");
  const [edb, setEdb] = useState("");
  const [zirosmetka, setZiroSmetka] = useState("");
  const [depbanka, setDepBanka] = useState("");
  const [postenskikod, setPostenskiKod] = useState("");
  const [adresa, setAdresa] = useState("");
  const [grad, setGrad] = useState("");
  const [sorta, setSorta] = useState("");
  const [katopst, setKatOpst] = useState("");
  const [katparc, setKatParc] = useState("");
  const [vikmesto, setVikMesto] = useState("");
  const [povrsina, setPovrsina] = useState("");
  const [ocekuvanokg, setOcekuvanokg] = useState("");
  const [seker, setSeker] = useState("");
  const [telefon, setTelefon] = useState("");
  const [ddvobvrznik, setDdvobvrznik] = useState("");
  const [provizijazaotkup, setProvizijaZaOtkup] = useState("");
  const [transport, setTransport] = useState("");

  const override = `
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: red;
  `;

  const handleClose = () => {
    setOpen(false);
  };

  const getlist = async () => {
    try {
      setLoading(true);
      const list = await getCompany();
      setCompany(list);
      setFiltered(list);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const getOneComp = async (id) => {
    try {
      setFormMode(false);
      setCompId(id);
      const response = await getOneCompany(id);
      setId(id);
      setImeNaFirma(response.imenafirma);
      setImeNaUpravitel(response.imenaupravitel);
      setPrezimeNaUpravitel(response.prezimenaupravitel);
      setEmbs(response.embs);
      setEdb(response.edb);
      setZiroSmetka(response.zirosmetka);
      setDepBanka(response.depbanka);
      setAdresa(response.adresa);
      setGrad(response.grad);
      setPostenskiKod(response.postenskikod);
      setSorta(response.sorta);
      setKatOpst(response.katopst);
      setKatParc(response.katparc);
      setVikMesto(response.vikmesto);
      setPovrsina(response.povrsina);
      setOcekuvanokg(response.ocekuvanokg);
      setSeker(response.seker);
      setTelefon(response.telefon);
      setDdvobvrznik(response.ddvobvrznik);
      setProvizijaZaOtkup(response.provizijazaotkup);
      setTransport(response.transport);
      setOpen(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getOneCompView = async (id) => {
    try {
      const response = await getOneCompany(id);

      props.setSelectedCompanyId(id);    
      props.setSelectedCompanyImeNaFirma(response.imenafirma);
      props.setSelectedCompanyImeNaUpravitel(response.imenaupravitel);
      props.setSelectedCompanyPrezimeNaUpravitel(response.prezimenaupravitel);
      props.setSelectedCompanyEmbs(response.embs);
      props.setSelectedCompanyEdb(response.edb);
      props.setSelectedCompanyZiroSmetka(response.zirosmetka);
      props.setSelectedCompanyDepBanka(response.depbanka);
      props.setSelectedCompanyAdresa(response.adresa);
      props.setSelectedCompanyGrad(response.grad);
      props.setSelectedCompanyPostenskiKod(response.postenskikod);
      props.setSelectedCompanyKatOpst(response.katopst);
      props.setSelectedCompanyKatParc(response.katparc);
      props.setSelectedCompanyVikMesto(response.vikmesto);
      props.setSelectedCompanyPovrsina(response.povrsina);
      props.setSelectedCompanySorta(response.sorta);
      props.setSelectedCompanyOcekuvanokg(response.ocekuvanokg);
      props.setSelectedCompanySeker(response.seker);
      props.setSelectedCompanyTelefon(response.telefon);
      props.setSelectedCompanyDdvobvrznik(response.ddvobvrznik);
      props.setSelectedCompanyTransport(response.transport);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteCompany(id);
      getlist();
      toast.success("Правното лице е успешно избришано");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAdd = async (id) => {
    setOpen(true);
    setFormMode(true);
    setId("");
    setImeNaFirma("");
    setImeNaUpravitel("");
    setPrezimeNaUpravitel("");
    setEmbs("");
    setEdb("");
    setZiroSmetka("");
    setDepBanka("");
    setAdresa("");
    setGrad("");
    setPostenskiKod("");
    setSorta("");
    setKatOpst("");
    setKatParc("");
    setVikMesto("");
    setPovrsina("");
    setOcekuvanokg("");
    setSeker("");
    setTelefon("");
    setDdvobvrznik("");
    setProvizijaZaOtkup("");
    setTransport("");
  };

  const addCompanyHandler = async () => {
    try {
      const company = {
        imenafirma,
        imenaupravitel,
        prezimenaupravitel,
        embs,
        edb,
        zirosmetka,
        depbanka,
        adresa,
        grad,
        postenskikod,
        sorta,
        katopst,
        katparc,
        vikmesto,
        povrsina,
        ocekuvanokg,
        seker,
        telefon,
        ddvobvrznik,
        provizijazaotkup,
        transport,
      };

      if (formMode) {
        await addCompany(company);
        toast.success(
          `Правното лице ${company.imenaupravitel} ${company.prezimenaupravitel} е успешно додадено`
        );
        getlist();
        setOpen(false);

        setImeNaFirma("");
        setImeNaUpravitel("");
        setPrezimeNaUpravitel("");
        setEmbs("");
        setEdb("");
        setZiroSmetka("");
        setDepBanka("");
        setAdresa("");
        setGrad("");
        setPostenskiKod("");
        setSorta("");
        setKatOpst("");
        setKatParc("");
        setVikMesto("");
        setPovrsina("");
        setOcekuvanokg("");
        setSeker("");
        setTelefon("");
        setDdvobvrznik("");
        setProvizijaZaOtkup("");
        setTransport("");
      } else {
        await updateCompany(compId, company);
        toast.success("Правното лице е успешно изменето");
        setImeNaFirma("");
        setImeNaUpravitel("");
        setPrezimeNaUpravitel("");
        setEmbs("");
        setEdb("");
        setZiroSmetka("");
        setDepBanka("");
        setAdresa("");
        setGrad("");
        setPostenskiKod("");
        setSorta("");
        setKatOpst("");
        setKatParc("");
        setVikMesto("");
        setPovrsina("");
        setOcekuvanokg("");
        setSeker("");
        setTelefon("");
        setDdvobvrznik("");
        setProvizijaZaOtkup("");
        setTransport("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleImeNaFirma = (event) => {
    setImeNaFirma(event.target.value);
  };

  const handleImeNaUpravitel = (event) => {
    setImeNaUpravitel(event.target.value);
  };

  const handlePrezimeNaUpravitel = (event) => {
    setPrezimeNaUpravitel(event.target.value);
  };

  const handleEmbs = (event) => {
    setEmbs(event.target.value);
  };

  const handleEdb = (event) => {
    setEdb(event.target.value);
  };

  const handleZiroSmetka = (event) => {
    setZiroSmetka(event.target.value);
  };

  const handleDepBanka = (event) => {
    setDepBanka(event.target.value);
  };

  const handleAdresa = (event) => {
    setAdresa(event.target.value);
  };

  const handleGrad = (event) => {
    setGrad(event.target.value);
  };

  const handleSorta = (event) => {
    setSorta(event.target.value);
  };

  const handleKatOpst = (event) => {
    setKatOpst(event.target.value);
  };

  const handleKatParc = (event) => {
    setKatParc(event.target.value);
  };

  const handleVikMesto = (event) => {
    setVikMesto(event.target.value);
  };

  const handlePovrsina = (event) => {
    setPovrsina(event.target.value);
  };

  const handleOcekuvanokg = (event) => {
    setOcekuvanokg(event.target.value);
  };

  const handlePostenskiKod = (event) => {
    setPostenskiKod(event.target.value);
  };

  const handleSeker = (event) => {
    setSeker(event.target.value);
  };

  const handleTelefon = (event) => {
    setTelefon(event.target.value);
  };

  const handleDdvobvrznik = (event) => {
    setDdvobvrznik(event.target.value);
  };

  const handleTransport = (event) => {
    setTransport(event.target.value);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    getlist();
  }, []);

  const [filtered, setFiltered] = useState(company);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = company.filter((row) => {
      return row.imenafirma.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setFiltered(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  return (
    <div className="main">
      <div className="centered-text">
        <ToastContainer />
        <h2>Доставувачи на грозје</h2>
        <p>Листа на доставувачи на грозје</p>
      </div>
      <div className="card">
        <div className="card-header">
          <span>Правни лица</span>
          <div className="card-header-right">
            <button onClick={handleAdd} className="btn btn-primary">
              <AddCircle /> Внеси нов доставувач
            </button>
          </div>
        </div>
        <div className="card-body">
          {company.length === 0 ? (
            <center>
              <FadeLoader
                css={override}
                size={150}
                color={"#eb4034"}
                loading={loading}
              />
            </center>
          ) : (
            <TableContainer component={Paper}>
              <div className="table-top">
                <div className="search-bar">
                  <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                    placeholder="Пребарувај по име на фирма"
                  />
                </div>
                <div className="pagination">
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={company.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    labelRowsPerPage="Редови по страница"
                  />
                </div>
              </div>
              {filtered.length === 0 ? (
                <>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Бр.на договор</TableCell>
                        <TableCell>Измени</TableCell>
                        <TableCell>Прегледај</TableCell>
                        <TableCell>Име на фирма</TableCell>
                        <TableCell>Име на управител</TableCell>
                        <TableCell>Презиме на управител</TableCell>
                        <TableCell>ЕМБС</TableCell>
                        <TableCell>ЕДБ</TableCell>
                        <TableCell>Жиро Сметка</TableCell>
                        <TableCell>Депонентна банка</TableCell>
                        <TableCell>Адреса</TableCell>
                        <TableCell>Град</TableCell>
                        <TableCell>Поштенски код</TableCell>
                        <TableCell>Сорта</TableCell>
                        <TableCell>Кат.општина</TableCell>
                        <TableCell>Кат.парцела</TableCell>
                        <TableCell>Викано место</TableCell>
                        <TableCell>Површина (m2)</TableCell>
                        <TableCell>Очекувано (kg)</TableCell>
                        <TableCell>Шеќер</TableCell>
                        <TableCell>Телефон</TableCell>
                        <TableCell>ДДВ Обврзник</TableCell>
                        <TableCell>Провизија за откуп</TableCell>
                        <TableCell>Транспорт</TableCell>
                        <TableCell>Избриши</TableCell>
                      </TableRow>
                    </TableHead>
                  </Table>

                  <p className="error">Не постои такво лице во базата</p>
                </>
              ) : (
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Бр.на договор</TableCell>
                      <TableCell>Измени</TableCell>
                      <TableCell>Прегледај</TableCell>
                      <TableCell>Име на фирма</TableCell>
                      <TableCell>Име на управител</TableCell>
                      <TableCell>Презиме на управител</TableCell>
                      <TableCell>ЕМБС</TableCell>
                      <TableCell>ЕДБ</TableCell>
                      <TableCell>Жиро Сметка</TableCell>
                      <TableCell>Депонентна банка</TableCell>
                      <TableCell>Адреса</TableCell>
                      <TableCell>Град</TableCell>
                      <TableCell>Поштенски код</TableCell>
                      <TableCell>Сорта</TableCell>
                      <TableCell>Кат.општина</TableCell>
                      <TableCell>Кат.парцела</TableCell>
                      <TableCell>Викано место</TableCell>
                      <TableCell>Површина (m2)</TableCell>
                      <TableCell>Очекувано (kg)</TableCell>
                      <TableCell>Шеќер</TableCell>
                      <TableCell>Телефон</TableCell>
                      <TableCell>ДДВ Обврзник</TableCell>
                      <TableCell>Провизија за откуп</TableCell>
                      <TableCell>Транспорт</TableCell>
                      <TableCell>Избриши</TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filtered
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.id}>
                          <TableCell>{row.id}</TableCell>
                          <TableCell onClick={() => getOneComp(row.id)}>
                            <div className="btn btn-success">
                              <EditIcon />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Link onClick={() => getOneCompView(row.id)} to="/suppliers/company/view">
                              <div className="btn btn-info">
                                <VisibilityIcon />
                              </div>
                            </Link>
                          </TableCell>
                          <TableCell>{row.imenafirma}</TableCell>
                          <TableCell>{row.imenaupravitel}</TableCell>
                          <TableCell>{row.prezimenaupravitel}</TableCell>
                          <TableCell>{row.embs}</TableCell>
                          <TableCell>{row.edb}</TableCell>
                          <TableCell>{row.zirosmetka}</TableCell>
                          <TableCell>{row.depbanka}</TableCell>
                          <TableCell>{row.adresa}</TableCell>
                          <TableCell>{row.grad}</TableCell>
                          <TableCell>{row.postenskikod}</TableCell>
                          <TableCell>{row.sorta}</TableCell>
                          <TableCell>{row.katopst}</TableCell>
                          <TableCell>{row.katparc}</TableCell>
                          <TableCell>{row.vikmesto}</TableCell>
                          <TableCell>{row.povrsina}</TableCell>
                          <TableCell>{row.ocekuvanokg}</TableCell>
                          <TableCell>{row.seker}</TableCell>
                          <TableCell>{row.telefon}</TableCell>
                          <TableCell>{row.ddvobvrznik}</TableCell>
                          <TableCell>{row.provizijazaotkup}</TableCell>
                          <TableCell>{row.transport}</TableCell>
                          <TableCell onClick={() => deleteHandler(row.id)}>
                            <div className="btn btn-danger">
                              <DeleteIcon />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              )}
            </TableContainer>
          )}
          <CompanyDialog
            open={open}
            close={handleClose}
            formmode={formMode}
            id={id}
            imenafirma={imenafirma}
            imenaupravitel={imenaupravitel}
            prezimenaupravitel={prezimenaupravitel}
            embs={embs}
            edb={edb}
            zirosmetka={zirosmetka}
            depbanka={depbanka}
            adresa={adresa}
            grad={grad}
            postenskikod={postenskikod}
            sorta={sorta}
            katopst={katopst}
            katparc={katparc}
            vikmesto={vikmesto}
            povrsina={povrsina}
            ocekuvanokg={ocekuvanokg}
            seker={seker}
            telefon={telefon}
            ddvobvrznik={ddvobvrznik}
            transport={transport}
            changeImeNaFirma={handleImeNaFirma}
            changeImeNaUpravitel={handleImeNaUpravitel}
            changePrezimeNaUpravitel={handlePrezimeNaUpravitel}
            changeEmbs={handleEmbs}
            changeEdb={handleEdb}
            changeZiroSmetka={handleZiroSmetka}
            changeDepBanka={handleDepBanka}
            changeAdresa={handleAdresa}
            changeGrad={handleGrad}
            changeSorta={handleSorta}
            changeKatOpst={handleKatOpst}
            changeKatParc={handleKatParc}
            changeVikMesto={handleVikMesto}
            changePovrsina={handlePovrsina}
            changePostenskiKod={handlePostenskiKod}
            changeOcekuvanokg={handleOcekuvanokg}
            changeSeker={handleSeker}
            changeTelefon={handleTelefon}
            changeDdvobvrznik={handleDdvobvrznik}
            changeTransport={handleTransport}
            addCompany={addCompanyHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Company;
