<template>
    <vue-template>
        <b-container id="home">
            <div class="d-flex flex-column justify-content-center pt-5">
                <h1 class="mb-0 text-center f-30 mt-5" v-html="$root.translate('index.title')" />
                <h2
                    class="mb-0 font-weight-light text-gray f-20 text-center"
                    v-html="$root.translate('index.description')"
                />
                <div class="d-flex flex-column mt-5 justify-content-center align-items-center">
                    <div class="avatar my-5">
                        <img class="w-100" src="/images/photo.png" alt="avatar" />
                    </div>
                    <a href="#about" class="about-btn">{{$root.translate('index.know_more')}} ...</a>
                    <div class="hero-endsection mt-5">
                        <img class="w-100" src="/images/hero.png" alt="hero" />
                    </div>
                </div>
            </div>
        </b-container>
        <v-about />
        <v-jobs />
    </vue-template>
</template>
<script>
const VueTemplate = () => import('@components/template')
const VAbout = () => import('./About')
const VJobs = () => import('./Jobs')
export default {
    components: {
        VueTemplate,
        VAbout,
        VJobs
    }
}
</script>