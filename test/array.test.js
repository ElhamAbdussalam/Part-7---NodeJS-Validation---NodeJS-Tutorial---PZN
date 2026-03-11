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
});
