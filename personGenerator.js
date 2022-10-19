const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Анна",
            "id_4": "Анастасия",
            "id_5": "Галина",
            "id_6": "Дарья",
            "id_7": "Татьяна",
            "id_8": "Валерия",
            "id_9": "Полина",
            "id_10": "Алена"
        }
    }`,

    middleNameJson: `{
        "count": 10,
        "list": {
            "id_1": "Александрович",
            "id_2": "Михайлович",
            "id_3": "Анатольевич",
            "id_4": "Алексеевич",
            "id_5": "Дмитриевич",
            "id_6": "Николаевич",
            "id_7": "Сергеевич",
            "id_8": "Петрович",
            "id_9": "Павлович",
            "id_10": "Григорьевич"
        }
    }`,

    maleProfessionJson: `{
        "count": 7,
        "list": {
            "id_1": "водитель",
            "id_2": "слесарь",
            "id_3": "инженер",
            "id_4": "преподаватель",
            "id_5": "электрик",
            "id_6": "продавец",
            "id_7": "программист"
        }
    }`,

    femaleProfessionJson: `{
        "count": 7,
        "list": {
            "id_1": "врач",
            "id_2": "певица",
            "id_3": "инженер",
            "id_4": "актриса",
            "id_5": "программист",
            "id_6": "стюардесса",
            "id_7": "психолог"
        }
    }`,

    birthMonthJson: `{
        "count": 12,
        "list": {
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),    

    randomGender: function () { 
            
        let gender = this.randomIntNumber();
        console.log(gender);
            return gender === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;

    },

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
    
    randomFirstName: function () {
        let gender = this.person.gender;
        let firstNameMale = this.randomValue(this.firstNameMaleJson);
        let firstNameFemale = this.randomValue(this.firstNameFemaleJson);
        if (gender === this.GENDER_MALE) {
            console.log(firstNameMale);
            return firstNameMale;
        } else {
            console.log(firstNameFemale);
            return firstNameFemale;
        }
        
    },

    randomSurname: function () {
        let gender = this.person.gender;
        let surnameMale = this.randomValue(this.surnameJson);
        let surnameFemale = (this.randomValue(this.surnameJson) + 'а');
         if (gender === this.GENDER_MALE) {
             console.log(surnameMale);
            return surnameMale;
         } else {
             console.log(surnameFemale);
            return surnameFemale;
        }
        
    },
     
    randomMiddleName: function () {
        let gender = this.person.gender;
        let middleNameMale = this.randomValue(this.middleNameJson);
        let middleNameFemale = this.randomValue(this.middleNameJson).replace('ич', 'на');
        if (gender === this.GENDER_MALE) {
            console.log(middleNameMale);
            return middleNameMale;
        } else {
            console.log(middleNameFemale);
            return middleNameFemale;
        }
    },
    
    randomBirthDate: function () {
        let month = this.randomValue(this.birthMonthJson);
        let day;
        if (month === "февраля") {
            day = this.randomIntNumber(28, 1);
        } else if (month === "апреля" || "июня" || "сентября" || "ноября") { 
            day = this.randomIntNumber(30, 1);
        } else {
            day = this.randomIntNumber(31, 1);
        }
        return day + ' ' + month;
    },

    randomBirthYear: function () {
        return this.randomIntNumber(2005, 1960) + ' ' + 'года';
    },

    randomProfession: function () {
        let gender = this.person.gender;
        let maleProfession = this.randomValue(this.maleProfessionJson);
        let femaleProfession = this.randomValue(this.femaleProfessionJson);
        if (gender === this.GENDER_MALE) {
            console.log(maleProfession);
            return maleProfession;
        } else {
            console.log(femaleProfession);
            return femaleProfession;
        }
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.middleName = this.randomMiddleName();
        this.person.birthDate = this.randomBirthDate();
        this.person.birthYear = this.randomBirthYear();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};