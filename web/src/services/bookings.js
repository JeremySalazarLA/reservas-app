// web/src/services/bookings.js
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc, 
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";  // importa tu instancia de Firestore

// Referencia a la colección "bookings"
const bookingsCol = collection(db, "bookings");

/** Obtiene todas las citas del usuario, ordenadas por fecha de inicio */
export async function fetchBookings(userId) {
  const q = query(
    bookingsCol,
    where("userId", "==", userId),
    orderBy("start")
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/** Crea una nueva cita */
export async function createBooking(data) {
  console.log("🔖 [bookings] Intentando guardar cita:", data);
  try {
    const ref = await addDoc(bookingsCol, data);
    console.log("✅ [bookings] Cita creada con ID:", ref.id);
    return ref.id;
  } catch (err) {
    console.error("❌ [bookings] Error guardando cita:", err);
    throw err;
  }
}

/** Elimina una cita por su ID */
export async function deleteBooking(id) {
  await deleteDoc(doc(db, "bookings", id));
}


export async function updateBooking(id, data) {
  await updateDoc(doc(db, "bookings", id), data);
}