import firebase from '../helpers/db';
import Individual from '../models/individual'

const firestore = firebase.firestore();

export const getIndividual = async () => {
    try {
        const response = await firestore.collection('individual');
        const data = await response.get();
        let array = [];
        data.forEach(doc => {
            const individual = new Individual(
                doc.id,
                doc.data().ime,
                doc.data().prezime,
                doc.data().adresa,
                doc.data().grad,
                doc.data().embg,
                doc.data().katopst,
                doc.data().katparc,
                doc.data().vikmesto,
                doc.data().povrsina,
                doc.data().sorta,
                doc.data().postenskikod,
                doc.data().ocekuvanokg,
                doc.data().zirosmetka,
                doc.data().depbanka,
                doc.data().datumnaraganje,
                doc.data().brojdostavi,
                doc.data().poslednadostava,
                doc.data().provizijazaotkup,
                doc.data().transport,
                doc.data().telefon,
            );

            array.push(individual);
        });
        return array;
    } catch(error) {
        throw error;
    }
}

export const addIndividual = async (individual) => {
    try {
        await firestore.collection('individual').doc().set(individual);
    } catch(error){
        throw error;
    } 
}

export const getOneIndividual =  async (id) => {
    try{
        const individual = await firestore.collection('individual').doc(id);
        const data = await individual.get();
        return data.data();
    } catch (error){
        throw error;
    }
}

export const updateIndividual = async (id, data) => {
    try {
        const individual = await firestore.collection('individual').doc(id);
        await individual.update(data)
    } catch (error) {
        throw error;
    }
}

export const deleteIndividual = async (id) => {
    try {
        await firestore.collection('individual').doc(id).delete();
    } catch (error) {
        throw error;
    }
}