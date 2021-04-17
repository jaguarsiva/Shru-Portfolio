<template>
<div class="banner" ref="banner" id="home">

    <img src="../assets/patterns/banner_left_before.png" alt="pattern" class="left-before">
    <img src="../assets/patterns/banner_left_after.png" alt="pattern" class="left-after">
    <img src="../assets/patterns/banner_right_before.png" alt="pattern" class="right-before">
    <img src="../assets/patterns/banner_right_after.png" alt="pattern" class="right-after">

    <div class="container flex">
        <div class="banner-contents">
            <h1>
                Hello! I am <span>S</span>hruthi
            </h1>
            <h2>UI / UX DESIGNER</h2>
            <a href="#" class="btn fancy-btn flex center ml-auto mr-auto">
                Resume
                <div class="icons-sprite download"></div>
            </a>
        </div>
        <div class="banner-image">
            <img src="../assets/shruthi_avatar.png" alt="Shruthi Avatar" class="avatar">
        </div>
    </div>
</div>
</template>

<script>
export default
{
	mounted () {

        var options = { rootMargin: '-200px' } ;
        if( window.innerWidth < 767 )
		{
			options = { threshold: 0.5 };
		}

		const observer = new IntersectionObserver( entries => {
			entries.forEach( entry => {
                this.$store.dispatch('setBannerVisiblity', entry.isIntersecting );
			});
		}, options );
		observer.observe( this.$refs.banner );
	}
}
</script>

<style lang="less" scoped>

.banner
{
    position: relative;
    margin-bottom: 75px;

    & .container { position: relative; }
}

.banner-contents
{
    padding: 250px 15px 125px 100px;
}

h1
{
    font-weight: 700;
    font-size: 55px;
    line-height: 1;
    color: #000000;

    span { font-size: 65px; }
}

h2
{
    font-weight: 700;
    font-size: 65px;
    line-height: 1;
    color: #FFB800;
    margin: 15px 0 40px;
}

.btn.fancy-btn
{
    width: 170px;
    height: 55px;
    background: #FFB800;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    font-weight: 700;
    font-size: 20px;
    line-height: 1;
    color: #000000;
    padding-bottom: 3px;

    &::after { background-color: rgba(0, 0, 0, 0.25); }
}

.download
{
    background-size:  219.8px 190.5px;
    width: 28.5px; height: 25.5px;
    background-position: -7.5px -157.5px;
    margin: 3px 0 0 6px;
}

.banner-image
{
    margin-left: auto;
    margin-top: auto;
}

.avatar
{
    height: 375px;
    width: auto;
}

.left-before, .left-after
{
    position: absolute;
    left: 0;
    top: 115px;
    height: 500px;
}

.right-before, .right-after
{
    position: absolute;
    right: -50px;
    top: 115px;
    height: 500px;
}

.left-before { width: 130px; }

.left-after { width: 190px; animation: fadeLeft 2.5s linear alternate infinite; }

.right-before { width: 610px; }

.right-after { width: 680px; animation: fadeRight 2.5s linear alternate infinite; }

@keyframes fadeLeft
{
    from { opacity: 1; width: 190px; }

    to { opacity: 0; width: 130px; }
}

@keyframes fadeRight
{
    from { opacity: 1; width: 680px; }

    to { opacity: 0; width: 610px; }
}

@media only screen and (max-width: 1440px)
{
    .left-before, .left-after, .right-before, .right-after { height: 400px; top: auto; bottom: 0; }

    .left-after { width: 100px; }

    .left-before { width: 30px; }

    .right-after { width: 600px; }

    .right-before { width: 530px; }

    @keyframes fadeLeft
    {
        from { opacity: 1; width: 100px; }

        to { opacity: 0; width: 30px; }
    }

    @keyframes fadeRight
    {
        from { opacity: 1; width: 600px; }

        to { opacity: 0; width: 530px; }
    }

    .banner-contents { padding: 200px 100px 100px; }

    h1
    {
        font-size: 40px;

        span { font-size: 45px; }
    }

    h2
    {
        font-size: 45px;
        margin: 15px 0 40px;
    }
}

@media only screen and (max-width: 1023px)
{
    .banner-contents
    {
        padding: 100px 0;
        text-align: center;
        width: 100%;
    }

    .left-before, .left-after { height: 300px; top: 50px; bottom: auto; }

    .left-after { width: 150px; }

    .left-before { width: 50px; }

    @keyframes fadeLeft
    {
        from { opacity: 1; width: 150px; }

        to { opacity: 0; width: 50px; }
    }

    .banner-image { margin: 0 auto; }

    .avatar
    {
        height: 375px;
        width: auto;
    }
}

@media only screen and (max-width: 767px)
{
    .left-after, .right-after { display: none; }

    .left-before { width: 80px; }
}

@media only screen and (max-width: 600px)
{
    .banner-contents { padding-bottom: 75px; }

    .left-before { display: none; }

    h1
    {
        font-size: 30px;

        span { font-size: 33px; }
    }

    h2 { font-size: 33px; margin: 20px 0 40px; }

    .btn.fancy-btn { width: 100%; max-width: 300px; }

    .avatar { height: auto; width: 100%; }

    .right-before { height: 300px; width: auto; }
}

</style>