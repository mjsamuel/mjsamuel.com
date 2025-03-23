<template>
  <div id="canvas"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { CanvasSpace, Pt, Group } from "pts";

onMounted(() => {
  var space = new CanvasSpace("#canvas").setup({ bgcolor: "white" });
  var form = space.getForm();
  space.add({
    start: (bound) => {},

    animate: (time, ftime) => {
      form.point(space.pointer, 10);
    },

    action: (type, x, y) => {},
  });
});
</script>
