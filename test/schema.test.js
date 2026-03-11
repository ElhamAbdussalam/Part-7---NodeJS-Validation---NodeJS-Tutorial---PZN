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
});
