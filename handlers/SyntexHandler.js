import Handler from "./Handler.js";

export class SyntexHandler extends Handler {

    handle(request) {
        const isOnlyDigits = /^\d+$/.test(request.nationalID);

        if (!isOnlyDigits) {
            request.isValid = false;
            request.message = "Invalid National ID -> Must be a number";
            return;
        }

        if (request.nationalID.length !== 14) {
            request.isValid = false;
            request.message = "Invalid National ID -> Must be 14 digits";
            return;
        }

        if (this.nextHandler)
            this.nextHandler.handle(request);
    }

}