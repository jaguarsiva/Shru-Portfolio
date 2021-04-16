<template>
<h3 class="flex side-badge">
    - - - - - - <slot></slot> - - - - - -
</h3>
</template>

<style lang="less" scoped>

h3
{
    font-weight: 600;
    font-size: 20px;
    color: #B2B2B2;
    position: absolute;
    top: 50%; right: -160px;
    transform: rotate(-90deg);
}

</style>