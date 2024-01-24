import express from "express";
import ValidatorFactory from "./validators/ValidatorFactory.js";

const app = express();


app.get('/validate', (req, res) => {
    let id = req.query.id;
    let country_code = req.query.country_code;
    let validator = ValidatorFactory.createValidator(id, country_code);

    if (validator === null) res.send("Invalid country code");
    else {
        let request = validator.validateAndExtractInfo();
        console.log(request);
        if (request.isValid)
            res.send(request.info);
        else
            res.send(request.message);
    }

    res.end()
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
