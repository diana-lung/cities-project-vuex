import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cities: [ 
            {
                id: 0, 
                name: 'Satu Mare',
            }, 
            {
                id: 1,
                name: 'Arad',
            }, 
            { 
                id: 2,
                name: 'Timisoara',
            }, 
        ],
    },
    getters: {
        getCities: state => {
            return state.cities;
        },
        cityToString: (state) => (city) => {
            const { id, name } = city;
            return `ID: ${id}, Name: ${name}`;
        },
    },
    mutations: {
        addCity: (state, city) => {
            //add new city to cities list
            state.cities.push(city);
        },
        updateCity: (state, city) => {
            //change city name
            let index = state.cities.findIndex(item => item.id === city.id);
            Vue.set(state.cities, index, city);
        },
        deleteCity: (state, id) => {
            //delete city by id
            let index = state.cities.findIndex(item => item.id === id);
            state.cities.splice(index, 1);
        },
    },
    actions: {
        addCity: ({commit}, city) => {
            commit('addCity', city);
        },
        updateCity: ({commit}, city) => {
            commit('updateCity', city);
        },
        deleteCity: ({commit}, city) => {
            commit('deleteCity', city);
        },
    },
});