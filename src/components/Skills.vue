<template>
<div class="skills" id="skills" >

    <img src="../assets/patterns/skills_right.png" alt="pattern" class="skills-right">

    <img src="../assets/patterns/skills_ellipse_before.png" alt="pattern" class="ellipse-before">
    <img src="../assets/patterns/skills_ellipse_after.png" alt="pattern" class="ellipse-after">


    <div class="container flex align-center">

        <img src="../assets/patterns/skills_left.png" alt="pattern" class="skills-left">

        <SideBadge> Skills </SideBadge>

        <img src="../assets/patterns/skills_icons.png" alt="pattern" class="skills-icon">

        <div class="skills-contents" ref="skillsContents">

            <h2 class="sub-headings">Skills</h2>

            <p>See what my design skills are</p>

            <div class="skill-box">
                <h4>Adobe XD</h4>
                <div class="progress-bar">
                    <span class="adobe"></span>
                </div>
            </div>

            <div class="skill-box">
                <h4>Figma</h4>
                <div class="progress-bar">
                    <span class="figma"></span>
                </div>
            </div>

            <div class="skill-box">
                <h4>Prototyping</h4>
                <div class="progress-bar">
                    <span class="prototyping"></span>
                </div>
            </div>

            <div class="skill-box">
                <h4>Wireframing</h4>
                <div class="progress-bar">
                    <span class="wireframing"></span>
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
    mounted () {
        const observer = new IntersectionObserver( entries => {
			entries.forEach( entry => {
                if( entry.isIntersecting )
                    this.$refs.skillsContents && this.$refs.skillsContents.classList.add('show');
                else
                    this.$refs.skillsContents && this.$refs.skillsContents.classList.remove('show');

			});
		}, { threshold: '0.5' } );
		observer.observe( this.$refs.skillsContents );
    },
}
</script>
<style lang="less" scoped>

.skills
{
    position: relative;
    margin: 100px 0;
    padding-bottom: 50px;

    .container { position: relative; justify-content: space-around; }

    h2::after { width: 60px; }
}

p
{
    font-weight: 600;
    font-size: 25px;
}

.skill-box
{
    margin-top: 30px;

    h4
    {
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 10px;
    }

    .progress-bar
    {
        width: 500px;
        height: 35px;
        background: #FFE9AF;
        border-radius: 30px;

        span
        {
            display: block;
            width: 60px;
            height: 100%;
            background: #FFB800;
            border-radius: 30px;
            transition: width 1.25s linear;
        }
    }
}

.skills-contents.show .skill-box
{
    .progress-bar
    {
        span.adobe { width: 90%; }

        span.figma { width: 80%; }

        span.prototyping { width: 70%; }

        span.wireframing { width: 85%; }
    }
}

.skills-left
{
    position: absolute;
    z-index: -1;
    height: 250px;
    top: 10px; left: -80px;
}

.skills-right
{
    position: absolute;
    top: -100px; right: 0;
    z-index: -1;
    height: 400px;
}

.ellipse-before, .ellipse-after
{
    position: absolute;
    left: 0;
    bottom: -25px;
}

.ellipse-before { width: 400px; height: 500px; }

.ellipse-after { width: 500px; height: 550px; animation: ellipse 2.5s linear alternate infinite; }

@keyframes ellipse
{
    from { opacity: 1; width: 500px;  height: 550px;  }

    to { opacity: 0; width: 400px;  height: 500px; }
}

.skills-icon { height: 500px; }

@media only screen and (max-width: 1440px)
{
    .skills { padding-bottom: 0; }

    .skill-box .progress-bar { width: 400px; }

    .skills-icon { height: 400px; }

    .skills-left { height: 200px; }

    .skills-right { height: 300px; }

    .ellipse-before, .ellipse-after { bottom: 0; }

    .ellipse-after { width: 400px; height: 450px; }

    .ellipse-before { width: 300px; height: 400px; }

    @keyframes ellipse
    {
        from { opacity: 1; width: 400px;  height: 450px;  }

        to { opacity: 0; width: 300px;  height: 400px; }
    }
}

@media only screen and (max-width: 1023px)
{
    .skills { margin-top: 0; }

    .skills-left { top: -25px; }

    .skills-right { top: auto; bottom: 0; }

    .ellipse-before, .ellipse-after { bottom: auto; top: 50px; }

    .skills-icon { margin-bottom: 75px; }

    .container { flex-direction: column; }

    .skills-contents { width: 100%; max-width: 600px; }

    .skill-box .progress-bar
    {
        width: 100%;
        max-width: 600px;
    }

    p { text-align: center; }
}

@media only screen and (max-width: 767px)
{
    .skills-left { display: none; }

    .skills-right { top: 0; bottom: auto; }

    .skills-icon { width: 100%; height: auto; order: 2; margin: 75px 0 0; max-width: 350px;  }

    .ellipse-before { bottom: 0; top: auto; height: 350px; width: auto; }

    .ellipse-after { display: none; }

    .skill-box h4 { padding-left: 15px; }

    p
    {
        font-weight: 400;
        font-size: 20px;
        line-height: 1.5;
        margin-bottom: 50px;
    }
}

</style>