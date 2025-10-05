import Joi from 'joi';



class UserValidation {
    createAdmin(body) {
        const schema = Joi.object().keys({
            userName: Joi.string().trim(true).min(3).max(20).required(),
            password: Joi.string().trim(true).required(),
            email: Joi.string().email().required()
        });
        const result = schema.validate(body);
        return result;
    }

    fetchAdmin(body){
        const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().trim(true).required(),
        platForm: Joi.string(),

        });
        const result = schema.validate(body);
        return result;

    }
    verifyAdmin(body) {
        const schema = Joi.object().keys({
            activationLink: Joi.string().required().trim(true),
            userMail: Joi.string().email().required().trim(true),
        });
        const result = schema.validate(body);
        return result;
    }

    updateAdmin(body) {
        const schema = Joi.object().keys({
            firstName: Joi.string().trim(true).min(1).max(20).messages({ 'string.pattern.base': 'first name must start with alphabet & have no special characters & numbers' }),
            lastName: Joi.string().trim(true).min(1).max(20).messages({ 'string.pattern.base': 'last name must start with alphabet & have no special characters & numbers' }),
            profilePic: Joi.string().trim(true),
            countryCode: Joi.string()
                .max(10)
                .regex(/^\+[0-9]*$/)
                .trim(true)
                .messages({ 'string.pattern.base': 'Country Code must start with + and contain only number' }),
            phoneNumber: Joi.string()
                .trim(true)
                .min(10)
                .max(10)
                .regex(/^[0-9]*$/)
                .messages({ 'string.pattern.base': 'phone no. can contain only number' }),
            address: Joi.string().trim(true).min(4).max(100),
            city: Joi.string()
                .trim(true)
                .min(3)
                .max(20)
                .regex(/^[a-zA-Z][a-zA-Z\. ]+$/)
                .messages({ 'string.pattern.base': 'city name must start with alphabet & have no special characters & numbers' }),
            state: Joi.string()
                .trim(true)
                .min(3)
                .max(20)
                .regex(/^[a-zA-Z][a-zA-Z\. ]+$/)
                .messages({ 'string.pattern.base': 'state name must start with alphabet & have no special characters & numbers' }),
            country: Joi.string()
                .trim(true)
                .min(3)
                .max(20)
                .regex(/^[a-zA-Z][a-zA-Z\. ]+$/)
                .messages({ 'string.pattern.base': 'country name must start with alphabet & have no special characters & numbers' }),
            zipCode: Joi.string()
                .trim(true)
                .min(4)
                .max(6)
                .regex(/^[0-9]*$/)
                .messages({ 'string.pattern.base': 'zip code can contain only number' }),
        });
        const result = schema.validate(body);
        return result;
    }
    updatePassword(body) {
        const schema = Joi.object()
            .keys({
                oldPassword: Joi.string().required(),
                newPassword: Joi.string().min(6).max(25).required(),
            })
            .required();
        const result = schema.validate(body);
        return result;
    }
    isEmailExist(email) {
        const schema = Joi.object().keys({
            email: Joi.string().email().required().trim(true),
        });
        const result = schema.validate(email);
        return result;
    }

    checkDuration(body) {
        const schema = Joi.object().keys({
            duration: Joi.number().required(),
        });
        const result = schema.validate(body);
        return result;
    }
    validateNetwork(network) {
        const JoiSchema = Joi.object({
            network: Joi.string().required(),
        }).options({ abortEarly: false });
        return JoiSchema.validate(network);
    }
    validateCode(code) {
        const JoiSchema = Joi.object({
            code: Joi.string().required(),
        }).options({ abortEarly: false });

        return JoiSchema.validate(code);
    }
    validateTwitterData(data) {
        const JoiSchema = Joi.object({
            requestToken: Joi.string().required(),
            requestSecret: Joi.string().required(),
            verifier: Joi.string().required(),
        }).options({ abortEarly: false });

        return JoiSchema.validate(data);
    }
}
 export default new UserValidation();
