<template>
    <div>
        <nav class="navbar p-0">
            <b-container class="d-flex flex-row align-items-center justify-content-between">
                <div class="w-100 d-flex flex-row justify-content-between py-3">
                    <router-link to="/">
                        <b-img-lazy
                            src="/images/favicon.png"
                            alt="Marcus Vinicius Bassalobre de Assis"
                            v-bind="{width:80,height:80}"
                        />
                    </router-link>
                    <div class="d-none d-lg-block">
                        <div class="d-flex flex-row x-center y-center align-items-center">
                            <language-selector />
                            <router-link
                                to="/contact"
                                class="sayHello"
                                v-html="$root.translate('navbar.sayhello')"
                            />
                        </div>
                    </div>
                    <div class="d-lg-none d-block">
                        <div class="d-flex align-items-center justify-content-center">
                            <language-selector />
                            <div
                                :class="`navbar-burger cursor-pointer hover-opacity hover-scale ${showMenu ? 'is-active' : ''}`"
                                @click="showMenu = !showMenu"
                            >
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-lg-none d-block w-100">
                    <div
                        :class="`mobile-menu-content d-flex flex-column align-items-center justify-content-center ${showMenu ? 'is-active' : ''}`"
                    >
                        <router-link
                            to="/contact"
                            class="sayHello"
                            v-html="$root.translate('navbar.sayhello')"
                        />
                    </div>
                </div>
            </b-container>
        </nav>
        <slot />
        <footer>
            <div class="cardsection">
                <div class="cardcontent">
                    <div class="title" v-html="$root.translate('footer.start_project')" />
                    <div class="description" v-html="$root.translate('footer.interest')" />
                    <div class="button">
                        <router-link
                            to="/contact"
                            class="sayHello"
                            v-html="$root.translate('navbar.sayhello')"
                        />
                    </div>
                </div>
                <div class="social-icon-list">
                    <a href="https://github.com/marcusvbda" target="_blank" class="icon github" />
                    <a
                        href="https://www.linkedin.com/in/mvbassalobre"
                        target="_blank"
                        class="icon linkedin"
                    />
                    <a
                        href="https://twitter.com/mvbassalobre"
                        target="_blank"
                        class="icon twitter"
                    />
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
const LanguageSelector = () => import("@components/languageSelector.vue")
export default {
    data() {
        return {
            showMenu: false
        }
    },
    components: {
        LanguageSelector
    },
}
</script>


<style scoped lang="scss">
.navbar-burger {
    margin: 1em;
    width: 30px;
    &:focus {
        outline: unset;
    }
    &:after,
    &:before,
    span {
        background-color: #620279;
        border-radius: 3px;
        content: "";
        display: block;
        height: 5px;
        margin: 7px 0;
        transition: all 0.2s ease-in-out;
    }
    &.is-active {
        &:before {
            transform: translateY(12px) rotate(135deg);
        }
        &:after {
            transform: translateY(-12px) rotate(-135deg);
        }
        span {
            transform: scale(0);
        }
    }
}
.mobile-menu-content {
    height: 0px;
    overflow: hidden;
    box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 1px 0 0 #e6ecf8;
    transition: all 0.2s ease-in-out;
    &.is-active {
        height: 100px;
    }
}
</style>