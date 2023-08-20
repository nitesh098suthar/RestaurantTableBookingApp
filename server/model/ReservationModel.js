import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  t0: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      phoneNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Boolean,
        default: false,
      },
      message: String,
    },
  ],
  t1: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      phoneNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t2: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t3: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t4: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t5: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t6: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t7: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t8: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
  t9: [
    {
      fname: {
        type: String,
        minLength: [3, "First Name must contain atleast 5 Character!"],
        default: undefined,
      },
      lname: {
        type: String,
        minLength: [2, "Last Name must contain atleast 5 Character!"],
        default: undefined,
      },
      startTime: {
        type: String,
        default: undefined,
      },
      endTime: {
        type: String,
        default: undefined,
      },
      mobileNumber: {
        type:String,
        default: undefined
      },
      person: {
        type: Number,
        default: undefined,
      },
      email: {
        validate: [validator.isEmail, 'Please Login again'],
        type: String,
        required: [true, 'Please Login again']
      },
      date: {
        type: Date,
        default: undefined,
      },
      isChecked: {
        type: Date,
        default: undefined,
      },
      message: String,
    },
  ],
});

export const ReservationModel = mongoose.model(
  "ReservationModel",
  reservationSchema
);
