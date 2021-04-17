<template>
    <div class="know-more">

        <img src="../assets/know_more/know_more_top.png" alt="patterns" class="top">
        <img src="../assets/know_more/know_more_bottom.png" alt="patterns" class="bottom">

        <nav ref="nav">
            <div class="container flex align-center">
                 <router-link to="/" @click.native="scrollToTop">
                    <img src="../assets/logo.png" alt="Shruthi's Portfolio logo" class="logo">
                </router-link>
            </div>
        </nav>

        <div class="container pb-100">

            <h3 class="main-heading" ref="header">Know more about Shruthi..</h3>

            <div class="flex justify-btw">
                <div class="box">
                    <h4 class="side-heading">My Design Journey</h4>
                    <p>
                        My vocation venture with Design was not arranged and it coincidentally happened.
                        <br />
                        <br />
                        Holding a Bachelor's certificate in Engineering and that too being a Computer Science Engineer I needed to join the corporate industry directly all along. In the wake of Graduating, one fine day I understood design is the thing that I needed. My interest in Design developed when I began to look at even little subtleties of life from a plan point of view. From small banners on streets to the Apps we use on a regular schedule I began imagining how the plan must be and what can be changed to make it look better.
                    </p>
                </div>
                <div class="box">
                    <h4 class="side-heading">My Perspective of Design</h4>
                    <p>
                        For me the best User experience is the key to success in the design field.
                        <br />
                        <br />
                        All interactions considered, consistent client encounters are brought into the world of associated communications between an individual and an item, which is metronomically, a client and an interface. As a matter of fact UX and UI go hand in hand. So tracing back designers should look in on making encounters that oblige clients' cooperations and reactions, instead of attempting to make new and various encounters that clients can't identify with.
                    </p>
                </div>
            </div>

            <div class="flex justify-btw">
                <div class="box">
                    <h4 class="side-heading">My Movie Intrests</h4>
                    <div class="flex justify-btw">
                        <div class="img-box">
                            <img src="../assets/know_more/movies/movie1.png" alt="movie image" />
                            <span>Harry Potter </span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/movies/movie2.png" alt="movie image" />
                            <span>Padayappa</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/movies/movie3.png" alt="movie image" />
                            <span>Narnia</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/movies/movie4.png" alt="movie image" />
                            <span>ChakDe</span>
                        </div>
                    </div>
                </div>
                <div class="box">
                    <h4 class="side-heading">My Bucket List</h4>
                    <div class="flex justify-btw">
                        <div class="img-box">
                            <img src="../assets/know_more/bucket_list/bucket_list1.png" alt="bucket_list image" />
                            <span>Bungee jumping</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/bucket_list/bucket_list2.png" alt="bucket_list image" />
                            <span>Hot air balloon</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/bucket_list/bucket_list3.png" alt="bucket_list image" />
                            <span>Solo Bike Trip</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/bucket_list/bucket_list4.png" alt="bucket_list image" />
                            <span>Cricket at Lords</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-btw">
                <div class="box">

                    <div class="sub-box">
                        <h4 class="side-heading">My Evolution</h4>
                        <p>
                            The story that began  with the Southern part of India and to be continued all over the world.
                            <br />
                            <br />
                            Born in Salem and brought up in Coimbatore and Chennai but  have my  roots in Tirunelveli. Got me schooling and college done in Chennai.
                        </p>
                    </div>

                    <div class="sub-box">
                        <h4 class="side-heading">My Sports Interest</h4>
                        <div class="flex nowrap align-center">
                            <img src="../assets/know_more/sports.png" alt="sports image" />
                            <p>Being a sports enthusiast I generally love all the sports. But, given a chance that I can play or watch only one sport for the rest of my life I’d choose Cricket. That’s the love I have for the sport. </p>
                        </div>
                    </div>

                </div>
                <div class="box">
                    <h4 class="side-heading">My Inspirations</h4>
                    <div class="flex justify-btw">
                        <div class="img-box">
                            <img src="../assets/know_more/inspirations/inspirations1.png" alt="inspirations image" />
                            <span>APJ Abdul Kalam</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/inspirations/inspirations2.png" alt="inspirations image" />
                            <span>Elon Musk</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/inspirations/inspirations3.png" alt="inspirations image" />
                            <span>Yuvraj Singh</span>
                        </div>
                        <div class="img-box">
                            <img src="../assets/know_more/inspirations/inspirations4.png" alt="inspirations image" />
                            <span>Mark Zuckerberg</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted () {
		const observer = new IntersectionObserver( entries => {
			entries.forEach( entry => {
                if( entry.isIntersecting )
                {
                    this.$refs.nav && this.$refs.nav.classList.remove( 'sticky' );
                }
                else
                {
                    this.$refs.nav && this.$refs.nav.classList.add( 'sticky' );
                }
			});
		}, {  } );
		observer.observe( this.$refs.header );
	},
    methods: {
        scrollToTop() { window.scrollTo(0, 0); }
    },
}
</script>

<style lang="less" scoped>

.know-more
{
    background-color: #FFE9AF;
    padding-bottom: 100px;
    position: relative;
    z-index: 2;
}

nav
{
    height: 110px;
    width: 100%;
    z-index: 3;
    background-color: #FFE9AF;

    &.sticky
    {
        position: fixed;
        top: 0;
        left: 0;
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
        animation: open 0.5s ease;
    }

    .container { height: 110px; }
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

.pb-100 { padding-bottom: 75px; }

h3.main-heading
{
    font-weight: bold;
    font-size: 30px;
    margin-top: 50px;
}

h4.side-heading
{
    font-weight: bold;
    font-size: 25px;
    text-align: center;
    color: #FFB800;
    width: 100%;
    background-color: #000;
    padding: 10px 0;
    border-radius: 6px;
    margin-bottom: 50px;
}

p
{
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
}

.box
{
    width: calc(50% - 40px);
    margin: 40px 0;
}

.img-box
{
    width: calc(50% - 10px);
    margin: 15px 0;

    img
    {
        width: 100%;
        border-radius: 10px;
        box-shadow: 0px 0px 4px rgb(0, 0, 0, 0.1);
    }

    span
    {
        display: block;
        font-weight: bold;
        font-size: 20px;
        text-align: center;
        margin-top: 12px;
    }
}

.sub-box
{
    &:first-child { margin-bottom: 50px; }

    img
    {
        width: 50%;
        margin: 12px;
    }
}

.top
{
    position: absolute;
    left: 0; bottom: 150px;
    height: 90%;
    z-index: -1;
}

.bottom
{
    position: absolute;
    left: 0; bottom: 150px;
    width: 100vw;
    z-index: -1;
    opacity: 0.6;
}

@media only screen and (max-width: 1440px)
{
    .know-more { padding-bottom: 50px; }

    .pb-100 { padding-bottom: 25px; }

    .top, .bottom { bottom: 75px; }
}

@media only screen and (max-width: 1023px)
{
    h3.main-heading { text-align: center; }

    .box
    {
        width: 100%;
        max-width: 767px;
        margin: 40px auto;
    }

    .sub-box:first-child { margin-bottom: 75px; }

    .know-more { padding-bottom: 100px; }

    .pb-100 { padding-bottom: 50px; }

    .top, .bottom { bottom: 125px; }
}

@media only screen and (max-width: 767px)
{
    .img-box
    {
        width: 100%;
        max-width: 500px;
        margin: 20px auto;
    }

    .sub-box
    {
        .flex.nowrap { flex-wrap: wrap; }

        img
        {
            width: 100%;
            max-width: 500px;
            margin: 20px auto;
        }
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