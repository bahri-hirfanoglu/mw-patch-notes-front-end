<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link to="/" class="navbar-brand"><img src="../../assets/img/logo-big.png" width="400px"></router-link>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><router-link to="/" class="nav-link active">Home</router-link></li>
                        <li class="nav-item"><a class="nav-link" href="https://www.roblox.com/groups/12345472/Mirage-World#!/about">Roblox Group</a></li>
                        <li class="nav-item"><a class="nav-link" href="https://discord.gg/r87UYmkUfR">Discord</a></li>
                    </ul>
                </div>
            </div>
			
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Nav',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>