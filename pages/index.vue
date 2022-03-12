<template>
  <div>HomePage</div>
</template>

<script>
export default {
  name: 'HomePage',
  asyncData({ app }) {
    app.head.title = 'Some Title'
    app.head.meta = [
      {
        name: 'keyword',
        content: 'keyword'
      },
      {
        name: 'description',
        content: 'description'
      }
    ],
  },
  data: () => ({
    title: 'HomePage'
  })
}
</script>
