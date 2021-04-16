<template>
<div class="blogs" id="blogs">
    <div class="container">
        <SideBadge> Blogs </SideBadge>
        <h2 class="sub-headings">Blogs</h2>
    </div>
</div>
</template>

<script>
import SideBadge from '@/components/SideBadge.vue';

export default {
    components: {
        SideBadge,
    },
}
</script>

<style lang="less" scoped>

.blogs
{
    height: 100vh;

    .container { position: relative; }
}

</style>