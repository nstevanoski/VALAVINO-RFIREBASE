import React from "react";

import { Link } from "react-router-dom";

import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Print } from "@material-ui/icons";

const ViewCompany = (props) => {

  return (
    <div className="main">
      <div className="card">
        <div className="card-header text-center">
          {props.selectedCompanyImeNaUpravitel} {props.selectedCompanyPrezimeNaUpravitel} | <span className="card-header-ddv">ДДВ Обврзник: {props.selectedCompanyDdvobvrznik}</span>
        </div>
        <div className="card-body">
          <div className="d-flex p-3">
            <div className="p-2 mt-3 ml-3">
              <div id="profile-image">
                <img src="/images/view-profile-individual.png" alt="" />
              </div>
            </div>
            <div className="ml-10 p-2 table">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Бр.договор:
                      </span>{" "}
                      {props.selectedCompanyId}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Фирма:
                      </span>{" "}
                        {props.selectedCompanyImeNaFirma}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">Управител:</span>{" "}
                      {props.selectedCompanyImeNaUpravitel}{" "}
                      {props.selectedCompanyPrezimeNaUpravitel}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">ЕМБС:</span>{" "}
                      {props.selectedCompanyEmbs}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">Жиро Сметка:</span>{" "}
                      {props.selectedCompanyZiroSmetka}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Депонентна банка:
                      </span>{" "}
                      {props.selectedCompanyDepBanka}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Адреса:
                      </span>{" "}
                      {props.selectedCompanyAdresa}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Град:
                      </span>{" "}
                      {props.selectedCompanyGrad}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Поштенски код:
                      </span>{" "}
                      {props.selectedCompanyPostenskiKod}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">Сорта:</span>{" "}
                      {props.selectedCompanySorta}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Кат.општина:
                      </span>{" "}
                      {props.selectedCompanyKatOpst}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Кат.парцела:
                      </span>{" "}
                      {props.selectedCompanyKatParc}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Вик.место:
                      </span>{" "}
                      {props.selectedCompanyVikMesto}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Површина (м2):
                      </span>{" "}
                      {props.selectedCompanyPovrsina}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Очекувано (kg):
                      </span>{" "}
                      {props.selectedCompanyOcekuvanokg}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ЕДБ:
                      </span>{" "}
                      {props.selectedCompanyEdb}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Број на достави:
                      </span>{" "}
                      1
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Последна достава:
                      </span>{" "}
                      08.06.2021
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Провизија за откуп:
                      </span>{" "}
                      0.00 ден
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Транспорт:
                      </span>{" "}
                      {props.selectedCompanyTransport}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        Телефон:
                      </span>{" "}
                        {props.selectedCompanyTelefon}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/suppliers/company" className="btn btn-primary">
            НАЗАД
          </Link>
          <Link
            to="/suppliers/individual/view/print"
            className="btn btn-success ml-1"
          >
            <Print /> ПРИНТАЈ
          </Link>
        </div>
      </div>

      {/*
            <p>{props.selectedIndividualId}</p>
            <p>{props.selectedIndividualIme}</p>
            <p>{props.selectedIndividualPrezime}</p>
            <p>{props.selectedIndividualEmbg}</p>
            <p>{props.selectedIndividualZiroSmetka}</p>
            <p>{props.selectedIndividualDepBanka}</p>
            <p>{props.selectedIndividualAdresa}</p>
            <p>{props.selectedIndividualGrad}</p>
            <p>{props.selectedIndividualPostenskiKod}</p>
            <p>{props.selectedIndividualSorta}</p>
            <p>{props.selectedIndividualKatParc}</p>
            <p>{props.selectedIndividualKatOpst}</p>
            <p>{props.selectedIndividualVikMesto}</p>
            <p>{props.selectedIndividualPovrsina}</p>
            <p>{props.selectedIndividualOcekuvanokg}</p>
            <p>{props.selectedIndividualSeker}</p>
            <p>{props.selectedIndividualTelefon}</p>
            <p>{props.selectedIndividualDatumRaganje}</p>
            */}
    </div>
  );
};

export default ViewCompany;
