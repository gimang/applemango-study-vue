<template>
  <div>
    <button :class="$style.hand">CSS 모듈을 적용한 버튼</button>
    <button :class="[$style.box, $style.border]">클래스가 여러개 일 때</button>
  </div>
</template>
<script>
export default {
  created() {
    console.log(this.$style);
  }
}
</script>
<style module>
  .hand {
    cursor: pointer;
    background-color: purple;
    color: yellow;
  }
  .box {
    cursor: pointer;
    background-color: white;
  }
  .border {
    border: solid 2px blue;
  }
</style>
