<template>
<div class="works" id="works">
    <div class="container">

        <SideBadge> Works </SideBadge>

        <h2 class="sub-headings">Works</h2>
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

.works
{
    height: 100vh;

    .container { position: relative; }
}

</style>