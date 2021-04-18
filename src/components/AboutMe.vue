<template>
<div class="about" id="about">
    <div class="container">

        <SideBadge> About Me </SideBadge>
        <img src="../assets/patterns/about_left.png" alt="pattern" class="about-left">
        <img src="../assets/patterns/about_right.png" alt="pattern" class="about-right">

        <h2 class="sub-headings"> About Me</h2>

        <div class="flex justify-btw">
            <div class="about-box about-box-1">
                <h4 class="head">Reach me</h4>
                <div class="mid">
                    <a href="mailto:shruthijana501@gmail.com">shruthijana501@gmail.com</a>
                    <a href="https://www.linkedin.com/in/shruthi-janardhanan-3870301a5/" target="_blank">LinkedIn</a>
                </div>
                <div class="body">
                    <span>UI/UX Designer</span>
                    <p>A passionate UI designer who wishes to develop perfect and well-developed designs that are user-friendly. The obsession for a perfect and seemless design in any app I used made me choose this path as my career.  </p>
                </div>
            </div>
            <div class="about-box about-box-2">
                <h4 class="head">Know me</h4>
                <div class="mid">
                    <p>
                        I love working on creative designs that can bring in the best User Experience.
                        <router-link :to="{name: 'know-more'}" @click.native="scrollToTop">More</router-link>
                    </p>
                </div>
                <div class="body">
                    <span>Photographer</span>
                    <p>I'm an amature mobile photographic artist who likes to pictorise little detail of life. This journey was inspired by the the clouds that looked beautiful and unique every day I clicked them.</p>
                </div>
            </div>
            <div class="about-box about-box-3">
                <h4 class="head">Connect</h4>
                <div class="mid flex justify-btw align-center">
                    <a href="https://www.instagram.com/shru_thi20/" target="_blank"> <div class="icons-sprite insta"></div> </a>
                    <a href="https://www.behance.net/shruthijanardh" target="_blank"> <div class="icons-sprite behance"></div> </a>
                    <a href="https://shruthijana.medium.com" target="_blank"> <div class="icons-sprite medium"></div> </a>
                    <a href="https://dribbble.com/shruthi_20" target="_blank"> <div class="icons-sprite dribble"></div> </a>
                </div>
                <div class="body">
                    <span>Doodler</span>
                    <p>The unescapable urge to put pen to paper staggered the inital steps to scribble things on paper and then later, made me give life to the thoughts deep down my heart into a Doodle. </p>
                </div>
            </div>
        </div>
    </div>

</div>
</template>

<script>
import SideBadge from '@/components/SideBadge.vue';

export default {
    components: {
        SideBadge,
    },
    methods: {
        scrollToTop() { window.scrollTo(0, 0); }
    }
}
</script>

<style lang="less" scoped>

.about
{
    margin: 75px 0;

    .container { position: relative; }
}

.about-box
{
    width: 30%;
    margin: 20px 0;
}

.head
{
    text-align: center;
    width: 100%;
    height: 50px;
    background: #000000;
    border-radius: 10px;
    font-weight: 600;
    font-size: 22px;
    line-height: 50px;
    color: #FFB800;
}

.mid
{
    padding: 40px 0;
    height: 175px;

    a, p
    {
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5;
    }

    a
    {
        color: #000;
        text-decoration: underline;
        transition: transform 0.3s ease;

        .about-box-1 & { display: block; }

        .about-box-3 &:hover { transform: scale(1.2, 1.2); }
    }

    p { text-align: justify; }
}


.insta
{
    background-size:  201.4px 174.6px;
    width: 56.4px; height: 55px;
    background-position: -6.9px -75.6px;
}

.behance
{
    background-size:  201.4px 174.6px;
    width: 56.4px; height: 55px;
    background-position: -6.9px -6.9px;
}

.medium
{
    background-size:  201.4px 174.6px;
    width: 56.4px; height: 55px;
    background-position: -77px -75.6px;
}

.dribble
{
    background-size:  201.4px 174.6px;
    width: 56.4px; height: 55px;
    background-position: -77px -6.9px;
}

.body
{
    height: 250px;
    padding: 25px 30px;
    background: #FFE9AF;
    border-radius: 10px;

    span
    {
        display: block;
        font-weight: 600;
        font-size: 20px;
        line-height: 1.5;
        color: #000000;
        padding-left: 30px;
        margin-bottom: 10px;
    }

    p
    {
        font-weight: 400;
        font-size: 18px;
        line-height: 1.5;
        text-align: justify;
    }
}

.about-left
{
    position: absolute;
    z-index: -1;
    height: 700px;
    top: -90px;
    left: -80px;
}

.about-right
{
    position: absolute;
    height: 180px;
    top: 50px;
    z-index: -1;
    right: -35px;
}

@media only screen and (max-width: 1440px)
{
    .about { margin: 125px 0; }

    .body
    {
        min-height: 240px;
        height: auto;
    }

    .about-box { margin-top: 0; }

    .about-left { height: 300px; }
}

@media only screen and (max-width: 1023px)
{
    .about-box
    {
        width: 100%;
        max-width: 400px;
        margin: 20px auto 50px;
    }

    .mid
    {
        padding: 30px 0;
        height: auto;
        text-align: center;
    }

    .body
    {
        min-height: auto;

        span
        {
            padding-left: 0;
            text-align: center;
        }
    }

    .about-left { top: 0; }

    .about-right { top: auto; bottom: 50px; }
}

@media only screen and (max-width: 767px)
{
    .about { margin-bottom: 75px; }

    .about-right { display: none; }

    .mid
    {
        p { font-size: 20px; font-weight: 400; }

        a { font-size: 20px; }
    }

    .body
    {
        padding: 40px 25px;

        p
        {
            font-weight: 400;
            margin-top: 15px;
        }
    }
}

</style>