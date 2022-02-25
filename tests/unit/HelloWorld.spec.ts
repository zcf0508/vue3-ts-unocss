import { shallowMount, mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("测试组件加载 props.msg ", () => {
    const msg = "This is Test";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it("测试 vuex plus 操作", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: "vuex plus" },
    });
    wrapper.findAll("button")[0].trigger("click");
    wrapper.findAll("button")[0].trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.count).toBe(2);
  });

  it("测试 vuex add 操作", async () => {
    const wrapper = shallowMount(HelloWorld, {
      props: { msg: "vuex add" },
    });

    // 由于上一个测试对 vuex 中的 count 做了 plus 操作，所以这时 count 值为 2

    const input = wrapper.find("input");

    input.setValue("2");
    wrapper.findAll("button")[1].trigger("click");

    input.setValue("3");
    wrapper.findAll("button")[1].trigger("click");

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.count).toBe(7); // 最终结果为 「 2 」 + 2 + 3 = 7
  });
});
