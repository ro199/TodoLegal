<template>
    <v-container fill-height>
        
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-img alt="Logo" src="Logo.PNG"></v-img>
                <v-form >
                    <v-card color="#F6F6F6">
                        <v-card-title class="justify-center" style="color: #020562">
                            Bienvenido
                        </v-card-title>
                        <v-card-subtitle class=text-center style="color: #020562; font-size: 12px" >
                            Por favor ingresar a tu cuenta ingresando tu número de cédula y contraseña. 
                            Si no tienes una cuenta en TodoLegal, puedes crear una Gratis
                        </v-card-subtitle>
                        <v-alert
                            color="error"
                            :value="error"
                        >
                        La cédula o la contraseña son incorrectas. Por favor vuelve a intentar.
                        </v-alert>
                        <v-card-text>
                            <v-text-field round
                                v-model="username"
                                name="login"
                                label="Cédula de Identidad"
                                type="text"
                                
                            >
                                <v-tooltip slot="append" bottom>
                                    <template slot="activator" slot-scope="{ on }">
                                        <v-icon slot="activator" v-on="on">info</v-icon>
                                    </template>
                                    <span>Tu cédula debe encontrarse vigente para ingresar al sistema</span>
                                </v-tooltip>
                            </v-text-field>

                            <v-text-field
                                v-model="password"
                                name="password"
                                label="Contraseña"
                                type="password"
                                
                            >

                            </v-text-field>
                        </v-card-text>
                        <router-link to="/registro" tag="p" style="color: #020562; text-align:center; font-size: 11px;">No tengo cuenta, crear una GRATIS</router-link>
                        
                        <v-card-actions>
                            <v-spacer>
                            </v-spacer>
                            <v-btn  @click.prevent="login()">
                                CONTINUAR
                                <v-icon>arrow_forward</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-form>
            </v-flex>
        </v-layout>
    </v-container>    
</template>

<script>
export default {
    name:"login",
    data: () => ({
        username: '',
        password: '',
        error: false,
    }),
    methods: {
        login(){
            console.log(this.$store);
            this.$store.dispatch("LOGIN", {
                username: this.username,
                password: this.password
            })
            .then(success => {
                console.log(success)
                this.$router.push('/');
            })
            .catch(error => {
                this.error = true;
                console.log(error);
            })
            
        }

    }

}
</script>