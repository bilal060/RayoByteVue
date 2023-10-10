<script>
import AuthLayout from '../components/Auth Layout/index.vue'
import CustomInput from '../shared/Input.vue'
import Button from '../shared/Button.vue'
import { ref } from 'vue';
const seeCheck = ref(false)
export default {
    components: {
        AuthLayout,
        CustomInput,
        Button
    },
    data() {
        return {
            seeCheck: false,
            checked: false,
            email: '',
            password: '',
            errors: {
                email: '',
                password: ''
            }
        };
    },
    methods: {
        toggleVisibility() {
            this.seeCheck = !this.seeCheck;
        },
        submitForm() {
            this.errors.email = '';
            this.errors.password = '';

            if (!this.email) {
                this.errors.email = 'Please enter a valid email address.';
            } else if (!this.isValidEmail(this.email)) {
                this.errors.email = 'Invalid email format';
            }
            if (!this.password) {
                this.errors.password = 'Password is required';
            } else if (this.password.length < 6) {
                this.errors.password = 'This field should have at least 6 symbols.';
            }
            if (!this.errors.email && !this.errors.password) {
                this.$router.push('/dashboard');
            }
        },
        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    },
};
</script>
<script setup>
import Checkbox from 'primevue/checkbox';
const terms = ref();
</script>

<template>
    <AuthLayout>
        <template v-slot:description>
            <div>
                <img src="../assets/icons/authlogo.svg" alt="logo" class=" mb-[53px] sm:block hidden">
                <img src="../assets/icons/authlogo-sm.svg" alt="logo" class=" mb-[30px] sm:hidden block">
                <h1 class="text-white font-[800] text-[22px] sm:text-[26px] md:text-[30px]  md:leading-[44px] text-left">
                    Welcome back To The <span class="text-[#EE3889]">Residential</span> User Dashboard
                </h1>
            </div>
        </template>
        <template v-slot:form>
            <div>
                <h1 class="text-[24px] font-[800] mb-2 xs:mb-0 leading-[28px] xs:leading-[36px] text-[#505050]">Log in to
                    your account
                </h1>
                <p class="text-[#505050] text-[13px] font-[400] pb-[25px]">Welcome back, please enter your details</p>
            </div>
            <form @submit.prevent="submitForm"
                class="sm:max-w-[70%] md:max-w-full sm:mx-auto md:mx-0 md transition-all sm:min-w-[346px] md:min-w-full">
                <Button type="button" :customClass="'google-btn w-full'">
                    <img src="../assets/icons/googleIcon.svg" alt="googleIcon">

                    Sign in with Google</Button>
                <div class="or font-[400]">
                    OR
                </div>

                <div class="form-group mb-[16px]">
                    <label for="email" class="w-full block text-left mb-1 font-medium text-[12px]"><span v-if="errors.email"
                            class="invalid-feedback">*</span>Email:</label>
                    <input type="email" id="email" v-model="email" :class="{ 'is-invalid': errors.email }"
                        class="w-full input-style" placeholder="Email">
                    <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
                </div>

                <div class="form-group mb-[16px]">
                    <label for="password" class="w-full block text-left mb-1 font-medium text-[12px]"><span
                            v-if="errors.password" class="invalid-feedback">*</span>Password:</label>
                    <div class="input-style" :class="{ 'is-invalid': errors.password }">
                        <input :type="seeCheck ? 'text' : 'password'" id="password" v-model="password"
                            :class="{ 'is-invalid': errors.password }" class="w-full" placeholder="Password">
                        <span @click="toggleVisibility" class="cursor-pointer">
                            <span v-if="seeCheck">hide</span>
                            <span v-else>see</span>
                        </span>
                    </div>
                    <div v-if="errors.password" class="invalid-feedback">{{ errors.password }}</div>
                </div>
                <div v-if="this.errors.email && this.errors.password"
                    class="text-[#EE3889] text-[14px] font-medium text-left bg-[#ee388917] rounded-[4px] px-[10px] pt-[12px] pb-[9px] mb-[17px] flex items-center gap-2">
                    <img src="../assets/icons/alert-triangle.svg" alt="alert">
                    Please enter the correct email address or
                    password to sign in.
                </div>

                <div class="flex items-start justify-between gap-3 mb-[25px] xs:flex-row flex-col">
                    <div class="flex align-items-center">
                        <Checkbox v-model="terms" inputId="termscheck" name="terms" value="Cheese" />
                        <label for="termscheck" class="text-[12px] text-[#282828] leading-[18px] font-medium text-start">
                            Remember me
                        </label>
                    </div>
                    <RouterLink to="/" class="text-[#07B6BF] text-[12px] leading-[18px]">Forgot Password?
                    </RouterLink>
                </div>

                <Button :attributes="{ type: 'submit' }"
                    :customClass="'font-semibold py-[12px] px-[16px] rounded-[4px] flex items-center justify-center text-white bg-[#07B6BF] w-full'">
                    Log in</Button>

                <div class="text-[14px] text-[#282828] leading-[20px] font-[400] text-center mt-[22px]">Don’t have an
                    account?
                    <RouterLink to="/signup" class="text-[#07B6BF] font-bold">Sign up</RouterLink>
                </div>
            </form>

        </template>


    </AuthLayout>
</template>



