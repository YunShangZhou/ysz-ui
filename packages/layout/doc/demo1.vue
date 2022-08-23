<template>
    <c-row>
      <c-col :span="12">
        <div class="col-box-2 col-box">12</div>
      </c-col>
      <c-col :span="12">
        <div class="col-box-1 col-box">12</div>
      </c-col>
    </c-row>
    <c-row>
      <c-col :span="8">
        <div class="col-box-1 col-box">8</div>
      </c-col>
      <c-col :span="8">
        <div class="col-box-2 col-box">8</div>
      </c-col>
      <c-col :span="8">
        <div class="col-box-1 col-box">8</div>
      </c-col>
    </c-row>
    <c-row>
      <c-col :span="6">
        <div class="col-box-2 col-box">6</div>
      </c-col>
      <c-col :span="6">
        <div class="col-box-1 col-box">6</div>
      </c-col>
      <c-col :span="6">
        <div class="col-box-2 col-box">6</div>
      </c-col>
      <c-col :span="6">
        <div class="col-box-1 col-box">6</div>
      </c-col>
    </c-row>
    <c-row>
      <c-col :span="4">
        <div class="col-box-1 col-box">4</div>
      </c-col>
      <c-col :span="2">
        <div class="col-box-2 col-box">2</div>
      </c-col>
      <c-col :span="4">
        <div class="col-box-1 col-box">4</div>
      </c-col>
      <c-col :span="6">
        <div class="col-box-2 col-box">6</div>
      </c-col>
      <c-col :span="8">
        <div class="col-box-1 col-box">8</div>
      </c-col>
    </c-row>
</template>

<style lang="scss" scoped>
.col-box {
  height: 34px;
  margin-bottom: 10px;
  text-align: center;
  line-height: 34px;
}

.col-box-1 {
  background-color: #9eaaaf;
  color: #333;
}

.col-box-2 {
  background-color: #505050;
  color: #fff;
}
</style>