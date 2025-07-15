<template>
  <div class="person-center-wrapper">
    <div class="wrapperall-put-center">
      <div class="person-content">
        <div class="user-detail">
          <div class="user-name-pic">
            <div class="user-head-pic">
              <img
                class="user-head-pic-img"
                src="../../assets/images/CGYLogo.png"
                alt="头像"
              />
            </div>
            <span class="user-head-name">{{ loginUserName }}</span>
          </div>
          <div class="user-name-extra"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Loading from '@/components/extend/Loading.vue';

export default {
  name: "App",
  components: {
    // Loading
  },
  data() {
    return {
      loginUserName: "陈冠宇",
    };
  },
  methods: {},
  created() {},
  mounted() {},
};
</script>

<style lang="less">
.person-center-wrapper {
  width: 100%;
  min-height: 100%;
  overflow-y: auto;
  background: rgb(99, 92, 92);
}

.wrapperall-put-center {
  margin: 3.75rem 10% 0 10%;
  background-color: rgb(212, 208, 208);
}

.person-content {
  height: 62.5rem;

  .user-detail {
    height: 3.125rem;

    .user-name-pic {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      height: 100%;

      .user-head-pic {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 0.625rem;
      }

      .user-head-pic-img {
        width: 2.5rem;
        height: 2.5rem;
      }

      .user-head-name {
        color: rgb(33, 66, 110);
        font-size: 1.125rem;
        font-family: Microsoft YaHei, sans-serif;
        margin-left: 0.625rem;
      }
    }
  }
}
</style>
