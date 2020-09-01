<template>
    <vue-template>
        <b-container>
            <h1 class="text-center f-30" v-html="$translate('contact.title')" />
            <b-row class="form-contact justify-content-center">
                <b-form
                    @submit.prevent="handleSubmit"
                    class="d-flex flex-wrap col-xs-12 col-md-8"
                    ref="form"
                >
                    <b-col xs="12" md="12">
                        <b-form-group :label="$translate('contact.subject')" label-for="subject">
                            <b-form-input
                                id="subject"
                                v-model="form.subject"
                                :state="validSubject"
                            />
                            <b-form-invalid-feedback
                                :state="validSubject"
                                v-html="$translate('contact.subject.validation')"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col xs="12" md="12">
                        <b-form-group :label="$translate('contact.message')" label-for="message">
                            <b-form-textarea
                                id="message"
                                v-model="form.html"
                                :style="{ resize: 'none' }"
                                rows="5"
                                :state="validText"
                            />
                            <b-form-invalid-feedback
                                :state="validText"
                                v-html="$translate('contact.subject.validation')"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col md="4" sm="12" class="text-center d-flex justify-content-center">
                        <b-button
                            block
                            class="btn-theme mb-5"
                            type="submit"
                            v-html="$translate('contact.send_message')"
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
    computed: {
        validSubject() {
            return ((this.form.subject.length > 5) && (this.form.subject.length < 30))
        },
        validText() {
            return ((this.form.html.length > 20) && (this.form.html.length < 240))
        },
        isValidForm() {
            if (!this.validSubject) return false
            if (!this.validText) return false
            return true
        }
    },
    methods: {
        handleSubmit() {
            if (!this.isValidForm) return //invalid
            window.open(`mailto:bassalobre.vinicius@gmail.com?subject=${this.form.subject}&body=${this.form.html}`)
            this.$nextTick(() => {
                Object.keys(this.form).map(key => this.form[key] = "")
            })
        }
    }
}
</script>