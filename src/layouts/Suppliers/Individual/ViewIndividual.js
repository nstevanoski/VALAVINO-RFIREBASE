import React from "react";
import "./Individual.css";

import { Link } from "react-router-dom";

import { Table, TableBody, TableCell, TableRow } from "@material-ui/core";
import { Print } from "@material-ui/icons";

const ViewIndividual = (props) => {
  const getForPrint = () => {
    props.setSelectedIndividualForPrintId(props.selectedIndividualId);
    props.setSelectedIndividualForPrintIme(props.selectedIndividualIme);
    props.setSelectedIndividualForPrintPrezime(props.selectedIndividualPrezime);
    props.setSelectedIndividualForPrintEmbg(props.selectedIndividualEmbg);
    props.setSelectedIndividualForPrintZiroSmetka(
      props.selectedIndividualZiroSmetka
    );
    props.setSelectedIndividualForPrintDepBanka(
      props.selectedIndividualDepBanka
    );
    props.setSelectedIndividualForPrintAdresa(props.selectedIndividualAdresa);
    props.setSelectedIndividualForPrintGrad(props.selectedIndividualGrad);
    props.setSelectedIndividualForPrintPostenskiKod(
      props.selectedIndividualPostenskiKod
    );
    props.setSelectedIndividualForPrintSorta(props.selectedIndividualSorta);
    props.setSelectedIndividualForPrintKatParc(props.selectedIndividualKatParc);
    props.setSelectedIndividualForPrintKatOpst(props.selectedIndividualKatOpst);
    props.setSelectedIndividualForPrintVikMesto(
      props.selectedIndividualVikMesto
    );
    props.setSelectedIndividualForPrintPovrsina(
      props.selectedIndividualPovrsina
    );
    props.setSelectedIndividualForPrintOcekuvanokg(
      props.selectedIndividualOcekuvanokg
    );
    props.setSelectedIndividualForPrintSeker(props.selectedIndividualSeker);
    props.setSelectedIndividualForPrintTelefon(props.selectedIndividualTelefon);
    props.setSelectedIndividualForPrintDatumRaganje(
      props.selectedIndividualDatumRaganje
    );
  };

  return (
    <div className="main">
      <div className="card">
        <div className="card-header text-center">
          {props.selectedIndividualIme} {props.selectedIndividualPrezime}
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
                        ????.??????????????:
                      </span>{" "}
                      {props.selectedIndividualId}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ?????? ?? ??????????????:
                      </span>{" "}
                      {props.selectedIndividualIme}{" "}
                      {props.selectedIndividualPrezime}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">????????????:</span>{" "}
                      {props.selectedIndividualAdresa}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">????????:</span>{" "}
                      {props.selectedIndividualGrad}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">????????:</span>{" "}
                      {props.selectedIndividualEmbg}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ???????? ????????????:
                      </span>{" "}
                      {props.selectedIndividualZiroSmetka}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ???????????????????? ??????????:
                      </span>{" "}
                      {props.selectedIndividualDepBanka}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ?????????????????? ??????:
                      </span>{" "}
                      {props.selectedIndividualPostenskiKod}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ??????????????:
                      </span>{" "}
                      {props.selectedIndividualTelefon}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">??????????:</span>{" "}
                      {props.selectedIndividualSorta}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ??????.??????????????:
                      </span>{" "}
                      {props.selectedIndividualKatOpst}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ??????.??????????????:
                      </span>{" "}
                      {props.selectedIndividualKatParc}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ??????.??????????:
                      </span>{" "}
                      {props.selectedIndividualVikMesto}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ???????????????? (??2):
                      </span>{" "}
                      {props.selectedIndividualPovrsina}
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ?????????????????? (kg):
                      </span>{" "}
                      {props.selectedIndividualOcekuvanokg}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ???????? ???? ??????????????:
                      </span>{" "}
                      0
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ???????????????? ??????????????:
                      </span>{" "}
                      07.06.2021
                    </TableCell>
                    <TableCell align="left">
                      <span className="view-individual-cell-name">
                        ?????????????????? ???? ??????????:
                      </span>{" "}
                      0.00 ??????
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <Link to="/suppliers/individual" className="btn btn-primary">
            ??????????
          </Link>
          <Link
            to="/suppliers/individual/view/print"
            onClick={() => getForPrint()}
            className="btn btn-success ml-1"
          >
            <Print /> ??????????????
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

export default ViewIndividual;
