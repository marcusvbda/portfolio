<template>
    <vue-template>
        <b-container>
            <h1 class="text-center f-30" v-html="$root.translate('contact.title')" />
            <b-row class="form-contact justify-content-center">
                <b-form @submit.prevent="handleSubmit" class="d-flex flex-wrap col-xs-12 col-md-8">
                    <b-col xs="12" md="12">
                        <b-form-group
                            :label="$root.translate('contact.subject')"
                            label-for="subject"
                        >
                            <b-form-input id="subject" required v-model="form.subject" />
                        </b-form-group>
                    </b-col>
                    <b-col xs="12" md="12">
                        <b-form-group
                            :label="$root.translate('contact.message')"
                            label-for="message"
                        >
                            <b-form-textarea
                                id="message"
                                v-model="form.html"
                                required
                                :style="{ resize: 'none' }"
                                rows="5"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12" class="text-center d-flex justify-content-center">
                        <b-button
                            block
                            class="btn-theme mb-5"
                            type="submit"
                            v-html="$root.translate('contact.send_message')"
                        />
                    </b-col>
                </b-form>
            </b-row>
        </b-container>
    </vue-template>
</template>
<script>
const VueTemplate = () => import('@components/template')
export default {
    components: {
        VueTemplate
    },
    data() {
        return {
            form: {
                subject: "",
                html: ""
            }
        }
    },
    methods: {
        handleSubmit() {
            return window.open(`mailto:bassalobre.vinicius@gmail.com?subject=${this.form.subject}&body=${this.form.html}`)
        }
    }
}
</script>