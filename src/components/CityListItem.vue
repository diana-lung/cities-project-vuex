<template>
    <div class="city-item"> 
        {{ cityToString(city) }}
        <button @click="$emit('on-edit', city)" :disabled="isEditMode">Edit</button>
        <button @click="deleteCity(city.id)" :disabled="isEditMode">Delete</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'CityItem',
    props: {
        city: Object,
        isEditMode: Boolean,
    },
    computed: {
        ...mapGetters([
        'cityToString'
        ]),
    },
    methods: {
        ...mapActions([
            'deleteCity'
        ]),
    },
}
</script>
   
<style scoped>
.city-item {
    margin-bottom: 10px;
}
button {
    margin-left: 10px;
}
</style>