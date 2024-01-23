import Handler from "./Handler.js";

export class PersonSexHandler extends Handler {

    handle(request) {
        let person_serial_num = parseInt(request.nationalID.substring(9, 13));

        let person_sex = person_serial_num % 2 == 0 ? "Female" : "Male";

        request.info.person_sex = person_sex;

        if (this.nextHandler)
            this.nextHandler.handle(request);
    }

}