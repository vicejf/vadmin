<template>
  <!-- <Card title="热搜" v-bind="$attrs">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template> -->

  <Collapse v-model:activeKey="activeKey" class="!w-full">
    <CollapsePanel key="1" header="百度热搜">
      <div :class="`${prefixCls}__container`">
        <List>
          <template v-for="item in searchList" :key="item.id">
            <List.Item>
              <List.Item.Meta>
                <template #description>
                  <div :class="`${prefixCls}__content`">
                    {{ item.content }}
                  </div>
                  <div :class="`${prefixCls}__action`">
                    <template v-for="action in actions" :key="action.icon">
                      <div :class="`${prefixCls}__action-item`">
                        <Icon
                          v-if="action.icon"
                          :class="`${prefixCls}__action-icon`"
                          :icon="action.icon"
                          :color="action.color"
                        />
                        {{ action.text }}
                      </div>
                    </template>
                    <span :class="`${prefixCls}__time`">{{ item.time }}</span>
                  </div>
                </template>
                <template #title>
                  <p :class="`${prefixCls}__title`">
                    {{ item.title }}
                  </p>
                  <div>
                    <template v-for="tag in item.description" :key="tag">
                      <Tag class="mb-2">
                        {{ tag }}
                      </Tag>
                    </template>
                  </div>
                </template>
              </List.Item.Meta>
            </List.Item>
          </template>
        </List>
      </div>
    </CollapsePanel>
    <CollapsePanel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </CollapsePanel>
    <CollapsePanel key="3" header="This is panel header 3" collapsible="disabled">
      <p>{{ text }}</p>
    </CollapsePanel>
  </Collapse>
  <!-- </Card> -->
</template>
<script lang="ts" setup>
  import { Card, Collapse, CollapsePanel, List } from 'ant-design-vue'
  import { ref } from 'vue'
  import { actions, searchList } from './datax'

  const text = ref(
    `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`
  )
  const activeKey = ref(['1'])

  const prefixCls = 'list-search'
</script>
<style lang="less" scoped>
  .list-search {
    &__header {
      &-form {
        margin-bottom: -16px;
      }
    }

    &__container {
      padding: 12px;
      background-color: @component-background;
    }

    &__title {
      margin-bottom: 12px;
      font-size: 18px;
    }

    &__content {
      color: @text-color-secondary;
    }

    &__action {
      margin-top: 10px;

      &-item {
        display: inline-block;
        padding: 0 16px;
        color: @text-color-secondary;

        &:nth-child(1) {
          padding-left: 0;
        }

        &:nth-child(1),
        &:nth-child(2) {
          border-right: 1px solid @border-color-base;
        }
      }

      &-icon {
        margin-right: 3px;
      }
    }

    &__time {
      position: absolute;
      right: 20px;
      color: rgb(0 0 0 / 45%);
    }
  }
</style>
