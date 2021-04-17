<template>
<nav :class="{ 'sticky': !bannerVisiblity }">

    <div class="container flex justify-btw align-center">

        <router-link to="/">
            <img src="../assets/logo.png" alt="Shruthi's Portfolio logo" class="logo">
        </router-link>

        <ul class="nav-links flex align-center" ref="navLinks">
            <li>
                <a href="#home" class="links flex align-center active" @click="handleClick" id="homeLink">
                    Home
                </a>
            </li>
            <li>
                <a href="#about" class="links flex align-center" @click="handleClick" id="aboutLink">
                    About
                </a>
            </li>
            <li>
                <a href="#skills" class="links flex align-center" @click="handleClick" id="skillsLink">
                    Skills
                </a>
            </li>
            <li>
                <a href="#works" class="links flex align-center" @click="handleClick" id="worksLink">
                    Works
                </a>
            </li>
            <li>
                <a href="#blogs" class="links flex align-center" @click="handleClick" id="blogsLink">
                    Blogs
                </a>
            </li>
            <li>
                <a href="#contact" class="btn fancy-btn flex center" id="contactLink">
                    Contact
                </a>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'bannerVisiblity',
        ])
    },
    methods: {
        handleClick(e) {
            this.$refs.navLinks.querySelector('a.active').classList.remove('active');
            e.target.classList.add('active');
        }
    },
};

</script>

<style lang="less" scoped>

nav
{
    width: 100%;
    height: 110px;
    position: relative;
    z-index: 3;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);

    &.sticky
    {
        position: sticky;
        top: 0; left: 0;
        animation: open 0.5s ease;
    }

    .container
    {
        height: 100%;
    }
}

@keyframes open
{
    from { transform: translateY(-110px); }

    to { transform: translateY(0); }
}

img.logo
{
    height: 75px;
}

.nav-links
{
    li
    {
        margin-left: 50px;

        a.links
        {
            height: 40px;
            font-size: 21px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.5);
            position: relative;

            &.active, &:hover
            {
                color: black;

                &::after
                {
                    content: '';
                    position: absolute;
                    width: 72px; height: 3.5px;
                    border-radius: 4px;
                    bottom: 0px; left: -4px;
                    background-color: #FFB800;
                }
            }

        }

        .btn.fancy-btn
        {
            margin-left: 30px;
            font-size: 21px;
            font-weight: 700;
            padding-bottom: 3px;
            height: 50px; width: 130px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
            background: #FFB800;
            border-radius: 15px;
            color: black;

            &.active::after { transform: scaleX(1); }
        }
    }
}

</style>