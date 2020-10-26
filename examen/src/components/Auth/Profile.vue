<template>
  <v-container fill-height v-if="isLoggedIn">
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-img alt="Logo" src="Logo.PNG"></v-img>
                <v-form >
                    <v-card color="#F6F6F6">
                        <v-card-subtitle class=text-center style="color: #020562" >
                            <v-icon size="100" color="green" >done</v-icon >
                        </v-card-subtitle>
                        <v-card-title class="justify-center" style="color: #020562">
                            ¡Validación Exitosa!
                        </v-card-title>
                            
                        <v-card-text  >
                            <div style="background: white; color: #020562">
                                <div class="container">
                                    <h3>Datos verificados:</h3>
                                    <hr />
                                    <h4>Nombre y Apellidos</h4>
                                    <h5 >{{datauser.name}} {{datauser.lastname}}</h5>
                                    <h4>Cédula de Identidad</h4>
                                    <h5>{{datauser.username}}</h5>
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer>
                            </v-spacer>
                            <v-btn  @click.prevent="logout()" style="color: #020562">
                                FINALIZAR
                                <v-icon>arrow_forward</v-icon>
                            </v-btn>
                        </v-card-actions>
                        
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
    <v-container v-else>
        Upss no estas logeado aun.... trata de hacerlo ahorita 
        <router-link to="/login"> Login</router-link>
    </v-container>  
</template>

<script>
export default {
    name: 'perfil',
    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn;
        }
    },
    data: () => ({
        datauser: JSON.parse(localStorage.getItem('token')),     
    }),
    methods: {
    logout() {
      this.$store.dispatch("LOGOUT").then(() => {
        this.$router.push("/login");
      });
    }
  }
  
}
</script>

<style>
    h4{
        font-weight: normal;
        line-height : 30px;
    }

    h5 {
       font-weight: normal;
       color: black; 
    }


</style>