import firebase from '../helpers/db';
import Company from '../models/company'

const firestore = firebase.firestore();

export const getCompany = async () => {
    try {
        const response = await firestore.collection('company');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const company = new Company(
                doc.id,
                doc.data().imenafirma,
                doc.data().imenaupravitel,
                doc.data().prezimenaupravitel,
                doc.data().embs,
                doc.data().edb,
                doc.data().zirosmetka,
                doc.data().depbanka,
                doc.data().adresa,
                doc.data().grad,
                doc.data().postenskikod,
                doc.data().sorta,
                doc.data().katopst,
                doc.data().katparc,
                doc.data().vikmesto,
                doc.data().povrsina,
                doc.data().ocekuvanokg,
                doc.data().seker,
                doc.data().telefon,
                doc.data().ddvobvrznik,
                doc.data().provizijazaotkup,
                doc.data().transport
            );

            array.push(company);
        });
        return array;
    } catch(error) {
        throw error;
    }
}

export const addCompany = async (company) => {
    try {
        await firestore.collection('company').doc().set(company);
    } catch(error){
        throw error;
    } 
}

export const getOneCompany =  async (id) => {
    try{
        const company = await firestore.collection('company').doc(id);
        const data = await company.get();
        return data.data();
    } catch (error){
        throw error;
    }
}

export const updateCompany = async (id, data) => {
    try {
        const company = await firestore.collection('company').doc(id);
        await company.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteCompany = async (id) => {
    try {
        await firestore.collection('company').doc(id).delete();
    } catch (error) {
        throw error;
    }
}