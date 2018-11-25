<template>
  <div class="login">
    <div class="login-form">
      <el-form ref="loginForm" :model="form" :rules="formRules">
        <el-form-item label="用户账号" prop="username">
          <el-input v-model="form.username"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password"/>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPass">
          <el-input v-model="form.confirmPass"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">立即创建</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import request from '~/service'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPass: '',
        email: ''
      },
      formRules: {
        username: [
          { required: true, message: '请输入用户账号', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        confirmPass: [
          { required: true, message: '请确认密码', trigger: 'blur' }
        ],
        email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }]
      },
      confirmPass: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          request.post('/api/user/addUser').then(res => {
            console.log(res)
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  .login-form {
    width: 23em;
    margin: 50vh auto 0;
    transform: translateY(-50%);
    padding: 55px 33px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 10px;
  }
}
</style>
