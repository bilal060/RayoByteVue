<script>
import Button from '../../shared/Button.vue'
export default {
    components: {
        Button
    }
};
</script>

<template>
    <div class="menu-bar bg-[#3D3D3D] h-[40px] px-[50px]">
        <div class="flex items-center h-full gap-3 text-[14px]">
            <Button
                :customClass="'font-bold h-[24px] w-[24px] rounded-[2px] flex items-center justify-center text-[#07B6BF] bg-[#07b6bf12]'">
                <img src="../../assets/icons/backBlueIcon.svg" alt="">
            </Button>
            <p class="text-[#07B6BF] font-[700]">Back to website</p>
            <span class="w-[2px] h-[14px] bg-[#5F5F5F]"></span>
            <p class="text-[#D4D4D4] font-[600]">Contact Us</p>
        </div>
    </div>
    <header class="h-[80px] w-100 px-[50px] py-3 flex justify-between items-center bg-[#28282899]">
        <img src="../../assets/icons/authLogo-sm.svg" alt="logo" class="ssm:block hidden">
        <img src="../../assets/icons/simpleRlogo.svg" alt="logo" class="ssm:hidden block h-[40px]">

        <div class="flex items-center sm:gap-[40px] gap-[24px]">
            <Button
                :customClass="'border-none bg-transparent outline-none font-lg font-semibold text-white'">Register</Button>
            <Button
                :customClass="'font-semibold py-[8px] px-[20px] rounded-[4px] flex items-center justify-center text-white bg-[#07B6BF]'">
                <span class="flex items-center gap-2"> <img src="../../assets/icons/loginIcon.svg" alt="logo" />
                    Login</span>
            </Button>
        </div>
    </header>
</template>
