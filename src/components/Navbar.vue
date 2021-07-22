<template>
<nav :class="{ 'sticky': !bannerVisiblity }">

    <div class="container flex justify-btw align-center">

        <router-link to="/" @click.native="scrollToTop">
            <img src="../assets/logo.png" alt="Shruthi's Portfolio logo" class="logo">
        </router-link>

        <ul class="nav-links flex align-center" ref="navLinks" :class="{'opened' : menuOpened, 'menu-close': isMenuClosing}">
            <li>
                <a href="/#home" class="links flex align-center active" @click="handleClick" id="homeLink">
                    Home
                </a>
            </li>
            <li>
                <a href="/#about" class="links flex align-center" @click="handleClick" id="aboutLink">
                    About
                </a>
            </li>
            <li>
                <a href="/#skills" class="links flex align-center" @click="handleClick" id="skillsLink">
                    Skills
                </a>
            </li>
            <li>
                <a href="/#works" class="links flex align-center" @click="handleClick" id="worksLink">
                    Works
                </a>
            </li>
            <li>
                <a href="/#blogs" class="links flex align-center" @click="handleClick" id="blogsLink">
                    Blogs
                </a>
            </li>
            <li>
                <a href="/#contact" class="btn fancy-btn flex center" id="contactLink" @click="handleClick" >
                    Contact
                </a>
            </li>
        </ul>

        <button
            class="btn hamburger hamburger--spin"
            type="button"
            :class="{'is-active' : menuOpened}"
            @click="handleHamburgerClick" >
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            menuOpened: false,
            isMenuClosing: false
        }
    },
    computed: {
        ...mapState([
            'bannerVisiblity',
        ])
    },
    methods: {
        handleHamburgerClick() {
            if( this.menuOpened )
            {
                this.isMenuClosing = true;
                document.querySelector('html').classList.remove('no-scroll');
                setTimeout( () => {
                    this.menuOpened = false;
                    this.isMenuClosing = false;
                }, 500);
            }
            else
            {
                this.menuOpened = true;
                document.querySelector('html').classList.add('no-scroll');
            }
        },
        handleClick(e) {
            this.$refs.navLinks.querySelector('a.active').classList.remove('active');
            e.target.classList.add('active');

            if( this.menuOpened )
            {
                // close menu
                this.isMenuClosing = true;
                document.querySelector('html').classList.remove('no-scroll');
                setTimeout( () => {
                    this.menuOpened = false;
                    this.isMenuClosing = false;
                }, 500);
            }
        },
        scrollToTop() { window.scrollTo(0, 0); }
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
        position: fixed;
        top: 0; left: 0;
        animation: open 0.5s ease;
    }

    .container
    {
        height: 100%;
        width: 100%;
        max-width: 100%;
        padding: 0 50px;
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

        &:first-child {
            margin-left: 0;
        }

        a.links
        {
            height: 40px;
            font-size: 20px;
            line-height: 30px;
            font-weight: 500;
            padding: 0 15px;
            display: block;
            color: rgba(0, 0, 0, 0.5);
            position: relative;

            &.active, &:hover, &:focus
            {
                color: #000;

                &::after
                {
                    content: '';
                    position: absolute;
                    width: 100%; height: 4px;
                    border-radius: 4px;
                    bottom: 0px; left: 0;
                    background-color: #FFB800;
                }
            }
        }

        .btn.fancy-btn
        {
            margin-left: 50px;
            font-size: 20px;
            font-weight: 500;
            width: 184px;
            height: 53px;
            box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
            background: #FFB800;
            border-radius: 10px;
            color: black;

            &.active::after, &:hover::after, &:focus::after {
                transform: scaleX(1);
            }
        }
    }
}

@media only screen and (min-width: 1250px)
{
    .hamburger { display: none; }
}

@media only screen and (max-width: 1400px)
{
    .nav-links li .btn.fancy-btn { margin-left: 0; }
}

@media only screen and (max-width: 1250px)
{
    .nav-links { display: none; }

    nav .container { padding-right: 0; padding-left: 10px; }

    .hamburger
    {
        height: 110px; width: 100px;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.15s linear, filter 0.15s linear;
        background-color: #FFB800;
    }

    .hamburger-box
    {
        width: 35px;
        height: 24px;
        display: inline-block;
        position: relative;
    }

    .hamburger-inner
    {
        display: block;
        top: 50%;
        margin-top: -2px;
        background-color: #ffffff;
        color: #ffffff;
    }

    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after
    {
        width: 30px;
        height: 4px;
        border-radius: 4px;
        position: absolute;
        transition: transform 0.15s ease;
    }

    .hamburger-inner::before, .hamburger-inner::after
    {
        content: "";
        width: 40px;
        display: block;
        background-color: currentColor;
    }

    .hamburger.is-active .hamburger-inner { width: 40px; }

    .hamburger-inner::before { top: -10px; }

    .hamburger-inner::after { bottom: -10px; }

    .hamburger--spin .hamburger-inner
    {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin .hamburger-inner::before
    { transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }

    .hamburger--spin .hamburger-inner::after
    {
        transition: bottom 0.1s 0.25s ease-in,
                transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    .hamburger--spin.is-active .hamburger-inner
    {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .hamburger--spin.is-active .hamburger-inner::before
    {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
    }

    .hamburger--spin.is-active .hamburger-inner::after
    {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    .nav-links.opened
    {
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: calc(100vh - 100px); width: 100vw;
        background-color: #ffffff;
        position: absolute;
        top: 100px; left: 0;
        z-index: 3;
        overflow: hidden;
        box-shadow: inset 0px 0px 12px rgba(0, 0, 0,0.25);
        animation: menu-open-anm 0.5s ease;

        li
        {
            margin-left: 0;

            a.links
            {
                width: 100vw; height: 60px;
                margin: 0; padding: 0;
                display: -webkit-flex;
                display: -ms-flexbox;
                display: flex;
                color: #000;
                padding: 12px 12px;
                border-bottom: 3px solid #FFB800;

                &.active, &:hover
                {
                    color: black;

                    &::after { display: none; }
                }
            }

            .btn.fancy-btn
            {
                width: 100vw; height: 60px;
                margin: 0; padding: 0;
                padding: 12px 12px;
                border-bottom: 3px solid #FFB800;
                box-shadow: none;
                background: #fff !important;
                color: #000;
                justify-content: flex-start;
                border-radius: 0;

                &.active::after { transform: scaleX(1); }
            }
        }
    }

    .admin-link { display: block; }

    .nav-links a.router-link-exact-active { color: #000; }

    .nav-links.opened .admin-link a { background-color: #000; color: #ffffff; }

    .nav-links.opened.menu-close { animation: menu-close-anm 0.5s ease; }

    @keyframes menu-open-anm
    {
        from { height: 0px; }

        to { height: calc(100vh - 100px); }
    }

    @keyframes menu-close-anm
    {
        0% { height: calc(100vh - 100px); }

        100% { height: 0px; }
    }
}

@media only screen and (max-width: 425px)
{
    img.logo
    {
        height: auto;
        width: 175px;
    }
}


</style>