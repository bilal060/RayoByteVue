<script>
import Button from "../../shared/Button.vue";
export default {
    components: {
        Button,
    },
};
</script>

<template>
    <div class="mt-[30px]">
        <form action="">
            <p class="font-[400] text-[14px] leading-[20px] capitalize mb-[4px] text-[#505050] dark:text-white">
                Log in information
            </p>
            <div class="flex sm:flex-row flex-col items-center gap-x-[24px] gap-y-[12px] mb-[32px] flex-wrap">
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Username"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Username
                    </label>
                    <input type="text"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Username" id="Username">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="Password"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">Password</label>
                    <input type="password"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Password" id="Password">
                </div>
                <div class="md:max-w-[47%] lg:max-w-[48%] xl:max-w-[31.5%] w-full">
                    <label for="DateofBirth"
                        class="text-[#505050] dark:text-white font-[500] text-[12px] leading-[16px] mb-[4px]">
                        Date of Birth</label>
                    <input type="date" value="10/27/2023"
                        class="form-input w-full font-[400] dark:text-white bg-transparent  dark:border-[#343434] text-[14px] leading-[20px]"
                        placeholder="Date of Birth" id="DateofBirth">
                </div>
            </div>
            <Button
                :customClass="' flex py-[12px] px-[20px] rounded-[4px] items-center justify-center text-white border-2 border-[#07B6BF] bg-black text-[15px] font-[600] h-[48px] md:max-w-[148px] w-full'">
                Save Changes
            </Button>
        </form>
        <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px] mt-[10px]">
            Need to reset your Password? <span class="text-[#07B6BF]">Click here.</span>
        </p>
    </div>
</template>