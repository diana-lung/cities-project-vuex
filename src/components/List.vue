<template>
    <div>
        <div v-if="isEditMode" class="addArea">
            <p>Edit mode is activated!</p>
            <input text="text" v-model="updatedCity.name" />
            <button @click="onSave()">Save</button>
            <button @click="changeMode()">Cancel</button>
        </div>

        <div v-else class="addArea">
            <p>Normal mode is on!</p>
            <input type="text" v-model="newCity.name" />
            <button @click="onAdd()">Add</button>
        </div>

        <div v-for="item in list" :key="item.id">
            <city-list-item 
                :city="item" 
                :is-edit-mode="isEditMode" 
                @on-edit="onEdit"
            />
        </div>
    </div>
</template>

<script>
import CityListItem from './CityListItem.vue';
import uuid from 'uuid';
import { mapActions } from 'vuex';
export default {
    name: 'CityList',
    components: {
    'city-list-item': CityListItem,
    },
    props: {
        list: Array,
    },
    data() {
        return {
            isEditMode: false,
            updatedCity: {
                name: '',
                id: '',
            },
            newCity: {
                id: uuid(),
                name: '',
            },
        }
    },
    methods: {
        ...mapActions([
            'addCity',
            'updateCity'
        ]),
        onEdit(item) {
            this.isEditMode = true;
            this.updatedCity.id = item.id;
            this.updatedCity.name = item.name;
        },
        changeMode() {
            this.isEditMode = false;  
        }, 
        onSave() {
            this.changeMode(),
            this.updateCity({...this.updatedCity});
        },
        onAdd() {
            this.addCity({...this.newCity});
            this.newCity.id = uuid();
            this.newCity.name = '';
        },
    },
}
</script>

<style scoped>
.addArea {
    margin-bottom: 30px;
}
.addArea button {
    margin-left: 10px;
}
</style>