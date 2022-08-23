<!-- html -->
<template>
  <!-- html -->
  <div class="testBacktop">
    <c-backtop right="10" bottom="5" target=".testBacktop">
      <div class="slot-class">
        <i class="c-icon-arrow-up"></i>
      </div>
    </c-backtop>
  </div>
</template>

<!-- js -->
<script setup scoped>
import { onMounted, ref } from "vue";
onMounted(() => {
  for (let i = 0; i < 10; i++) {
    const p = document.createElement("p");
    p.innerText = "↓___scroll___↓";
    document.querySelector(".testBacktop").appendChild(p);
  }
});
</script>
<style lang="scss" scoped>
.testBacktop {
  max-height: 400px;
  border: 1px solid #f0f0f0;
  padding: 10px;
  overflow-y: scroll;
  position: relative;
  perspective: 0;

}


.slot-class {
  background-color: $info;
  color: white;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  font-weight: bold;
  line-height: 1;
  text-align: center;

  i {
    font-size: 35px;
  }
}
</style>