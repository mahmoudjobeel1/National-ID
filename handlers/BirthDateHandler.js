import Handler from "./Handler.js";

export class BirthDateHandler extends Handler {

    handle(request) {
        let birth_year = this.getBirthYear(request.nationalID.substring(0, 3));
        let birth_month = parseInt(request.nationalID.substring(3, 5));
        let birth_day = parseInt(request.nationalID.substring(5, 7));


        if (birth_month > 12 || birth_month == 0) {
            request.isValid = false;
            request.message = "Invalid National ID -> Birth Month is invalid";
            return;
        }

        let month_days= new Date(2021, birth_month , 0).getDate();
        if (birth_day > month_days || birth_day === 0) {
            request.isValid = false;
            request.message = "Invalid National ID -> Birth Day is invalid";
            return;
        }


        let birth_date = new Date((birth_year, birth_month, birth_day));
        let today_date = new Date();
        if (birth_date > today_date) {
            request.isValid = false;
            request.message = "Invalid National ID -> Birth Date is in the future";
            return;
        }

        request.info.birth_date = birth_year + "-" + birth_month + "-" + birth_day;

        if (this.nextHandler)
            this.nextHandler.handle(request);
    }

    getBirthYear(year_string) {
        let century = parseInt(year_string[0]) + 17;
        let year = year_string.substring(1, 3);
        return century + year;
    }

}