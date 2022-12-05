import { object, string } from "joi";
import { Schema, model } from "mongoose";

const exampleSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
});


export const Example = model("Example", exampleSchema);

export function validateExample(user) {
  const schema = object({
    name: string().min(1).max(50).required(),
    email: string().min(5).max(255).required().email(),
    phone: string().min(5).max(255).required(),
  });

  const validate = schema.validate(user);
  console.log(validate);

  return schema.validate(user);
}

