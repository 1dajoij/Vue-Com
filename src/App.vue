<template>
  <router-view/>
</template>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background: $colorA;
  input{
    outline: none;
    border: none;
    padding: 0;
  }
  button{
    border: none;
  }
  ul{
    margin: 0;padding: 0;
    li{
      list-style: none;
    }
  }
  a{
    text-decoration: none;
  }
  div.example{
    margin-left: 164px;
    h2{
      font-size: $fontA;
    }
  }
  .sl{
    text-align: center;
    font-size: $fontC;
    font-weight: lighter;
  }
  .t-left{
    text-align: left;
  }
  .btn{
    color: $colorB;
    font-size: $fontC;
    font-weight: lighter;
    cursor: pointer;
  }
}
</style>
