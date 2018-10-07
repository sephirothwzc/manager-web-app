<template>
  <v-app>
    <v-container fluid grid-list-xl>
      <v-layout align-center justify-center row reverse fill-height>
        <v-flex xs12 sm6 align-end flexbox>
          <v-card>
            <v-carousel>
              <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
            </v-carousel>

            <v-card-title primary-title>
              <v-container fluid grid-list-md>
                <div>
                  <h3 class="headline mb-0">{{$t('appTitle')}}</h3>
                  <v-form>
                    <v-layout justify-end row>
                      <v-flex xs12 sm6 lg6 xl6>
                        <v-text-field :label="$t('userName')"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6 lg6 xl6>
                        <v-text-field :label="$t('passWord')"></v-text-field>
                      </v-flex>
                    </v-layout>
                  </v-form>
                </div>
              </v-container>
            </v-card-title>

            <v-card-actions>
              <v-btn flat color="orange" @click="clickSubmit">{{$t('btnSubmit')}}</v-btn>
              <v-btn flat color="orange" @click="clickCancel">{{$t('btnCancel')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
/**
 * 登录
 */
export default {
  data() {
    return {
      userName: undefined,
      passWord: undefined,
      items: [
        {
          src: '/images/carousel/squirrel.jpg'
        },
        {
          src: '/images/carousel/sky.jpg'
        },
        {
          src: '/images/carousel/bird.jpg'
        }
      ]
    }
  },
  methods: {
    /**
     * 确定按钮点击事件
     */
    clickSubmit() {

    },
    /**
     * 取消按钮点击事件
     */
    clickCancel() {

    }
  }
}
</script>

<style scoped>
</style>
