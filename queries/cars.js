const db = require("../db/dbConfig");
/**
 * Finds a user(car) by their username(carId).
 * @param {string} carId - The carId of the car to find.
 * @returns {Promise<object|null>} The car object if found, otherwise null.
 */

//***write a getAllCars function and export**Car
const getAllCars = async () => {
  try {
    const allCars = await db.any("SELECT * FROM cars");

    return allCars;
  } catch (error) {
    return error;
  }
};

const getOneCar = async () => {
    try {
      const oneCar = await db.any("SELECT * FROM cars WHERE id=$1", id);
  
      return oneCar;
    } catch (error) {
      return error;
    }
  };

  const getUserCars = async (userId) => {
    try {
      const userCars = await db.any("SELECT * FROM cars WHERE user_id=$1", userId);
  
      return userCars;
    } catch (error) {
      return error;
    }
  };

  


const findCarBycarId = async (carId) => {
  try {//match carId to schema???
    const query = "SELECT * FROM cars WHERE carId = $1";

    const car = await db.oneOrNone(query, carId);

    return user;
  } catch (error) {
    console.error("Error finding car by this carId:", error);
    throw error;
  }
};

const createCar = async ({ carId, user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite }) => {
  const query = `
      INSERT INTO cars (carId, user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9, $10)
      RETURNING carId, user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite; 
    `;
  const newUser = await db.one(query, [carId, id, user_id, make, model, make_year, color, cylinders, price, image_path, is_favorite]);
  return newUser;
};

module.exports = {
  findCarBycarId,
  createCar,getAllCars,getOneCar, getUserCars
};