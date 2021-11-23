import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        countrie: {
            id: 'RU',
            name: 'Россия'
        },
        type: "",
        timespent: "",
        try: "",
        entry: "",
        depature: "",
        errorData: {
            active: false,
            message: '',
        },
        price: 0,
        citizenship: "",
        userName: "",
        surname: "",
        dataOfBirth: "",
    },

    actions: {

    },

    getters:{
        getLocal( state ) {
            return state.countrie.id;
        },
        getTimespent( state ) {
            return state.timespent;
        },
        getTry( state ) {
            return state.try;
        },
        getEntry( state ) {
            return state.entry;
        },
        getDepature( state ) {
            return state.depature;
        },
        getErrorModal( state ) {
            return state.errorData;
        },
        getPrice( state ) {
            return Math.floor( state.price );
        },
        getTypes( state ) {
            return state.type;
        },
        getEndData( state ) {
           return {
              'Имя': state.userName,
              'Фамилия': state.surname,
              'Дата рождения': state.dataOfBirth,
              'Гражданство':state.citizenship.name,
              'Страна въезда': state.countrie.name,
              'Тип визы': state.type.name,
              'Въезд': state.entry,
              'Выезд': state.depature, 
              'Количество заездов': state.try.name,
              'Время обработки': state.timespent.name,
              'Итоговая стоимость': state.price,
           };
        }
    },

    mutations: {
        SET_COUNTRIE( state, payload ) {
            this.state.countrie = payload;
        },
        SET_TYPE( state, payload ) {
            this.state.type = payload;
        },
        SET_TRY( state, payload ) {
            this.state.try = payload;
        },
        SET_TIMESPENT( state, payload ) {
            this.state.timespent = payload;
        },
        SET_DEPATURE( state, payload ) {
            this.state.depature = payload;
        },
        SET_ENTRY( state, payload ) {
            this.state.entry      = payload;
        },
        SET_ERROR_MODAL( state, payload ) {
            this.state.errorData = payload;
        },
        SET_PRICE( state, payload ) {
            const number = payload.price.replace(',', '.');
            state.price += +number;
        },
        SET_MINUS_PRICE( state, payload ) {
            const number = payload.replace(',', '.');
            state.price -= number;
        },
        SET_СITIZENSHIP( state, payload ) {
            state.citizenship = payload;
        },
        SET_USER_DATA( state, payload ) {
            state.userName = payload.userName;
            state.surname  = payload.surname;
            state.dataOfBirth = payload.dataOfBirth;
        },
        SET_PRICE_ZERO( state ) {
            state.price = 0;
        }
    },
})