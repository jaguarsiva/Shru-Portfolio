<template>
<div class="works" id="works">

    <img src="../assets/patterns/works_top_left.png" alt="pattern" class="top-left">
    <img src="../assets/patterns/works_top_right.png" alt="pattern" class="top-right">
    <img src="../assets/patterns/works_bottom_left.png" alt="pattern" class="bottom-left" v-if="type === 'all'">
    <img src="../assets/patterns/works_bottom_right.png" alt="pattern" class="bottom-right" v-if="type === 'all'">

    <div class="container">

        <SideBadge> Works </SideBadge>

        <h2 class="sub-headings">Works</h2>

        <p>A glance of the Projects I have created </p>

        <div class="flex links-box">
            <a href="https://www.behance.net/shruthijanardh" class="flex align-center" target="_blank">
                <div class="icons-sprite behance-colored"></div>
                Behance
            </a>
            <a href="https://dribbble.com/shruthi_20" class="flex align-center" target="_blank">
                <div class="icons-sprite dribble-colored"></div>
                Dribble
            </a>
        </div>

        <div class="tabs-box flex" ref="btns">
            <button class="btn fancy-btn active" @click.prevent="handleButtonClick">All</button>
            <button class="btn fancy-btn" @click.prevent="handleButtonClick">Photography</button>
            <button class="btn fancy-btn" @click.prevent="handleButtonClick">Mobile App</button>
            <button class="btn fancy-btn" @click.prevent="handleButtonClick">Website</button>
            <button class="btn fancy-btn" @click.prevent="handleButtonClick">Poster</button>
        </div>

        <div class="works-outer flex justify-btw">
            <div class="works-box flex center" v-if="type === 'all' || type === 'photography'">
                <img src="../assets/work/work1.png" alt="works">
                <h4 class="flex center">
                    The Bustling City
                    <br />
                    A mobile photography
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'mobile app'">
                <img src="../assets/work/work2.png" alt="works">
                <h4 class="flex center">
                    Hairstyle Generator
                    <br />
                    Mobile app
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'mobile app'">
                <img src="../assets/work/work3.png" alt="works">
                <h4 class="flex center">
                    DIY Home Decors
                    <br />
                    A mobile App
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'website'">
                <img src="../assets/work/work4.png" alt="works">
                <h4 class="flex center">
                    Travel Landing page
                    <br />
                    Website
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'website'">
                <img src="../assets/work/work5.png" alt="works">
                <h4 class="flex center">
                    Winter Clothing Store
                    <br />
                    Website
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'mobile app'">
                <img src="../assets/work/work6.png" alt="works">
                <h4 class="flex center">
                    Fitness Generator
                    <br />
                    Mobile App
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'mobile app'">
                <img src="../assets/work/work7.png" alt="works">
                <h4 class="flex center">
                    Travello- A mobile
                    <br />
                    Travel Guide
                </h4>
            </div>
            <div class="works-box flex center" v-if="type === 'all' || type === 'poster'">
                <img src="../assets/work/work8.png" alt="works">
                <h4 class="flex center">
                    Women’s Rights
                    <br />
                    Awareness Poster
                </h4>
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
    data() {
        return {
            type: 'all'
        }
    },
    methods: {
        handleButtonClick(e) {
            this.$refs.btns.querySelector('.active').classList.remove('active');
            e.target.classList.add('active');
            this.type = e.target.innerText.toLowerCase();
        }
    },
}
</script>
<style lang="less" scoped>

.works
{
    position: relative;
    margin: 150px 0 50px;

    .container
    {
        position: relative;
    }

    h2::after { width: 60px; }
}

p
{
    font-weight: 600;
    font-size: 20px;
}

.links-box
{
    margin: 30px 0 40px;

    a
    {
        font-weight: 500;
        font-size: 23px;
        color: #000000;
        margin-right: 30px;

        &:hover { text-decoration: underline; opacity: 0.8; }
    }

    .icons-sprite { margin-right: 10px; }
}

.behance-colored
{
    background-size:  146.5px 127px;
    width: 34.5px; height: 32px;
    background-position: -107px -5px;
}

.dribble-colored
{
    background-size:  146.5px 127px;
    width: 32px; height: 31.5px;
    background-position: -107px -47px;
}

.tabs-box
{
    .btn.fancy-btn
    {
        background: #FFB800;
        border-radius: 15px;
        width: 175px;
        height: 45px;
        margin-right: 30px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        font-weight: bold;
        font-size: 18px;

        &:hover::after { transform: scaleX(0); }

        &.active::after { transform: scaleX(1); transition: transform 0.3s ease; }
    }
}

.works-outer
{
    margin-top: 100px;
}

.works-box
{
    width: calc(50% - 25px);
    margin-bottom: 75px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;

    img
    {
        height: 100%;
        width: 100%;
    }

    h4
    {
        position: absolute;
        top: 0; left: 0;
        height: 100%;
        width: 100%;
        font-family: 'Oleo Script', cursive;
        font-size: 35px;
        line-height: 1.5;
        text-align: center;
        background: linear-gradient(135deg, #FFFFFF 0%, rgba(190, 190, 190, 0.1) 100%);
        border-radius: 20px;
        visibility: hidden;
    }

    &:hover
    {
        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

        img { filter: blur(15px); }

        h4
        {
            visibility: visible;
        }
    }
}

.top-left
{
    position: absolute;
    z-index: -1;
    height: 800px;
    top: 275px; left: 0;
}

.top-right
{
    position: absolute;
    height: 500px;
    top: 300px; right: 0;
    z-index: -1;
}

.bottom-left
{
    position: absolute;
    z-index: -1;
    bottom: -175px;
    left: 0;
    height: 1000px;
    animation: bl-anm 3s ease alternate infinite;
}

@keyframes bl-anm
{
    from { bottom: -175px; }

    to { bottom: 0px; }
}

.bottom-right
{
    position: absolute;
    height: 700px;
    bottom: 500px; right: 0;
    z-index: -1;
}


</style>