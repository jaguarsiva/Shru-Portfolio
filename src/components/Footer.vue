<template>
<div id="contact">
    <div class="top">
        <div class="container">
            <h2 class="sub-headings"> Contact Me </h2>

            <div class="flex justify-btw">
                <div class="left flex col">
                    <div> <span class="icons-sprite email"></span> Email </div>
                    <a href="mailto:shruthijana501@gmail.com">shruthijana501@gmail.com</a>
                </div>
                <div class="mid flex col">
                    <div> <span class="icons-sprite contact"></span> Phone </div>
                    <a href="tel:919789946350">+91-9789946350</a>
                </div>
                <div class="right flex col">
                    <div> <span class="icons-sprite email"></span> Works </div>
                    <a href="https://www.behance.net/shruthijanardh" target="_blank">Behance</a>
                    <a href="https://shruthijana.medium.com" target="_blank">Medium</a>
                    <a href="https://dribbble.com/shruthi_20" target="_blank">Dribble</a>
                </div>
            </div>

        </div>
    </div>

</div>
</template>

<style lang="less" scoped>

footer
{
    margin-top: 175px;
}

h2
{
    font-weight: 500;
    font-size: 30px;
    line-height: 45px;
    display: block;
    width: fit-content;
    margin: 0 auto 60px;
}

.top
{
    background-image: url('../assets/footer_bg.png');
    background-size: cover;
    padding: 25px 0 50px;
}

.left, .mid, .right
{
    div
    {
        font-weight: 600;
        font-size: 25px;
        line-height: 1;
        margin-bottom: 10px;
    }

    a
    {
        font-weight: 400;
        font-size: 20px;
        text-decoration: underline;
        color: #000000;
    }

    .icons-sprite
    {
        display: inline-block;
        margin-right: 5px;
        margin-top: 2px;
    }
}

.email
{
    background-size:  241.3px 209.2px;
    width: 20.6px; height: 18.9px;
    background-position: -92.2px -172.9px;
}

.contact
{
    background-size:  241.3px 209.2px;
    width: 19.8px; height: 20.6px;
    background-position: -56px -172.9px;
}

.left {
    width: 275px;
}

.mid {
    width: 180px;
}

.right
{
    width: 150px;

    a
    {
        font-weight: 500;
        font-size: 20px;
        text-decoration-line: underline;
        color: black;
        margin-bottom: 10px;
    }
}

@media only screen and (max-width: 767px)
{
    .top { padding: 50px 0; }

    .left, .mid
    {
        width: 100%;
        text-align: center;
        margin-bottom: 50px;

        div { font-size: 20px; }

        a { font-size: 18px; }
    }

    .right
    {
        width: 100%;
        text-align: center;

        a { font-size: 18px; }
    }
}

</style>