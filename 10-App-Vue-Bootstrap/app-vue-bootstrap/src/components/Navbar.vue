<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="dark">
            <b-container>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-navbar-brand href="#">NavBar</b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/" exact>Home</b-nav-item>
                        <b-nav-item to="/about">About</b-nav-item>
                        <b-nav-item to="/grid">Grid</b-nav-item>
                        <b-nav-item to="/cards">Cards</b-nav-item>
                        <b-nav-item to="/form">Form</b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>