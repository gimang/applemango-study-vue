<template>
  <div class="parent">
    <child>
      <template slot="type1" slot-scope="p1">
        <div>
          <div>{{p1.cx}} + {{p1.cy}} = {{parseInt(p1.cx) + parseInt(p1.cy)}}</div>
        </div>
      </template>
      <template slot="type2" slot-scope="p2">
        <div>
          <div>{{p2.cx}} 더하기 {{p2.cy}} 는 {{parseInt(p2.cx) + parseInt(p2.cy)}}입니다.</div>
        </div>
      </template>
    </child>
  </div>
</template>

<script>
import Child from './components/ScopedSlot'

export default {
  components: {
    Child
  }
}
</script>

<style>
  .parent {
    border: dashed 2px black;
    padding: 5px;
  }
</style>
