import * as yup from "yup";

export const reviewCreateSchema = yup.object().shape({
  title: yup
    .string()
    .required("You need to provide a title to create a Review!"),
  body: yup.string().required("You need to provide text to create a comment!"),
  rating: yup.number().required(),
});
