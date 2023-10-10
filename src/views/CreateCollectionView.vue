<script>
import DashboardLayout from '../components/Dashboard Layout/index.vue'
import DashboardHeading from '../components/Dashbpard Components/DashboardHeading.vue'
import WhiteCard from '../shared/WhiteCard.vue';
import Button from '../shared/Button.vue';

export default {
  components: {
    DashboardLayout,
    DashboardHeading,
    WhiteCard,
    Button
  },
};
</script>
<template>
  <DashboardLayout>
    <div>
      <DashboardHeading heading="Create Collection" />
      <WhiteCard :customClass="'mt-[20px]'">
        <div class="border-b border-[#EBEFF2] py-[17px] px-[24px]">
          <p class="text-[#505050] ">Configuration</p>
          <p class="text-[#B4B4B4] font-[500] text-[11px] leading-[18px]">Start configuring your new collection. <span
              class="text-[#07B6BF] underline underline-offset-2">Learn More</span></p>
        </div>
        <div
          class="border-b border-[#EBEFF2] py-[30px] px-[44px] flex items-center h-full justify-between gap-[40px] md:gap-[50px] lg:gap-[100px] md:flex-row flex-col">
          <form class="w-full md:max-w-[303px]">
            <div class="form-group mb-[26px]">
              <label for="email" class="w-full block text-left mb-1 font-medium text-[12px]">Create A Name For This
                Collection</label>
              <input type="email" id="email" class="w-full input-style text-[12px] text-[#B4B4B4]"
                placeholder="Insert Collection Name">
            </div>
            <div class="form-group">
              <label for="email" class="w-full block text-left mb-1 font-medium text-[12px]">Traffic</label>
              <input type="email" id="email" class="w-full input-style text-[12px] text-[#B4B4B4]"
                placeholder="Enter Number of GBs">
            </div>
          </form>
          <WhiteCard :customClass="'min-h-[150px] md:max-w-[485px] w-full'">
            <div class="min-h-[150px] pb-[20px] pt-[30px] px-[24px] flex flex-col justify-center items-center">
              <p class="text-[#505050] font-[500] text-[12px] leading-[18px] mb-[10px] text-center">Amount of GB to assign
                to this
                collection</p>
              <p class="font-[800] text-[40px] leading-[56px] text-[#07B6BF]"> 100 GBs</p>
            </div>
          </WhiteCard>
        </div>
        <div class="border-b border-[#EBEFF2] pb-[32px] pt-[20px] px-[24px] text-center">
          <Button :customClass="'text-[#07B6BF] text-[13px] leading-[20px] font-[600]'">Create Collection</Button>
        </div>

      </WhiteCard>
    </div>
  </DashboardLayout>
</template>