import React, { useEffect, useState } from "react";
import "./Individual.css";

import { Link } from 'react-router-dom';

import { FadeLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import { AddCircle } from "@material-ui/icons";
import {
  getIndividual,
  addIndividual,
  getOneIndividual,
  updateIndividual,
  deleteIndividual,
} from "../../../data/individualData";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IndividualDialog from "./IndividualDialog";
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

const Individual = (props) => {
  const [individual, setIndividual] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [formMode, setFormMode] = useState(true);
  const [indId, setIndId] = useState("");
  const [ime, setIme] = useState("");
  const [id, setId] = useState("");
  const [prezime, setPrezime] = useState("");
  const [embg, setEmbg] = useState("");
  const [zirosmetka, setZiroSmetka] = useState("");
  const [depbanka, setDepBanka] = useState("");
  const [adresa, setAdresa] = useState("");
  const [grad, setGrad] = useState("");
  const [postenskikod, setPostenskiKod] = useState("");
  const [telefon, setTelefon] = useState("");
  const [datumraganje, setDatumRaganje] = useState("");
  const [sorta, setSorta] = useState("");
  const [katopst, setKatOpst] = useState("");
  const [katparc, setKatParc] = useState("");
  const [vikmesto, setVikMesto] = useState("");
  const [povrsina, setPovrsina] = useState("");
  const [ocekuvanokg, setOcekuvanokg] = useState("");
  const [seker, setSeker] = useState("");

  const override = `
    display: flex;
    align-items: center;
    justify-content: center;
    border-color: red;
  `;

  const handleClose = () => {
    setOpen(false);
  };

  const handleIme = (event) => {
    setIme(event.target.value);
  };

  const handlePrezime = (event) => {
    setPrezime(event.target.value);
  };

  const handleEmbg = (event) => {
    setEmbg(event.target.value);
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

  const handlePostenskiKod = (event) => {
    setPostenskiKod(event.target.value);
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

  const handleSeker = (event) => {
    setSeker(event.target.value);
  };

  const handleOcekuvanokg = (event) => {
    setOcekuvanokg(event.target.value);
  };

  const handleTelefon = (event) => {
    setTelefon(event.target.value);
  };

  const handleDatumRaganje = (event) => {
    setDatumRaganje(event.target.value);
  };
  const handleChangeId = (event) => {
    setId(event.target.value);
  };

  const getlist = async () => {
    try {
      setLoading(true);
      const list = await getIndividual();
      setIndividual(list);
      setFiltered(list);
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  const getOneInd = async (id) => {
    try {
      setFormMode(false);
      setIndId(id);
      const response = await getOneIndividual(id);
      setId(id);
      setIme(response.ime);
      setPrezime(response.prezime);
      setEmbg(response.embg);
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
      setDatumRaganje(response.datumraganje);
      setOpen(true);

    } catch (error) {
      toast.error(error.message);
    }
  };

  const getOneIndView = async (id) => {
    try {
      const response = await getOneIndividual(id);

      props.setSelectedIndividualId(id);
      props.setSelectedIndividualIme(response.ime);
      props.setSelectedIndividualPrezime(response.prezime);
      props.setSelectedIndividualEmbg(response.embg);
      props.setSelectedIndividualZiroSmetka(response.zirosmetka);
      props.setSelectedIndividualDepBanka(response.depbanka);
      props.setSelectedIndividualAdresa(response.adresa);
      props.setSelectedIndividualGrad(response.grad);
      props.setSelectedIndividualPostenskiKod(response.postenskikod);
      props.setSelectedIndividualSorta(response.sorta);
      props.setSelectedIndividualKatOpst(response.katopst);
      props.setSelectedIndividualKatParc(response.katparc);
      props.setSelectedIndividualVikMesto(response.vikmesto);
      props.setSelectedIndividualPovrsina(response.povrsina);
      props.setSelectedIndividualOcekuvanokg(response.ocekuvanokg);
      props.setSelectedIndividualSeker(response.seker);
      props.setSelectedIndividualTelefon(response.telefon);
      props.setSelectedIndividualDatumRaganje(response.datumraganje);

    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteIndividual(id);
      getlist();
      toast.success("Физичкото лице е успешно избришано");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAdd = async (id) => {
    setOpen(true);
    setFormMode(true);
    setId("");
    setIme("");
    setPrezime("");
    setEmbg("");
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
    setDatumRaganje("");
  };

  const addIndividualHandler = async () => {
    try {
      const individual = {
        ime,
        prezime,
        embg,
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
        datumraganje,
      };

      if (formMode) {
        await addIndividual(individual);
        toast.success(`Физичкото лице ${individual.ime} е успешно додадено`);
        getlist();
        setOpen(false);

        setIme("");
        setPrezime("");
        setEmbg("");
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
        setDatumRaganje("");
      } else {
        await updateIndividual(indId, individual);
        toast.success("Физичкото лице е успешно изменето");
        setIme("");
        setPrezime("");
        setEmbg("");
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
        setDatumRaganje("");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  /*const [filtered, setFiltered] = useState(individual);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = individual.filter((row) => {
      return row.ime.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setFiltered(filteredRows);
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };*/

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

  const [filtered, setFiltered] = useState(individual);
  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    const filteredRows = individual.filter((row) => {
      return row.ime.toLowerCase().includes(searchedVal.toLowerCase());
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
          <span>Физички лица</span>
          <div className="card-header-right">
            <button onClick={handleAdd} className="btn btn-primary">
              <AddCircle /> Внеси нов доставувач
            </button>
          </div>
        </div>
        <div className="card-body">
          {individual.length === 0 ? (
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
                    placeholder="Пребарувај"
                  />
                </div>
                <div className="pagination">
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={individual.length}
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
                      <TableCell>Име</TableCell>
                      <TableCell>Презиме</TableCell>
                      <TableCell>Адреса</TableCell>
                      <TableCell>Град</TableCell>
                      <TableCell>ЕМБГ</TableCell>
                      <TableCell>Кат.општ.</TableCell>
                      <TableCell>Кат.парц.</TableCell>
                      <TableCell>Вик.место.</TableCell>
                      <TableCell>Површина (м2)</TableCell>
                      <TableCell>Сорта</TableCell>
                      <TableCell>Поштенски код</TableCell>
                      <TableCell>Очекувано (кг)</TableCell>
                      <TableCell>Жиро Сметка</TableCell>
                      <TableCell>Депонентна банка</TableCell>
                      <TableCell>Датум на раѓање</TableCell>
                      <TableCell>Број на достави</TableCell>
                      <TableCell>Последна достава</TableCell>
                      <TableCell>Провизија за откуп</TableCell>
                      <TableCell>Транспорт</TableCell>
                      <TableCell>Телефон</TableCell>
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
                      <TableCell>Име</TableCell>
                      <TableCell>Презиме</TableCell>
                      <TableCell>Адреса</TableCell>
                      <TableCell>Град</TableCell>
                      <TableCell>ЕМБГ</TableCell>
                      <TableCell>Кат.општ.</TableCell>
                      <TableCell>Кат.парц.</TableCell>
                      <TableCell>Вик.место.</TableCell>
                      <TableCell>Површина (м2)</TableCell>
                      <TableCell>Сорта</TableCell>
                      <TableCell>Поштенски код</TableCell>
                      <TableCell>Очекувано (кг)</TableCell>
                      <TableCell>Жиро Сметка</TableCell>
                      <TableCell>Депонентна банка</TableCell>
                      <TableCell>Датум на раѓање</TableCell>
                      <TableCell>Број на достави</TableCell>
                      <TableCell>Последна достава</TableCell>
                      <TableCell>Провизија за откуп</TableCell>
                      <TableCell>Транспорт</TableCell>
                      <TableCell>Телефон</TableCell>
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
                          <TableCell onClick={() => getOneInd(row.id)}>
                            <div className="btn btn-success">
                              <EditIcon />
                            </div>
                          </TableCell>
                          <TableCell>
                            <Link onClick={() => getOneIndView(row.id)} to="/suppliers/individual/view">
                            <div className="btn btn-info">
                              <VisibilityIcon />
                            </div>
                            </Link>
                          </TableCell>
                          <TableCell>{row.ime}</TableCell>
                          <TableCell>{row.prezime}</TableCell>
                          <TableCell>{row.adresa}</TableCell>
                          <TableCell>{row.grad}</TableCell>
                          <TableCell>{row.embg}</TableCell>
                          <TableCell>{row.katopst}</TableCell>
                          <TableCell>{row.katparc}</TableCell>
                          <TableCell>{row.vikmesto}</TableCell>
                          <TableCell>{row.povrsina}</TableCell>
                          <TableCell>{row.sorta}</TableCell>
                          <TableCell>{row.postenskikod}</TableCell>
                          <TableCell>{row.ocekuvanokg}</TableCell>
                          <TableCell>{row.zirosmetka}</TableCell>
                          <TableCell>{row.depbanka}</TableCell>
                          <TableCell>{row.datumraganje}</TableCell>
                          <TableCell>{row.brojnadostavi}</TableCell>
                          <TableCell>{row.poslednadostava}</TableCell>
                          <TableCell>{row.provizijazaotkup}</TableCell>
                          <TableCell>{row.transport}</TableCell>
                          <TableCell>{row.telefon}</TableCell>
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
          <IndividualDialog
            open={open}
            close={handleClose}
            formmode={formMode}
            id={id}
            ime={ime}
            prezime={prezime}
            embg={embg}
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
            datumraganje={datumraganje}
            changeIme={handleIme}
            changePrezime={handlePrezime}
            changeEmbg={handleEmbg}
            changeZiroSmetka={handleZiroSmetka}
            changeDepBanka={handleDepBanka}
            changeAdresa={handleAdresa}
            changeGrad={handleGrad}
            changePostenskiKod={handlePostenskiKod}
            changeSorta={handleSorta}
            changeKatOpst={handleKatOpst}
            changeKatParc={handleKatParc}
            changeVikMesto={handleVikMesto}
            changePovrsina={handlePovrsina}
            changeOcekuvanokg={handleOcekuvanokg}
            changeSeker={handleSeker}
            changeTelefon={handleTelefon}
            changeDatumRaganje={handleDatumRaganje}
            changeId={handleChangeId}
            addIndividual={addIndividualHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Individual;
