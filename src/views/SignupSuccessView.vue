<script>
import AuthLayout from '../components/Auth Layout/index.vue'
import Button from '../shared/Button.vue'

export default {
    components: {
        AuthLayout,
        Button
    },
};
</script>


<template>
    <AuthLayout>
        <template v-slot:description>
            <div>
                <img src="../assets/icons/authlogo.svg" alt="logo" class=" mb-[53px] sm:block hidden">
                <img src="../assets/icons/authlogo-sm.svg" alt="logo" class=" mb-[30px] sm:hidden block">

                <h1 class="text-white font-[800] text-[22px] sm:text-[26px] md:text-[30px]  md:leading-[44px] text-left">
                    Welcome To The <span class="text-[#EE3889]">Residential</span> User Dashboard
                </h1>
            </div>
        </template>

        <template v-slot:form>
            <div>
                <h2 class="mb-[28px] text-[30px] font-[800] leading-[36px] text-[#505050]">
                    Success!
                </h2>
                <p class="mb-[40px] text-[13px] font-[400] leading-[20px] text-[#505050]">
                    We are glad that you are here. Please verify your email before you start using the service.
                </p>
                <!-- <Button type="button"
                    :customClass="'font-semibold py-[12px] px-[16px] rounded-[4px] flex items-center justify-center text-[#07B6BF] border border-[#07B6BF] w-full'">
                    To Login Page </Button> -->
                <RouterLink to="/"
                    class="font-semibold py-[12px] px-[16px] rounded-[4px] flex items-center justify-center text-[#07B6BF] border border-[#07B6BF] w-full'">
                    To Login Page </RouterLink>
            </div>

        </template>


    </AuthLayout>
</template>



