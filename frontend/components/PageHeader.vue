<template>
  <el-header>
    <div class="logo">
      <img
        src="@/assets/images/halloween_flying.png"
        alt="logo">
      <span>LC Forum</span>
    </div>
    <ul class="nav">
      <li><a>首页</a></li>
      <li><a>动态</a></li>
      <li><a>小册</a></li>
      <li><a>开源库</a></li>
      <li><a>活动</a></li>
    </ul>
    <div>
      <el-input
        suffix-icon="el-icon-search"
      />
    </div>
    <div class="publish-btn">
      <el-dropdown split-button type="primary">
        写文章
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>发布沸点</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-badge :value="1" class="item" type="primary">
      <el-button>通知</el-button>
    </el-badge>
    <div class="avatar">
      <el-dropdown trigger="click">
        <img src="@/assets/images/jessica.jpeg" alt="me">
        <el-dropdown-menu slot="dropdown" class="header-dropdown">
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style lang="scss" scoped>
.el-header {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  .logo {
    display: flex;
    margin-left: 30px;
    flex: 1;
    img {
      width: 70px;
      height: 70px;
    }
    span {
      font-size: 30px;
      display: inline-block;
      margin-left: 15px;
    }
  }
  .nav {
    list-style: none;
    padding: 0;
    display: flex;
    flex: 1 1 15%;
    li {
      margin: 0 20px;
    }
  }
  .publish-btn {
    margin: 0 20px;
  }
  .avatar {
    margin-left: 30px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-top: 5px;
    }
  }
}
</style>
<style>
.item .el-badge__content.is-fixed {
  top: 15px;
}
.header-dropdown {
  top: 50px !important;
}
</style>
