<template>
    <div>
        <div class="about-hero" id="about">
            <b-container class="d-flex flex-column align-items-center justify-content-center">
                <h4 class="presentation" v-html="$root.translate('index.presentation')" />
                <div
                    class="presentation-description text-center font-weight-light"
                    v-html="$root.translate('index.presentation_description')"
                />
            </b-container>
        </div>
        <div
            class="skills-hero d-flex flex-column align-items-center justify-content-center mb-3"
            id="skills"
        >
            <div class="skills-cards">
                <div class="skills-card">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="text-center">
                            <img class="skill-icon" src="/images/frontend.png" alt="frontend" />
                        </div>
                        <b class="text-center my-3 f-20">Frontend</b>
                        <span
                            class="text-center my-3"
                            v-html="$root.translate('index.skill_frontend_title')"
                        />
                        <b
                            class="text-center text-primary"
                            v-html="$root.translate('index.technologies')"
                        />
                        <p class="text-center">HTML, CSS & Javascript</p>
                        <span class="text-center my-3">
                            <b
                                class="text-center text-primary my-3"
                                v-html="$root.translate('index.skill_tool')"
                            />
                        </span>
                        <p
                            v-for="(s,i) in skills_frontend"
                            class="mb-0 text-center"
                            :key="i"
                            v-html="s"
                        />
                    </div>
                </div>
                <div class="skills-card middle">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="text-center">
                            <img class="skill-icon" src="/images/mentor.png" alt="frontend" />
                        </div>
                        <b
                            class="text-center my-3 f-20"
                            v-html="$root.translate('index.academic')"
                        />
                        <span
                            class="text-center my-3"
                            v-html="$root.translate('index.academic_title')"
                        />
                    </div>
                </div>
                <div class="skills-card">
                    <div class="d-flex flex-column justify-content-center">
                        <div class="text-center">
                            <img class="skill-icon" src="/images/frontend.png" alt="frontend" />
                        </div>
                        <b class="text-center my-3 f-20">Backend</b>
                        <span
                            class="text-center my-3"
                            v-html="$root.translate('index.skill_backend_title')"
                        />
                        <b
                            class="text-center text-primary"
                            v-html="$root.translate('index.technologies')"
                        />
                        <p class="text-center">PHP, NodeJs, MongoDB, MYSQL, C#, ASP.NET Core & PHP</p>
                        <span class="text-center my-3">
                            <b
                                class="text-center text-primary my-3"
                                v-html="$root.translate('index.skill_tool')"
                            />
                        </span>
                        <p
                            v-for="(s,i) in skills_backend"
                            class="my-0 text-center"
                            :key="i"
                            v-html="s"
                        />
                    </div>
                </div>
            </div>
        </div>''
    </div>
</template>
<script>
export default {
    data() {
        return {
            skills_frontend: ["React", "Vue", "NextJs", "NuxtJs", "Bootstrap", "Materialize", "Bulma", "Photoshop CC", "Visual Studio Code"],
            skills_backend: ["Laravel", "Magento", "Express", "Wordpress", "Visual Studio Code"]
        }
    }
}
</script>