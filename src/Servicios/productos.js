import { collection, query, getDocs, setDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

export const obtenerVestidos = async () => {
  try {
    const vestidos = [];
    const q = query(collection(db, "Vestidos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      vestidos.push({ Id: doc.id, ...doc.data() });
    });
    return vestidos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerPolleras = async () => {
  try {
    const polleras = [];
    const q = query(collection(db, "Polleras"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      polleras.push({ Id: doc.id, ...doc.data() });
    });
    return polleras;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerPantalon = async () => {
  try {
    const pantalon = [];
    const q = query(collection(db, "Pantalon"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      pantalon.push({ Id: doc.id, ...doc.data() });
    });
    return pantalon;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerMonos = async () => {
  try {
    const monos = [];
    const q = query(collection(db, "Monos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      monos.push({ Id: doc.id, ...doc.data() });
    });
    return monos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerRemerasTops = async () => {
  try {
    const remerasyTops = [];
    const q = query(collection(db, "Remeras&Tops"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      remerasyTops.push({ Id: doc.id, ...doc.data() });
    });
    return remerasyTops;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerVelasDifusores = async () => {
  try {
    const velasyDifusores = [];
    const q = query(collection(db, "Velas&Difusores"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      velasyDifusores.push({ Id: doc.id, ...doc.data() });
    });
    return velasyDifusores;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerFloreros = async () => {
  try {
    const floreros = [];
    const q = query(collection(db, "Floreros"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      floreros.push({ Id: doc.id, ...doc.data() });
    });
    return floreros;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const obtenerEspejos = async () => {
  try {
    const espejos = [];
    const q = query(collection(db, "Espejos"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      espejos.push({ Id: doc.id, ...doc.data() });
    });
    return espejos;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const actualizarFavoritos = async (usuario, favoritos) => {
  try {
    const docRef = doc(db, "Favoritos", usuario.uid);
    await setDoc(docRef, { Favoritos: favoritos }, { merge: true });
    console.log("Document successfully written!");
  } catch (error) {
    console.error("Error writing document: ", error);
  }
};
