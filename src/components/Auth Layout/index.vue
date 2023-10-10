<script>
import Copyrights from '../../shared/Copyrights.vue';
import AuthHeader from './AuthHeader.vue';
export default {
    components: {
        AuthHeader,
        Copyrights
    },
};
</script>

<template>
    <div class="w-full h-full">
        <div class="main h-full w-full">
            <AuthHeader />
            <div
                class=" content bg-[#F6F7FB] pt-[53px] sm:pt-[102px] pb-[53px] px-[40px] flex justify-between items-center gap-[40px] transition-all duration-300">
                <div class="shadow-auth-main max-w-[948px] lg:w-[948px] rounded-[8px] ">
                    <div class="flex items-center h-full md:flex-row flex-col transition-all">

                        <div
                            class="flex flex-col justify-center transition-all border h-full border-[#E5E5E5] px-[38px] pt-[50px] md:pt-[67px] pb-[67px] md:max-w-[495px] text-center bg-[#505050] rounded-t-[8px] md:rounded-tr-none md:rounded-l-[8px]">
                            <slot name="description"></slot>
                        </div>
                        <div
                            class="flex flex-col justify-center border border-[#E5E5E5] px-[39px] h-full pt-[38px] pb-[25px] w-full  md:max-w-[453px] text-center bg-white md:rounded-r-[8px] md:min-w-[380px] rounded-b-[8px] md:rounded-bl-none">
                            <slot name="form"></slot>
                        </div>
                    </div>

                </div>
                <Copyrights />
            </div>

        </div>
    </div>
</template>
<style scoped>
.content {
    height: calc(100vh - 120px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}
</style>
