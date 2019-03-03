<template>
  <div>
    <v-toolbar flat dense dark color="#42b883">
      <v-toolbar-title>
        {{title || 'Title Here'}}
      </v-toolbar-title>
    </v-toolbar>
    <div class="pl-3 pr-3 pt-2 pd-2">
      <slot>NO CONTENT</slot>
    </div>
  </div>
</template>
<script>
export default {
  props:['title']
}
</script>
