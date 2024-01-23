import Handler from "./Handler.js";

export class BirthPlaceHandler extends Handler {

    goverment_codes = {
        '01': 'Cairo',
        '02': 'Alexandria',
        '03': 'Port Said',
        '04': 'Suez',
        '11': 'Damietta',
        '12': 'Dakahlia',
        '13': 'Ash Sharqia',
        '14': 'Kaliobeya',
        '15': 'Kafr El - Sheikh',
        '16': 'Gharbia',
        '17': 'Monoufia',
        '18': 'El Beheira',
        '19': 'Ismailia',
        '21': 'Giza',
        '22': 'Beni Suef',
        '23': 'Fayoum',
        '24': 'El Menia',
        '25': 'Assiut',
        '26': 'Sohag',
        '27': 'Qena',
        '28': 'Aswan',
        '29': 'Luxor',
        '31': 'Red Sea',
        '32': 'New Valley',
        '33': 'Matrouh',
        '34': 'North Sinai',
        '35': 'South Sinai',
        '88': 'Foreign'
    }

    handle(request) {
        let goverment_code = request.nationalID.substring(7, 9);

        let birth_place = this.goverment_codes[goverment_code];
        console.log(birth_place);

        if(birth_place == null){
            request.info.isValid = false;
            request.info.message = "Invalid National ID -> Birth Place is invalid";
            return;
        }

        request.info.birth_place = birth_place;

        if (this.nextHandler)
            this.nextHandler.handle(request);
    }

}