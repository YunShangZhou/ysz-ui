<template>
  <c-backtop right="2" bottom="15" target=".router-view" >
    <div class="slot-class">插槽</div>
  </c-backtop>
</template>

<style lang="scss" scoped>
.slot-class{
  background-color: $other;
  color: white;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  font-weight: bold;
  line-height: 2;
  text-align: center;
}
</style>