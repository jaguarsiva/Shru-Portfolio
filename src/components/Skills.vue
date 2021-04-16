<template>
<div class="skills" id="skills">
    <div class="container">

        <SideBadge> skills </SideBadge>

        <h2 class="sub-headings">skills</h2>
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

.skills
{
    height: 100vh;

    .container { position: relative; }
}

</style>