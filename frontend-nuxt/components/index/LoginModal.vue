/*
 * @Author: yezi
 * @Date: 2018-10-28 17:02:32
 * @Last Modified by: yezi
 * @Last Modified time: 2018-10-28 20:22:32
 * 首页注册modal
 */

<template>
  <v-layout row justify-center>
    <v-dialog v-model="signUpDialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Register</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Name*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email*" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="PasswordConfirm*" type="password" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeModal">Cancle</v-btn>
          <v-btn color="blue darken-1" flat @click.native="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'LoginModal',
  props: {
    signUpDialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    submit() {
      this.$emit('closeModal');
    }
  }
}
</script>

<style>

</style>

