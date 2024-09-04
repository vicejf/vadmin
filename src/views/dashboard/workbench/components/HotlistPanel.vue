<template>
  <!-- <Card title="热搜" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template> -->

  <Collapse v-model:activeKey="activeKey" class="!w-full">
    <CollapsePanel key="1" header="百度热搜">
      <div :class="`${prefixCls}__container`">
        <div>每5分钟更新 详细<Switch v-model:checked="ellipsis" /></div>
        <List v-if="hotlist.length">
          <template v-for="item in hotlist" :key="item.index">
            <List.Item>
              <List.Item.Meta>
                <template #description>
                  <div v-if="ellipsis" :class="`${prefixCls}__content`">
                    <!-- Only show description if available -->
                    {{ item.desc || 'No description available' }}
                  </div>
                </template>
                <template #title>
                  <typography-link :class="`${prefixCls}__title`" :href="item.url" target="_blank">
                    {{ item.word }}
                  </typography-link>
                </template>
              </List.Item.Meta>
            </List.Item>
          </template>
        </List>
        <!-- Show a message if hotlist is empty -->
        <p v-else>Loading hotlist data...</p>
      </div>
    </CollapsePanel>
    <CollapsePanel key="2" header="东方财富热榜">
      <div :class="`${prefixCls}__container`">
        <div>每30分钟更新 详细 <Switch v-model:checked="ellipsis" /></div>
        <List v-if="article.length">
          <template v-for="item in article" :key="item.sort">
            <List.Item>
              <List.Item.Meta>
                <template #description>
                  <div v-if="ellipsis" :class="`${prefixCls}__content`">
                    <!-- Only show description if available -->
                    {{ item.summary || 'No description available' }}
                  </div>
                </template>
                <template #title>
                  <typography-link
                    :class="`${prefixCls}__title`"
                    :href="`https://activity1.dingqibao.com.cn/a2/${item.artCode}.html`"
                    target="_blank"
                  >
                    {{ item.artTitle }}
                  </typography-link>
                </template>
              </List.Item.Meta>
            </List.Item>
          </template>
        </List>
        <!-- Show a message if hotlist is empty -->
        <p v-else>Loading hotlist data...</p>
      </div>
    </CollapsePanel>
    <CollapsePanel key="3" header="抖音热点榜">
      <div :class="`${prefixCls}__container`">
        <div>
          更新时间：{{ wordListResponse?.active_time }} <Switch v-model:checked="ellipsis"
        /></div>
        <List v-if="article.length">
          <template v-for="item in wordList" :key="item.sort">
            <List.Item>
              <List.Item.Meta>
                <template #description>
                  <div v-if="ellipsis" :class="`${prefixCls}__content`">
                    <!-- Only show description if available -->
                    {{ item.hot_value || 'No description available' }}
                  </div>
                </template>
                <template #title>
                  <typography-link
                    :class="`${prefixCls}__title`"
                    :href="`https://www.douyin.com/search/${item.word}?type=general`"
                    target="_blank"
                  >
                    {{ item.word }}
                  </typography-link>
                </template>
              </List.Item.Meta>
            </List.Item>
          </template>
        </List>
        <!-- Show a message if hotlist is empty -->
        <p v-else>Loading hotlist data...</p>
      </div>
    </CollapsePanel>
  </Collapse>
  <!-- </Card> -->
</template>
<script lang="ts" setup>
  import {
    Collapse,
    CollapsePanel,
    List,
    TypographyLink,
    // TypographyText,
    Switch,
  } from 'ant-design-vue'
  import { onMounted, ref } from 'vue'
  import { getHotlist, fetchEastMoney, getDyHotSearch } from '@/api/sys/dataview'
  import { HotlistItem, Article, WordListResponse, WordItem } from './data'

  const text = ref('详细')
  const activeKey = ref(['1'])
  const ellipsis = ref(false)
  const hotlist = ref<HotlistItem[]>([])
  const article = ref<Article[]>([])
  const wordList = ref<WordItem[]>([])
  const wordListResponse = ref<WordListResponse | null>(null)
  const prefixCls = 'list-search'

  const fetchHotlist = async () => {
    try {
      const jsonarray = await getHotlist()
      hotlist.value = JSON.parse(jsonarray)
    } catch (error) {
      console.error('Error fetching hotlist:', error)
    }
  }

  const eastMoney = async () => {
    try {
      const eastitem = await fetchEastMoney()
      article.value = JSON.parse(eastitem)
    } catch (error) {
      console.error('Error fetching hotlist:', error)
    }
  }

  const douyinHotsearch = async () => {
    try {
      const douyinlist = await getDyHotSearch()
      wordListResponse.value = JSON.parse(douyinlist)
      wordList.value = wordListResponse.value?.word_list || []
    } catch (error) {
      console.error('Error fetching hotlist:', error)
    }
  }

  onMounted(() => {
    fetchHotlist()
    eastMoney()
    douyinHotsearch()
  })
</script>
<style lang="less" scoped>
  .list-search {
    &__header {
      &-form {
        margin-bottom: -16px;
      }
    }

    &__container {
      padding: 8px;
      background-color: @component-background;
    }

    &__title {
      margin-bottom: 6px;
      font-size: 16px;
    }

    &__content {
      color: @text-color-secondary;
    }

    // &__action {
    //   margin-top: 10px;

    //   &-item {
    //     display: inline-block;
    //     padding: 0 16px;
    //     color: @text-color-secondary;

    //     &:nth-child(1) {
    //       padding-left: 0;
    //     }

    //     &:nth-child(1),
    //     &:nth-child(2) {
    //       border-right: 1px solid @border-color-base;
    //     }
    //   }

    //   &-icon {
    //     margin-right: 3px;
    //   }
    // }

    &__time {
      position: absolute;
      right: 20px;
      color: rgb(0 0 0 / 45%);
    }
  }
</style>
