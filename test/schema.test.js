import Joi from "joi";

describe("Joi", () => {
  it("should can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const request = "eko";

    const result = schema.validate(request);
    if (result.error) {
      console.info(result.error);
    }
  });

  it("should can validate type data", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().required().min(1000).max(1000000);

    const resultUsername = usernameSchema.validate("eko");
    console.info(resultUsername);

    const resultIsAdmin = isAdminSchema.validate(true);
    console.info(resultIsAdmin);

    const resultPrice = priceSchema.validate("1000");
    console.info(resultPrice);
  });

  it("should can validate date and get result", () => {
    const birthDateSchema = Joi.date().required().max("now").min("01-01-1900");

    const result = birthDateSchema.validate("01-01-1899");
    console.info(result);
    console.info(result.error);

    const result2 = birthDateSchema.validate("01-01-2000");
    console.info(result2);
    console.info(result2.error);
  });

  it("should return validation error", () => {
    const usernameSchema = Joi.string().min(5).email().required();

    const result = usernameSchema.validate("ups");
    console.info(result.value);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});
