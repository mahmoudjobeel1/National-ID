import express from "express";
import ValidatorFactory from "./validators/ValidatorFactory.js";

const app = express();


app.get('/validate', (req, res) => {
    let id = req.query.id;
    let validator = ValidatorFactory.createValidator(id);
    res.send(validator.validateAndExtractInfo());
    
    res.end()
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(
    `Server started on port ${PORT}`));
