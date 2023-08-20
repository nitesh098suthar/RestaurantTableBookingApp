import mongoose from "mongoose";

const cuisineSchema = new mongoose.Schema({
  cuisineName: {
    type: String,
    required: [true, "Please Provide Name for Cuisine"],
  },
  cuisineDescription: {
    type: String,
    required: [true, "Please Provide Description for Cuisine"],
  },
  cuisinePrice: {
    type: Number,
    required: [true, "Please Provide Price for Cuisine"],
  },
  cuisineType: {
    type: String,
    required: [true, "Please Provide Type for Cuisine"],
  },
  cuisineImg: {
    type: String,
    required: [true, "Please Provide Image for Cuisine"],
  },
  isPopular: {
    type: Boolean,
    default: false,
  }
});

export const CuisineModel = mongoose.model("CuisineModel", cuisineSchema);
