import express from "express";
import ValidatorFactory from "./validators/ValidatorFactory.js";

const app = express();


app.get('/validate', (req, res) => {
    let id = req.query.id;
    let country_code = req.query.country_code;
    let validator = ValidatorFactory.createValidator(id, country_code);

    if (validator === null) res.send("Invalid country code");
    else {
        if (validator.request.isValid && !validator.request.isValid)
            res.send(validator.request.message);
        else
            res.send(validator.validateAndExtractInfo());
    }

    res.end()
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
