import Joi from "joi";

describe("Array", () => {
  it("should can validate array", function () {
    const hobbiesSchema = Joi.array().items(
      Joi.string().required().min(3).max(100),
    );
    const hobbies = ["A", "Reading", "Gaming"];
    const result = hobbiesSchema.validate(hobbies);
    console.info(result);
  });

  it("should can validate array of object", () => {
    const addressSchema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          street: Joi.string().required().max(200),
          city: Joi.string().required().max(100),
          country: Joi.string().required().max(100),
        }),
      );

    const addresses = [];
    const result = addressSchema.validate(addresses, {
      abortEarly: false,
    });
    console.info(result);
  });
});
