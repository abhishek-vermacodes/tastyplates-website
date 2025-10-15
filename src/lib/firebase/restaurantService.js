import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

/**
 * Fetch all categories with their items
 */
export const fetchCategoriesWithItems = async () => {
  try {
    const categoriesSnapshot = await getDocs(collection(db, "categories"));
    const categories = [];

    for (const catDoc of categoriesSnapshot.docs) {
      const catData = { id: catDoc.id, ...catDoc.data(), items: [] };

      const itemsSnapshot = await getDocs(
        collection(db, `categories/${catDoc.id}/items`)
      );
      catData.items = itemsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      categories.push(catData);
    }

    return categories;
  } catch (error) {
    console.error("Error fetching categories and items:", error);
    throw error;
  }
};

/**
 * Place a new order
 */
export const placeOrder = async (order) => {
  try {
    const ordersRef = collection(db, "orders");
    const docRef = await addDoc(ordersRef, {
      ...order,
      status: "pending",
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error placing order:", error);
    throw error;
  }
};
