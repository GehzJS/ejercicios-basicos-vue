<template>
    <div>
        <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="my-5 text-center"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary" class="btn-block">Go somewhere</b-button>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>