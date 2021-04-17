<template>
<div class="blogs" id="blogs">

    <img src="../assets/patterns/blogs_pattern.png" alt="pattern" class="blogs-bottom">
    <div class="container">
        <SideBadge> Blogs </SideBadge>
        <h2 class="sub-headings">Blogs</h2>

        <img src="../assets/patterns/blogs_pattern.png" alt="pattern" class="blogs-top">

        <div class="picture-box">
            <div class="yellow-box"></div>
            <img src="../assets/ola.png" alt="ola image" class="ola ml-auto mr-auto">
        </div>

        <h4>
            A small snippet of how I redesigned the UI of OLA.
        </h4>
        <p>
            I am a passionate UI designer keen on planning pages that furnishes the user with the best client experience. I simply feel client experience is the main standard for any user to return to the equivalent application. One application that has been striking me for quite a while is the OLA cab booking application which a significant number of us utilize regularly. It is quite possibly the most utilized application with 200 million clients all around the world and the most advantageous application for all age gatherings.
        </p>
        <a href="https://shruthijana.medium.com/ui-re-design-story-9acc19abb8db" target="_blank">Read More</a>
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
    position: relative;
    margin-bottom: 100px;

    .container
    {
        position: relative;
    }

    h2::after { width: 60px; }
}

.picture-box
{
    margin: 100px 0 75px;
    position: relative;

    .yellow-box
    {
        position: absolute;
        bottom: -20px; left: 0;
        height: 500px;
        width: 100%;
        background-color: #FFB800;
        border-radius: 20px;
        z-index: -1;
        animation: scaleHeight 3s ease alternate infinite;
    }

    .ola { width: 90%; }
}

@keyframes scaleHeight
{
    from { height: 500px; }

    to { height: 600px; }
}

h4
{
    font-weight: 700;
    font-size: 32px;
}

p
{
    font-weight: 400;
    font-size: 22px;
    line-height: 1.5;
    text-align: justify;
    margin: 20px 0 10px;
}

a
{
    font-weight: 600;
    font-size: 22px;
    color: #000000;

    &:hover { text-decoration: underline; }
}

.blogs-top
{
    position: absolute;
    height: 500px;
    top: 0; left: 50%;
    transform: translateX(-50%);
}

.blogs-bottom
{
    position: absolute;
    height: 400px;
    bottom: -100px; left: -50px;
}

@media only screen and (max-width: 1440px)
{
    .picture-box .yellow-box { height: 450px; }

    @keyframes scaleHeight
    {
        from { height: 450px; }

        to { height: 350px; }
    }

    .blogs-top { height: 300px; }

    .blogs-bottom { height: 200px; bottom: 0;  }
}

@media only screen and (max-width: 1023px)
{
    .blogs-top, .blogs-bottom { display: none; }

    .picture-box { margin-top: 75px; }

    .picture-box .yellow-box { height: 300px; }

    @keyframes scaleHeight
    {
        from { height: 300px; }

        to { height: 400px; }
    }
}

@media only screen and (max-width: 767px)
{
    h4 { font-size: 25px; line-height: 1.5; text-align: center; }

    p { font-size: 18px; margin-bottom: 24px; }

    a { font-size: 18px; }

    .picture-box .yellow-box { display: none; }

    .picture-box .ola { width: 100%; }
}

</style>