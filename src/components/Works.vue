<template>
<div class="works" id="works">

    <img src="../assets/patterns/works_top_left.png" alt="pattern" class="top-left">
    <img src="../assets/patterns/works_top_right.png" alt="pattern" class="top-right">
    <img src="../assets/patterns/works_bottom_left.png" alt="pattern" class="bottom-left">
    <img src="../assets/patterns/works_bottom_right.png" alt="pattern" class="bottom-right">

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
            <a href="https://shruthijana.medium.com" class="flex align-center" target="_blank">
                <img src="../assets/medium colored.png" class="md-clred">
                Medium
            </a>
        </div>

        <div class="works-outer flex">
            <a href="https://www.behance.net/gallery/122545153/Website-Cafe"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/cafe.png" alt="works">
                <h4 class="flex center">
                    Cafe - Website
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/122352719/Landing-page-and-Social-media-post"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/zpay.png" alt="works">
                <h4 class="flex center">
                    E-Payment
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/120246243/Covid-Watch-Mobile-App"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/covidapp.png" alt="works">
                <h4 class="flex center">
                    Covid App
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/119696569/YouTube-Online-Learning"
                target="_blank"
                class="works-box flex center"
            >
                <img src="../assets/work/etutor.png" alt="works">
                <h4 class="flex center">
                    E-Tutor- Youtube
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/118031223/Illustrator-World-Cup-Heros"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/msd.png" alt="works">
                <h4 class="flex center">
                    Illustrations
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/115817357/A-Mobile-travel-guide-App"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/travello.png" alt="works">
                <h4 class="flex center">
                    Travel Blog App
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/115444329/Doodle-Art"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/doodles.png" alt="works">
                <h4 class="flex center">
                    Doodles
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/115442065/Womens-Rights-Awareness-Poster"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/woman.png" alt="works">
                <h4 class="flex center">
                    For Women- Poster
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/115341975/Mobile-Fitness-Tracker"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/watch.png" alt="works">
                <h4 class="flex center">
                    Smart watch
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/114864413/A-winter-clothing-store"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/clothing.png" alt="works">
                <h4 class="flex center">
                    Clothing-Website
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/114041181/Travel-Landing-page"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/travel.png" alt="works">
                <h4 class="flex center">
                    Travel - Website
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/113334255/DIY-Home-Decors-App"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/diy.png" alt="works">
                <h4 class="flex center">
                    DIY- Mobile app
                </h4>
            </a>
            <a href="https://www.behance.net/gallery/112400129/A-Mobile-Photography"
                target="_blank"
                class="works-box flex center">
                <img src="../assets/work/photo.png" alt="works">
                <h4 class="flex center">
                    Mobile Photography
                </h4>
            </a>
        </div>

    </div>
</div>
</template>

<script>
import SideBadge from '@/components/SideBadge.vue';

export default {
    components: {
        SideBadge,
    }
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

    h2::after { width: 100px; }
}

p {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
}

.links-box
{
    margin: 30px 0 40px;

    a
    {
        font-weight: 500;
        font-size: 23px;
        color: #000000;

        &:not(:last-child) { margin-right: 40px };

        &:hover { text-decoration: underline; opacity: 0.8; }
    }

    .icons-sprite, .md-clred { margin-right: 10px; }

    .md-clred { width: 34.5px; height: 32px; }
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

.works-outer {
    margin-top: 100px;
    justify-content: space-around;
}

.works-box
{
    width: 31%;
    margin: 0 0 50px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    border-radius: 10px;

    img
    {
        height: 100%;
        width: 100%;
    }

    h4
    {
        position: absolute;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        color: #000;
        width: 85%;
        padding: 15px 10px;
        background: #fff;
        font-weight: 500;
        font-size: 30px;
        line-height: 45px;
        text-align: center;
        border-radius: 5px;
        opacity: 0;
        transition: opacity 0.5s linear;
    }

    &:hover, &:focus, &:active {

        box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.25);

        img { filter: blur(15px); }

        h4 { opacity: 1; }
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

@media only screen and (max-width: 1440px)
{
    .tabs-box .btn.fancy-btn { width: 165px; }

    .top-left { height: 600px; }

    .top-right { height: 300px; }

    .bottom-left { height: 700px; }

    .bottom-right { height: 500px; }
}

@media only screen and (max-width: 1023px)
{
    .works { text-align: center; margin-top: 50px; }

    .works-box { width: calc(50% - 10px); }

    .links-box { justify-content: center; }

    .top-right, .top-left { display: none; }
}

@media only screen and (max-width: 767px)
{
    .works { margin-bottom: 25px; }

    .works-box { width: 100%; max-width: 500px; margin-left: auto; margin-right: auto; }

    .bottom-left, .bottom-right { display: none; }

    .links-box a { font-size: 20px; font-weight: 600; }

    p { font-size: 20px; line-height: 1.5; font-weight: 400; }
}


</style>