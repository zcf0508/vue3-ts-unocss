import { mount } from '@vue/test-utils';
import { createPinia } from 'pinia';
import HelloWorld from '@/components/HelloWorld.vue';

const msg = 'This is Test';
const wrapper = mount(HelloWorld, {
  props: { msg },
  global: {
    plugins: [createPinia()],
  },
});

describe('helloWorld.vue', () => {
  it('测试组件加载 props.msg ', () => {
    expect(wrapper.text()).toMatch(msg);
  });

  it('测试 store plus 操作', async () => {
    const store = useCounterStore();

    await wrapper.findAll('button')[0].trigger('click');
    await wrapper.findAll('button')[0].trigger('click');

    await wrapper.vm.$nextTick();

    expect(store.count).toBe(2);
    expect(store.double).toBe(4);
  });

  it('测试 store add 操作', async () => {
    const store = useCounterStore();

    // 由于上一个测试对 store 中的 count 做了 plus 操作，所以这时 count 值为 2

    expect(store.count).toBe(2);

    const input = wrapper.find('input');

    await input.setValue(2);
    await wrapper.findAll('button')[1].trigger('click');

    await input.setValue(3);
    await wrapper.findAll('button')[1].trigger('click');

    await wrapper.vm.$nextTick();

    expect(store.count).toBe(7); // 最终结果为 「 2 」 + 2 + 3 = 7
  });
});
