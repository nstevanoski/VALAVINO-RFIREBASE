import React from "react";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const IndividualDialog = (props) => {
  const classes = useStyles();

  return (
    <Dialog
      fullWidth
      maxWidth="lg"
      open={props.open}
      onClose={props.close}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle>
        {props.formmode ? "Додади ново" : "Измени"} физичко лице
      </DialogTitle>
      <ValidatorForm onSubmit={props.addIndividual}>
        <DialogContent>
          <Grid container spacing={1}>
            {props.formmode ? (
              ""
            ) : (
              <Grid item xs={12}>
                <TextValidator
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Бр.на договор"
                  name="id"
                  value={props.id}
                  validators={["required"]}
                  errorMessages={["Ова поле е задолжително"]}
                  autoComplete="off"
                  disabled
                />
              </Grid>
            )}
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Име"
                onChange={props.changeIme}
                name="ime"
                value={props.ime}
                validators={["required"]}
                errorMessages={["Ова поле е задолжително"]}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Презиме"
                onChange={props.changePrezime}
                name="prezime"
                value={props.prezime}
                validators={["required"]}
                errorMessages={["Ова поле е задолжително"]}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="ЕМБГ"
                onChange={props.changeEmbg}
                name="embg"
                value={props.embg}
                validators={["required"]}
                errorMessages={["Ова поле е задолжително"]}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Жиро сметка"
                onChange={props.changeZiroSmetka}
                name="zirosmetka"
                value={props.zirosmetka}
                validators={["required"]}
                errorMessages={["Ова поле е задолжително"]}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Депонентна банка"
                onChange={props.changeDepBanka}
                name="depbanka"
                value={props.depbanka}
                validators={["required"]}
                errorMessages={["Ова поле е задолжително"]}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Адреса"
                onChange={props.changeAdresa}
                name="adresa"
                value={props.adresa}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Град"
                onChange={props.changeGrad}
                name="grad"
                value={props.grad}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Поштенски код"
                onChange={props.changePostenskiKod}
                name="postenskikod"
                value={props.postenskikod}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Р.бр</TableCell>
                      <TableCell>Сорта</TableCell>
                      <TableCell>Катастарска општина</TableCell>
                      <TableCell>Катастарска парцела</TableCell>
                      <TableCell>Викано место</TableCell>
                      <TableCell>Површина(м2)</TableCell>
                      <TableCell>Очекувано(кг)</TableCell>
                      <TableCell>Шеќ. ед. во %</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          name="grad"
                          value="1"
                          autoComplete="off"
                          disabled
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeSorta}
                          name="sorta"
                          value={props.sorta}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeKatOpst}
                          name="katopst"
                          value={props.katopst}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeKatParc}
                          name="katparc"
                          value={props.katparc}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeVikMesto}
                          name="vikmesto"
                          value={props.vikmesto}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changePovrsina}
                          name="povrsina"
                          value={props.povrsina}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeOcekuvanokg}
                          name="ocekuvanokg"
                          value={props.ocekuvanokg}
                          autoComplete="off"
                        />
                      </TableCell>
                      <TableCell>
                        <TextValidator
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          onChange={props.changeSeker}
                          name="seker"
                          value={props.seker}
                          autoComplete="off"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Телефон"
                onChange={props.changeTelefon}
                name="telefon"
                value={props.telefon}
                autoComplete="off"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                variant="outlined"
                margin="normal"
                fullWidth
                label="Датум рагање"
                onChange={props.changeDatumRaganje}
                name="datumraganje"
                value={props.datumraganje}
                autoComplete="off"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="secondary">
            {props.formmode ? "Додади" : "Измени"}
          </Button>
          <Button onClick={props.close} color="primary">
            Исклучи
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default IndividualDialog;
