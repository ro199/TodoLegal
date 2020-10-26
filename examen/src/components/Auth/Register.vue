<template>
    <v-container fill-height>
        
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-img alt="Logo" src="Logo.PNG"></v-img>
                <v-form >
                    <v-card color="#F6F6F6">
                        <v-card-title class="justify-center" style="color: #020562">
                            Crear Cuenta Gratis
                        </v-card-title>
                        <v-card-subtitle class=text-center style="color: #020562; font-size: 12px" >
                            Ingresa los siguientes datos para registrarte como un nuevo usuario
                        </v-card-subtitle>
                        <v-alert
                            color="error"
                            :value="not_same_password"
                            icon="warning"
                        >
                        Las contraseñas no coinciden
                        </v-alert>
                        <v-card-text>
                            <v-text-field round
                                v-model="username"
                                name="login"
                                label="Cédula de Identidad"
                                type="text"
                                
                            >

                            </v-text-field>

                            <v-text-field
                                name="password"
                                label="Contraseña"
                                type="password"
                                :rules="[rules.required]"
                                v-model="password"
                            >

                            </v-text-field>
                            <v-text-field
                                name="password"
                                label="Confirmar Contraseña"
                                type="password"
                                :rules="[rules.required]"
                                v-model="confirm_password"
                                :error="!valid()"
                            >

                            </v-text-field>
                        </v-card-text>
                        
                        <v-card-actions>
                            <v-spacer>
                            </v-spacer>
                            <v-btn  @click.prevent="registro()" style="color: #020562">
                                REGISTRARME
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
    name: 'registro',
    data: () => ({
      not_same_password: false,
      username: '',
      password: '',
      confirm_password: '',
      rules: {
        required: value => !!value || "Requerido"
      }
    }),
    methods: {
      registro(){
        if(this.valid()){
          this.$store.dispatch('REGISTER', {
            username: this.username,
            password: this.password
          })
          .then(({ status }) => {
            console.log(status);
            this.$store.commit("SET_NOTFICATION", {
              display: true,
              text: 'Tu cuenta ha sido creada exitosamente! Ya puedes Logearte.',
              alertClass: "danger"
            });
            this.$router.push('/login')
          })
          .catch( error => {
            console.error(error);
          })
          
        }else{
          this.not_same_password = true;
        }
        
      },
      valid(){
        return this.password === this.confirm_password;
      }
      

    }
}
</script>

<style>

</style>