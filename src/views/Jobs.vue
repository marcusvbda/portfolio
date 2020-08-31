<template>
    <div
        class="d-flex flex-row justify-content-center align-items-center flex-wrap my-5"
        id="recent-jobs"
    >
        <b-container class="d-flex flex-column align-items-center justify-content-center">
            <h4 class="text-center f-30" v-html="$root.translate('index.my_recent_jobs')" />
            <div class="d-flex flex-row x-center">
                <div class="text-center">
                    {{$root.translate('index.recent_jobs')}}
                    <b class="ml-2">
                        <router-link
                            to="/contact"
                            class="text-primary"
                            v-html="$root.translate('navbar.sayhello')"
                        />
                    </b>
                </div>
            </div>
            <div class="d-flex flex-row x-center job-list">
                <a
                    class="job-item cursor-pointer"
                    href="https://mudascarvalho.com.br"
                    target="_blank"
                    :style="{backgroundImage: `url(/images/jobs/mudas_carvalho.png)` }"
                >
                    <div class="title">Mudas Carvalho</div>
                </a>
                <a
                    class="job-item cursor-pointer"
                    href="https://www.mmcars.com.br"
                    target="_blank"
                    :style="{backgroundImage: `url(/images/jobs/mmcars.png)`}"
                >
                    <div class="title">MM Cars & MM Zoo</div>
                </a>
                <div
                    class="job-item cursor-pointer"
                    :style="{backgroundImage: `url(/images/jobs/leads.png)`, backgroundPosition: 'left' }"
                >
                    <div class="title">Ezcore Leads CRM</div>
                </div>
                <div
                    class="job-item cursor-pointer"
                    :style="{ backgroundImage: `url(/images/jobs/prisma.png)`, backgroundPosition: 'left' }"
                >
                    <div class="title">Ezcore Prisma ERP</div>
                </div>
                <div
                    class="job-item cursor-pointer"
                    :style="{ backgroundImage: `url(/images/jobs/payt.png)`, backgroundPosition: 'left' }"
                >
                    <div class="title">Payt Ecommerce</div>
                </div>
            </div>
        </b-container>
    </div>
</template>