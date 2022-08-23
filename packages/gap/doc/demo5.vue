
<template>
  <c-gap :inline="false">
    <c-gap itemClass="item-extra" boxClass="box-extra" alignItems="flex-start">
      <h1>h1 h1 h1</h1>
      <h2>h2 h2 h2</h2>
      <h3>h3 h3 h3</h3>
      <h4>h4 h4 h4</h4>
    </c-gap>
    <c-gap itemClass="item-extra" boxClass="box-extra" alignItems="center">
      <h1>h1 h1 h1</h1>
      <h2>h2 h2 h2</h2>
      <h3>h3 h3 h3</h3>
      <h4>h4 h4 h4</h4>
    </c-gap>
    <c-gap itemClass="item-extra" boxClass="box-extra" alignItems="flex-end">

      <h1>h1 h1 h1</h1>
      <h2>h2 h2 h2</h2>
      <h3>h3 h3 h3</h3>
      <h4>h4 h4 h4</h4>
    </c-gap>
  </c-gap>
</template>

<style lang="scss" >
.box-extra {
  border: 1px solid $primary;
}

.item-extra {
  border-bottom: 1px solid $warning;
  h1,h2,h3,h4{
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>