<template>
    <div>
        <b-row>
            <b-col class="text-center">
                <b-button v-for="color of colores" :key="color" class="mx-2" :variant="color">{{color}}</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col v-for="item of colores" :key="item" sm="12" md="6" lg="4">
                <card/>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
    name: 'Cards',
    data() {
        return {
            colores: ['primary', 'secondary', 'success', 'danger', 'info', 'warning', 'light', 'dark']
        }
    },
    components: {
        Card
    }
}
</script>