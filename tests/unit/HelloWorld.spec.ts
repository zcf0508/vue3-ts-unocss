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

    expect(store.count).toBe(0);
  });

  it('测试 store add 操作', async () => {
    const store = useCounterStore();

    expect(store.count).toBe(0);

    const input = wrapper.find('input');
    await input.setValue(2);

    await wrapper.findAll('button')[0].trigger('click');

    await input.setValue(3);

    await wrapper.findAll('button')[0].trigger('click');

    await wrapper.vm.$nextTick();

    expect(store.count).toBe(5);
    expect(store.double).toBe(10);
  });
});
